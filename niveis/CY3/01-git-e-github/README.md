# Git e GitHub — CY3 · aula 01

`bloco 1h30 · escopo real ~60 min`

**Sai de:** projeto só no PC da escola → **chega em:** 1 commit dele no GitHub + PC deslogado
**Já tem:** VS Code, terminal básico · **Novo hoje:** repositório, commit, push · **Fora:** branch, pull, `.gitignore`
**Abre com:** "Se esse PC queimar hoje, onde está o seu projeto?"

| Min | O quê | Teste na tela |
|----:|---|---|
| 0–5 | **Limpar o PC** (DESAFIO etapa 0): site → Sign out · Gerenciador de Credenciais → remove `github` · VS Code → Sign Out | site mostra "Sign in", nenhuma credencial `github` |
| 5–10 | Abertura → Git x GitHub | ele diz qual é programa e qual é site |
| 10–25 | Conta no github.com (código chega no e-mail) | `github.com/<usuario>` abre |
| 25–35 | Repo `meu-primeiro-repo`, público, **com README** | página do repo mostra o README |
| 35–45 | `git config` → `git clone` → abrir no VS Code | pasta com `README.md` |
| 45–60 | Editar README → `status` → `add` → `commit` | `git log` mostra o commit dele |
| 60–70 | `git push` → **Sign in with your browser** → confere a conta → Authorize → F5 | texto novo no site |
| **✅ 70** | **MARCO MÍNIMO — daqui pra baixo é bônus** | |
| 70–80 | 2º commit → aba **Commits** | 2 commits dele |
| **80–90** | **LOGOUT — nunca corta** (etapa 0 de novo) | site mostra "Sign in", nenhuma credencial `github` |

**Atrasou?** corta o 2º commit. Nunca corta o logout (PC compartilhado).
Conta travou na verificação? Acompanha a sua demo e cria em casa; logout igual.

**Limpar o PC (início e fim) — só cliques:**

| # | Onde | Faz |
|--:|---|---|
| 1 | github.com | foto (canto de cima) → **Sign out** |
| 2 | Tecla Windows → **credenciais** → Gerenciador de Credenciais → **Credenciais do Windows** | remove todo item com `github`: `git:https://github.com`, `gh:github.com:...`, `...github.auth` |
| 3 | VS Code → ícone de pessoa (canto de baixo à esquerda) | conta do GitHub → **Sign Out** |
| ✓ | | site mostra "Sign in" e nenhuma credencial com `github` |

| Conceito | Em 1 frase | ✋ Checagem (resposta boa) |
|---|---|---|
| Git | programa no PC que tira "fotos" da pasta | "Precisa de internet?" (não) |
| GitHub | site que guarda as fotos na nuvem | "Git e GitHub são a mesma coisa?" (não) |
| repositório | a pasta + todas as fotos dela | "O que tem no seu repo?" (README + histórico) |
| commit | uma foto, com mensagem | "Fiz commit. Está no GitHub?" (não, só no PC) |
| push | manda as fotos pro GitHub | "O que fez o texto aparecer no site?" (push) |

| Ele vê | Você checa |
|---|---|
| `Author identity unknown` | faltou `git config` |
| `fatal: not a git repository` | fora da pasta → `cd meu-primeiro-repo` |
| `nothing to commit` / `nothing added` | não salvou / pulou o `add` |
| push pede **senha** ou não abre o navegador | [gabarito/EMERGENCIA.md](./gabarito/EMERGENCIA.md) |
| `Permission ... denied to <outro aluno>` (403) | login de outro aluno no PC ou no navegador → etapa 0 inteira e push de novo |
| código não chega no e-mail | spam; GitHub exige 13+ anos |

**Antes:** aluno com o e-mail no celular
Aluno: [DESAFIO.md](./DESAFIO.md) · Respostas: [gabarito/](./gabarito/) · Deu ruim: [EMERGENCIA.md](./gabarito/EMERGENCIA.md)
