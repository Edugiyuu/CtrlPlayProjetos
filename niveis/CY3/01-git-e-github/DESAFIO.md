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

## Faça

0. **Limpar o PC (antes de tudo)** — outros alunos já usaram este PC e a conta deles pode estar salva. Só cliques:
   - **github.com** → se tiver alguém logado: foto (canto de cima) → **Sign out**.
   - Tecla **Windows** → digite **credenciais** → **Gerenciador de Credenciais** → **Credenciais do Windows**. Em cada item com **github** no nome: clique → **Remover** → **Sim**.
   - **VS Code** → ícone de pessoa (canto de baixo à esquerda) → se tiver conta do GitHub: **Sign Out**.

   **Teste:** o github.com mostra **Sign in** e não sobrou nenhum item com **github** nas credenciais.
1. **Conta** — github.com → **Sign up**. Use um e-mail que você abre agora. Anote o usuário.
   **Teste:** `github.com/<seu-usuario>` mostra seu perfil.
2. **Repositório** — **+** → **New repository** → `meu-primeiro-repo`, Public, marque **Add a README file**.
   **Teste:** a página mostra o `README.md`.
3. **Trazer pro PC** — `git config` com seu nome e **o e-mail da conta**. Botão **Code** → copie o link → `git clone` → `cd` na pasta → abra no VS Code.
   **Teste:** a pasta tem o `README.md`.
4. **Commit** — escreva seu nome e 3 linhas sobre você no README e salve. `status` → `add` → `status` → `commit`.
   **Teste:** `git log` mostra seu commit. F5 no GitHub: ainda **não** aparece. Por quê?
5. **Push** — `git push`. Na janela que abrir, clique **Sign in with your browser**. Confira que o navegador está na **sua** conta antes de clicar **Authorize**.
   **Teste:** F5 no GitHub mostra seu texto.
6. **Sair da conta (obrigatório)** — faça a etapa 0 de novo, igualzinha.
   **Teste:** o mesmo da etapa 0.

## Check

- [ ] Seu README aparece em `github.com/<seu-usuario>/meu-primeiro-repo`.
- [ ] Você sabe dizer **por que** o texto só apareceu depois do push.
- [ ] Você sabe dizer **por que** o `add` vem antes do `commit`.
- [ ] Na etapa 6, o site mostra **Sign in** e não sobrou credencial com **github**.

## Travou?

| Você vê | Faça |
|---|---|
| `Author identity unknown` | faltou o `git config` |
| `fatal: not a git repository` | `cd meu-primeiro-repo` |
| `nothing to commit` | salvou o arquivo? fez o `add`? |
| push pediu senha no terminal | chame o professor |
| `Permission ... denied to <outra pessoa>` | o PC está logado em outra conta → refaça a etapa 0 e o push |

## Sobrou tempo (antes da etapa 6!)

1. 2º commit no README → veja a aba **Commits** no GitHub.
2. Crie `index.html` com seu nome num `<h1>`, commit e push.
3. Mande o link do seu repo pra alguém da turma.
