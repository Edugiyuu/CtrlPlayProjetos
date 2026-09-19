# Galeria de desenhos (turtle) — bibliotecas e parâmetro

Aula **#8** · turma **#10671 (CY1)** · Enzo, Eric, Lucas Basso, Lucas Borges
Projeto novo, do zero: um desenho que roda no minuto 10 e vira um carimbo
reutilizável com `def`.

> **Adaptação:** o cronograma oficial prevê "Arquivos" nesta aula. Depois da #7
> (funções) — em que `return`/parâmetro não colaram e a turma dispersou — o
> eixo virou **bibliotecas** (`turtle` + `random`), que é conteúdo da #9 e
> entrega resultado visual imediato. Parâmetro volta aqui pela porta dos
> fundos: o número muda o desenho na tela. `return` fica fora. "Arquivos"
> aparece só como bônus no fim do gabarito e reentra na #9. Cronograma oficial
> inalterado; adaptação registrada no progresso da turma.

## Como rodar

```bash
python desenho.py
```

Sem instalar nada: `turtle` e `random` vêm com o Python. Cada aluno cria o
próprio `desenho.py` numa pasta dele. **O arquivo não pode se chamar
`turtle.py`** — quebra o `import`.

## Formato

4 etapas acumulativas num arquivo só. Etapas 1 e 2 na aula (a 2 fecha o marco
mínimo: um `def`, três tamanhos). Etapas 3 e 4 (`random`) se veio tranquilo.
Fecha com galeria: cada um roda o desenho do vizinho e explica o que o número
entre parênteses faz.

## Arquivos

| Arquivo | De quem | O quê |
|---|---|---|
| [ROTEIRO-AULA.md](./ROTEIRO-AULA.md) | professor | **abre este na aula** — blocos, marco, erros |
| [DESAFIO.md](./DESAFIO.md) | aluno | o que fazer e o que testar |
| [CARTAO-DE-MEMORIA.md](./CARTAO-DE-MEMORIA.md) | aluno | folha de consulta — imprimir 1 por aluno |
| [gabarito/](./gabarito/) | professor | `espiral.py` (isca), `quadrado.py` (exemplo mais simples), `desenho.py` (etapas 1–4), `poligono.py` (extra) |
