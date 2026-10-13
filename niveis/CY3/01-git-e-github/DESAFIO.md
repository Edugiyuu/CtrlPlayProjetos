# Seu primeiro repositório

No fim, seu texto está no GitHub pra qualquer um ver — e este PC sem nenhum rastro da sua conta.

## Comandos de hoje

| Comando | O que faz |
|---|---|
| `git config --global user.name "<nome>"` | diz ao Git seu nome (idem `user.email`) |
| `git clone <link>` | baixa o repositório numa pasta nova |
| `git status` | mostra o que mudou (vermelho = fora da foto, verde = dentro) |
| `git add <arquivo>` | coloca o arquivo na foto |
| `git commit -m "<mensagem>"` | tira a foto — **só no PC** |
| `git log` | lista os commits (sai com **q**) |
| `git push` | manda os commits pro GitHub |
| `git credential-manager github list` | mostra a conta salva no PC |
| `git credential-manager github logout <usuario>` | apaga essa conta do PC |
| `git config --global --unset user.name` | apaga seu nome do Git (idem `user.email`) |

## Faça

1. **Conta** — github.com → **Sign up**. Use um e-mail que você abre agora. Anote o usuário.
   **Teste:** `github.com/<seu-usuario>` mostra seu perfil.
2. **Repositório** — **+** → **New repository** → `meu-primeiro-repo`, Public, marque **Add a README file**.
   **Teste:** a página mostra o `README.md`.
3. **Trazer pro PC** — `git config` com seu nome e **o e-mail da conta**. Botão **Code** → copie o link → `git clone` → `cd` na pasta → abra no VS Code.
   **Teste:** a pasta tem o `README.md`.
4. **Commit** — escreva seu nome e 3 linhas sobre você no README e salve. `status` → `add` → `status` → `commit`.
   **Teste:** `git log` mostra seu commit. F5 no GitHub: ainda **não** aparece. Por quê?
5. **Push** — `git push`. Se abrir login, entre com **a sua** conta.
   **Teste:** F5 no GitHub mostra seu texto.
6. **Sair da conta (obrigatório)** — `github list` → `github logout` com seu usuário → `--unset` do nome e do e-mail → no site, sua foto → **Sign out**.
   **Teste:** `github list` vazio, `git config --global user.name` não imprime nada, site mostra **Sign in**.

## Check

- [ ] Seu README aparece em `github.com/<seu-usuario>/meu-primeiro-repo`.
- [ ] Você sabe dizer **por que** o texto só apareceu depois do push.
- [ ] Você sabe dizer **por que** o `add` vem antes do `commit`.
- [ ] Os 3 testes da etapa 6 passaram.

## Travou?

| Você vê | Faça |
|---|---|
| `Author identity unknown` | faltou o `git config` |
| `fatal: not a git repository` | `cd meu-primeiro-repo` |
| `nothing to commit` | salvou o arquivo? fez o `add`? |
| push pediu senha no terminal | chame o professor |

## Sobrou tempo (antes da etapa 6!)

1. 2º commit no README → veja a aba **Commits** no GitHub.
2. Crie `index.html` com seu nome num `<h1>`, commit e push.
3. Mande o link do seu repo pra alguém da turma.
