# Gabarito do DESAFIO.md — para o professor

O resultado final é o site de [`../inicial/site/`](../inicial/site/) no ar em
`https://<usuario>.github.io/meu-site/`. Esses 3 HTML são os do gabarito da aula 01:
use só se o aluno não tiver o dele salvo.

---

## Por que sem `git`

CY2 ainda não viu terminal nem `git`. O upload pelo navegador faz o mesmo (um commit)
sem comando. `git clone/push` é a aula CY3 01. Se perguntarem "o que o botão verde
fez?": "guardou uma versão do projeto, com mensagem" — essa palavra (commit) volta no CY3.

## Etapa por etapa — o que mostrar

**Abertura.** Peça o celular dele e abra `C:\...\index.html`: não existe. Esse é o
problema que a aula resolve.

**Etapa 3 (upload).** O erro número um: arrastar a pasta `site`. O GitHub preserva a
pasta e o site vai pra `/meu-site/site/`. Mostre os dois endereços. Corrigir: apagar
os arquivos (abrir o arquivo → lixeira → Commit) e subir os 3 soltos.

**Etapa 4 (Pages).** Settings → Pages → Source: *Deploy from a branch* → `main` /
`(root)`. Primeira publicação leva 1–2 min: aproveite pra fazer a pergunta "quem roda
o site agora?".

**Etapa 5.** O link é minúsculo (`usuario.github.io` sempre vira minúsculo). Se o
usuário tem maiúscula, o link sai diferente do que ele digitou; é normal.

## Perguntas da aula — respostas esperadas

| Pergunta | Resposta boa | Se ele errar |
|---|---|---|
| "Por que seu amigo não abre o `index.html` do seu PC?" | o arquivo está só no PC dele | mostre o endereço `C:\...` vs `https://...` |
| "Quem roda seu site agora?" | o GitHub | feche o VS Code e abra o link no celular |
| "Por que o `index.html` precisa estar na frente?" | é a página que abre quando não se pede nenhuma | mostre o link `/meu-site/` sem `index.html` |
| "Por que seu link é diferente do do colega?" | usuário e nome do repo mudam | compare os dois lados |

## Erros que vão acontecer

**404 logo após salvar.** Normal por 1–2 min. Se passar de 5, aba **Actions**: o
deploy aparece lá; se estiver vermelho, Settings → Pages e Save de novo.

**Sem cor / só texto.** Arquivo com `<style>` vazio (subiu o `inicial` da aula 01 em vez do pintado). Cheque o `<style>` no
GitHub (clicar no arquivo).

**Menu quebrado só no site.** No Windows `Sobre.html` abre como `sobre.html`; no
GitHub não. Corrija o nome no `href` (ou renomeie o arquivo no GitHub: lápis → nome).

**Ficou Private.** Pages gratuito só em repo Public. Settings → fim da página →
*Change visibility*.

**Verificação por e-mail.** Código vai pro e-mail e expira; se o aluno não abre o
e-mail agora, ele cria em casa — acompanha a sua demo.

## Logout

Mesmo ritual da etapa 0. Pages continua no ar depois do logout; o site é do aluno,
não do PC.

## Se sobrar tempo

Edição pelo lápis: o ciclo editar → commit → esperar → Ctrl+F5 mostra que o site
"vive" no GitHub. A mudança leva ~1 min pra aparecer.

## Se reclamarem do `<style>` copiado 3 vezes

Hoje não é o dia: CSS externo fica pra outra aula. Se o aluno já tiver feito, é só
subir o `.css` junto, na raiz do repo, e o link continua funcionando.
