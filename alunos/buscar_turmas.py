"""
Busca as turmas do professor no portal da Ctrl Play (astro-api), com a lista de
alunos e em qual aula cada turma esta.

So usa a biblioteca padrao do Python (nao precisa 'pip install').

Autenticacao (descoberta inspecionando o portal):
  POST /api/v1/auth/token/  body JSON {"username","password"}
    -> responde 204 e grava cookies httpOnly de sessao (reusados nas chamadas GET).

Endpoints usados:
  GET /api/v1/users/me/
  GET /api/v1/classes/?teacher_id=<id>&status=IN_PROGRESS&status=OPEN
  GET /api/v1/students/?klass_id=<id>&enrollment_status=ACTIVE&enrollment_status=CONCLUDED
  GET /api/v1/scheduled-lessons/?klass_id=<id>&ordering=datetime

Uso:
  1. Preencha alunos/.env com CTRLPLAY_USER e CTRLPLAY_PASS
  2. python alunos/buscar_turmas.py
     python alunos/buscar_turmas.py --json > turmas.json
     python alunos/buscar_turmas.py --gerar-progresso
"""

import argparse
import json
import os
import sys
import urllib.error
import urllib.parse
import urllib.request
from http.cookiejar import CookieJar
from pathlib import Path

API = "https://astro-api.ctrlplay.com.br/api/v1"
AQUI = Path(__file__).resolve().parent


def carregar_env() -> None:
    """Le alunos/.env (KEY=VALUE por linha) e joga em os.environ, sem sobrescrever."""
    arq = AQUI / ".env"
    if not arq.exists():
        return
    for linha in arq.read_text(encoding="utf-8").splitlines():
        linha = linha.strip()
        if not linha or linha.startswith("#") or "=" not in linha:
            continue
        chave, _, valor = linha.partition("=")
        os.environ.setdefault(chave.strip(), valor.strip().strip('"').strip("'"))


def criar_opener() -> urllib.request.OpenerDirector:
    opener = urllib.request.build_opener(
        urllib.request.HTTPCookieProcessor(CookieJar())
    )
    opener.addheaders = [("Accept", "application/json")]
    return opener


def login(opener, usuario: str, senha: str) -> None:
    corpo = json.dumps({"username": usuario, "password": senha}).encode()
    req = urllib.request.Request(
        f"{API}/auth/token/",
        data=corpo,
        method="POST",
        headers={"Content-Type": "application/json"},
    )
    try:
        with opener.open(req, timeout=30) as resp:
            if resp.status not in (200, 204):
                sys.exit(f"Falha no login ({resp.status})")
    except urllib.error.HTTPError as e:
        sys.exit(f"Falha no login ({e.code}): {e.read().decode(errors='replace')[:300]}")


def get(opener, caminho: str, params: dict | None = None):
    url = f"{API}{caminho}"
    if params:
        url += "?" + urllib.parse.urlencode(params, doseq=True)
    with opener.open(url, timeout=30) as resp:
        return json.loads(resp.read().decode())


def paginar(opener, caminho: str, params: dict) -> list[dict]:
    itens: list[dict] = []
    pagina = 1
    while True:
        p = dict(params, **{"page[number]": pagina, "page[size]": 100})
        dados = get(opener, caminho, p)
        lote = dados.get("data") or dados.get("results") or []
        itens.extend(lote)
        if not (dados.get("links") or {}).get("next") or not lote:
            break
        pagina += 1
    return itens


def buscar_turmas(opener) -> list[dict]:
    teacher_id = get(opener, "/users/me/")["id"]
    turmas = paginar(
        opener,
        "/classes/",
        {"teacher_id": teacher_id, "status": ["IN_PROGRESS", "OPEN"], "ordering": "day_time"},
    )
    for t in turmas:
        t["_alunos"] = buscar_alunos(opener, t["id"])
        t["_aulas"] = buscar_aulas(opener, t["id"])
    return turmas


def buscar_alunos(opener, klass_id: int) -> list[dict]:
    brutos = paginar(
        opener,
        "/students/",
        {"klass_id": klass_id, "enrollment_status": ["ACTIVE", "CONCLUDED"]},
    )
    return [
        {
            "id": s.get("id"),
            "nome": f'{s.get("first_name", "")} {s.get("last_name", "")}'.strip(),
            "username": s.get("username"),
            "status": s.get("status"),
        }
        for s in brutos
    ]


def buscar_aulas(opener, klass_id: int) -> list[dict]:
    brutos = paginar(
        opener, "/scheduled-lessons/", {"klass_id": klass_id, "ordering": "datetime"}
    )
    aulas = []
    for x in brutos:
        licao = x.get("lesson") or {}
        aulas.append(
            {
                "ordem": licao.get("order"),
                "nome": licao.get("name"),
                "data": (x.get("datetime") or "")[:10],
                "concluida": bool(x.get("has_done") if "has_done" in x else x.get("done")),
            }
        )
    aulas.sort(key=lambda a: (a["ordem"] is None, a["ordem"] or 0))
    return aulas


def aula_atual(aulas: list[dict]) -> dict | None:
    """Primeira aula ainda nao concluida (a proxima a ser dada)."""
    for a in aulas:
        if not a["concluida"]:
            return a
    return aulas[-1] if aulas else None


def _dias(turma: dict) -> str:
    return ", ".join(
        f'{d.get("day")} {d.get("time", "")[:5]}' for d in turma.get("day_times", [])
    )


def resumo(turma: dict) -> str:
    aulas = turma["_aulas"]
    feitas = sum(1 for a in aulas if a["concluida"])
    atual = aula_atual(aulas)
    linhas = [
        f'#{turma.get("id")} | {turma.get("name")}',
        f'    curso: {turma.get("course_path_slug")}  status: {turma.get("status")}',
        f'    encontros: {_dias(turma)}',
        f'    periodo: {str(turma.get("klass_start_date"))[:10]} a '
        f'{str(turma.get("klass_end_date"))[:10]}',
        f'    progresso: {feitas}/{len(aulas)} aulas concluidas',
    ]
    if atual:
        linhas.append(
            f'    aula atual: #{atual["ordem"]} - {atual["nome"]} ({atual["data"]})'
        )
    linhas.append(f'    alunos ({len(turma["_alunos"])}):')
    for al in turma["_alunos"]:
        linhas.append(f'      - {al["nome"]}  [{al["status"]}]')
    return "\n".join(linhas)


def gerar_progresso(turmas: list[dict]) -> None:
    template = (AQUI / "progresso-turma-template.md").read_text(encoding="utf-8")
    destino = AQUI / "progresso"
    destino.mkdir(exist_ok=True)
    for t in turmas:
        aulas = t["_aulas"]
        atual = aula_atual(aulas)
        periodo = f'{str(t.get("klass_start_date"))[:10]} a {str(t.get("klass_end_date"))[:10]}'

        cronograma = "\n".join(
            f'| {a["ordem"] or "-":>2} | {a["data"]} | {a["nome"] or ""} | '
            f'{"✅ Concluída" if a["concluida"] else "⬜ Não iniciada"} | |'
            for a in aulas
        )
        alunos = "\n".join(
            f'| {al["nome"]} | | | | '
            f'{("#" + str(atual["ordem"])) if atual else ""} | {al["status"]} |'
            for al in t["_alunos"]
        )
        feitas = sum(1 for a in aulas if a["concluida"])

        import datetime as _dt

        texto = template
        texto = texto.replace("# Progresso da Turma — Template", "# Progresso da Turma")
        texto = texto.replace("<nome>", "Eduardo Paz")
        texto = texto.replace("<data>", _dt.date.today().isoformat())
        texto = texto.replace("<presencial / online>", "presencial")
        texto = texto.replace("<nome da turma>", str(t.get("name", "")))
        texto = texto.replace("<curso>", str(t.get("course_path_slug", "")))
        texto = texto.replace("<início> a <fim>", periodo)
        texto = texto.replace("<ex: Terça 14h-16h>", _dias(t))
        # substitui as linhas-exemplo das tabelas pelo conteudo real
        texto = texto.replace(
            "| 01 | | | ⬜ Não iniciada | |\n| 02 | | | ⬜ Não iniciada | |\n| 03 | | | ⬜ Não iniciada | |",
            cronograma,
        )
        texto = texto.replace(
            "| | | | | | |\n| | | | | | |",
            alunos or "| | | | | | |",
        )
        texto = texto.replace(
            "- **Aulas concluídas:** 0 / 0",
            f"- **Aulas concluídas:** {feitas} / {len(aulas)}",
        )
        if atual:
            texto = texto.replace(
                "- **Próximos passos:**",
                f'- **Próximos passos:** dar a aula #{atual["ordem"]} - {atual["nome"]}',
            )

        arq = destino / f'turma-{t.get("id")}.md'
        arq.write_text(texto, encoding="utf-8")
        print(f"gerado: {arq}")


def _limpar_para_json(turmas: list[dict]) -> list[dict]:
    saida = []
    for t in turmas:
        saida.append(
            {
                "id": t.get("id"),
                "nome": t.get("name"),
                "curso": t.get("course_path_slug"),
                "status": t.get("status"),
                "encontros": _dias(t),
                "inicio": str(t.get("klass_start_date"))[:10],
                "fim": str(t.get("klass_end_date"))[:10],
                "aula_atual": aula_atual(t["_aulas"]),
                "aulas": t["_aulas"],
                "alunos": t["_alunos"],
            }
        )
    return saida


def main() -> None:
    parser = argparse.ArgumentParser(description="Busca turmas no portal da Ctrl Play")
    parser.add_argument("--json", action="store_true", help="imprime o JSON das turmas")
    parser.add_argument("--gerar-progresso", action="store_true", help="cria um .md por turma")
    args = parser.parse_args()

    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass

    carregar_env()
    usuario = os.environ.get("CTRLPLAY_USER")
    senha = os.environ.get("CTRLPLAY_PASS")
    if not usuario or not senha:
        sys.exit("Preencha CTRLPLAY_USER e CTRLPLAY_PASS no arquivo alunos/.env")

    opener = criar_opener()
    login(opener, usuario, senha)
    turmas = buscar_turmas(opener)

    if args.json:
        print(json.dumps(_limpar_para_json(turmas), ensure_ascii=False, indent=2))
    else:
        print(f"{len(turmas)} turma(s):\n")
        for t in turmas:
            print(resumo(t))
            print()

    if args.gerar_progresso:
        gerar_progresso(turmas)


if __name__ == "__main__":
    main()
