# Gabarito do DESAFIO.md — para o professor

Sequência completa, na ordem. Exemplo com usuário `ana-souza` e e-mail
`ana@exemplo.com` — o que importa é o aluno usar **a conta dele**.

---

## Etapas 1 e 2 — conta e repositório (no site)

Não tem comando. Confira na tela:

- `github.com/ana-souza` abre o perfil.
- `github.com/ana-souza/meu-primeiro-repo` existe, é **Public** e mostra o README
  criado pelo GitHub (só o título `# meu-primeiro-repo`).

---

## Etapa 3 — trazer pro PC

```bash
git config --global user.name "Ana Souza"
git config --global user.email "ana@exemplo.com"

git clone https://github.com/ana-souza/meu-primeiro-repo.git
cd meu-primeiro-repo
code .
```

Saída esperada do clone: `Cloning into 'meu-primeiro-repo'...` — repo público,
**não pede login aqui**. O login só aparece no push.

---

## Etapas 4 e 5 — commit e push

### `meu-primeiro-repo/README.md` (exemplo — o conteúdo é dele)

```markdown
# meu-primeiro-repo

Ana Souza

- Tenho 14 anos
- Gosto de jogar e desenhar
- Estou aprendendo React
```

### Comandos

```bash
git status                      # README.md em vermelho: "modified"
git add README.md
git status                      # README.md em verde: "Changes to be committed"
git commit -m "Escreve sobre mim no README"
git log                         # 2 commits: o dele + "Initial commit" do GitHub (sai com q)
git push                        # 1ª vez: janela "Connect to GitHub" → Sign in with your browser
```

Depois do push: F5 em `github.com/ana-souza/meu-primeiro-repo` mostra o texto novo.

**Resposta esperada — por que só apareceu depois do push:** "o commit fica só no
PC; o push é que manda pro GitHub." Se ele disser "commit salva no GitHub", o
conceito não fechou — volte na tabela de Conceitos.

**Resposta esperada — por que `add` antes de `commit`:** "o add escolhe o que
entra na foto; o commit tira a foto."

---

## Etapas 0 e 6 — limpar o PC (antes e depois)

Por que a etapa 0 existe: o `git push` autoriza pelo navegador e guarda o login
no Windows. Se o navegador ou o Windows ainda tem a conta de **outro aluno**, o
push vai pra conta errada ou dá `Permission to ... denied to <outro aluno>` (403).

Ordem (as duas vezes, sem terminal):

1. github.com → foto → **Sign out**.
2. Tecla Windows → **credenciais** → **Gerenciador de Credenciais** →
   **Credenciais do Windows** → remover todo item com `github` no nome. Os
   comuns: `git:https://github.com` (Git), `gh:github.com:...` (GitHub CLI),
   `vscodevscode.github-authentication/github.auth` (VS Code).
3. VS Code → ícone de pessoa → conta do GitHub → **Sign Out**.

O `user.name`/`user.email` do aluno anterior não precisa apagar: o `git config`
da etapa 3 grava por cima.

A pasta `meu-primeiro-repo` pode ficar no PC: sem o login, ninguém consegue dar
push na conta dele a partir dela.

---

## Gabarito do "Se sobrar tempo"

### 1. Segundo commit

```bash
git add README.md
git commit -m "Adiciona mais uma linha"
git push
```

Aba **Commits** no GitHub: 3 commits (Initial commit + os 2 dele).

### 2. `index.html`

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Ana Souza</title>
</head>
<body>
  <h1>Ana Souza</h1>
</body>
</html>
```

```bash
git add index.html
git commit -m "Cria index.html"
git push
```

### 3. Link

`https://github.com/ana-souza/meu-primeiro-repo` — o colega abre sem precisar de conta.
