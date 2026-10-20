# Emergência — o push não funciona

Para o professor. Tente na ordem e pare no primeiro que funcionar.
Antes de tudo: a **limpeza** (README, tabela "Limpar o PC") foi feita?

| # | Sintoma | Faz |
|--:|---|---|
| 1 | Push dá `denied to <outro aluno>` (403) | `git remote -v`. Se o link tiver `outro@github.com`, corrige com `git remote set-url origin https://github.com/<usuario>/meu-primeiro-repo.git`. Depois limpeza de novo e push |
| 2 | Push **não abre** janela nem navegador | `git credential-manager github login --device` → aparece um código → abre **github.com/login/device** no navegador (logado na conta do aluno) → digita o código → push de novo |
| 3 | Push pede **Username/Password** no terminal | o Git está sem o Credential Manager. `git config --global credential.helper manager` e push de novo (deve voltar a abrir a janela → caso 2 se não abrir) |
| 4 | Continua pedindo **Password** | usar **token** como senha (abaixo) |
| 5 | Nada funcionou / internet da escola bloqueia | **plano final** (abaixo): o commit sai pelo site |

## Token como senha (caso 4)

1. github.com (conta do aluno) → foto → **Settings** → **Developer settings** → **Personal access tokens** → **Tokens (classic)** → **Generate new token (classic)**.
2. Note: `aula`, Expiration: **7 days**, marca só **repo** → **Generate token** → copia.
3. `git push` → Username: usuário do aluno · Password: **cola o token** (não aparece nada na tela, é normal) → Enter.
4. No fim da aula: mesma tela → **Delete** no token. E limpeza normal.

## Plano final — commit pelo site (caso 5)

O conceito da aula continua de pé: o commit é feito pelo GitHub em vez do terminal.

1. No repo do aluno, clica no `README.md` → lápis (**Edit**) → escreve o texto.
2. **Commit changes...** → mensagem → **Commit changes**.
3. Aba **Commits** mostra o commit. Conversa: "o site fez o commit e o push de uma vez".
4. Se ele já tinha o commit local: pode apagar a pasta do PC, o que vale está no site.

## Ainda deu errado?

Anote **a mensagem exata** do terminal (foto no celular) e em qual PC foi. Isso
vai no despejo pós-aula pra corrigir o material.
