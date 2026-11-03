# Publicar o site no GitHub — CY2 · aula 02

`bloco 1h30 · escopo real ~55 min`

**Sai de:** site que só abre no PC da escola → **chega em:** link `usuario.github.io/meu-site` aberto no celular dele + PC deslogado
**Já tem:** HTML e CSS básico; site com 3 páginas + `estilos.css` (CSS num arquivo só, separado do HTML) · **Novo hoje:** conta GitHub, repositório, upload pelo navegador, GitHub Pages · **Fora:** `git`, terminal, commit por comando, domínio próprio, escrever CSS novo (o `estilos.css` já vem pronto)
**Abre com:** "Seu site está lindo. Quem do outro lado da cidade consegue ver ele agora?"

| Min | O quê | Teste na tela |
|----:|---|---|
| 0–5 | **Limpar o PC** (DESAFIO etapa 0): site → Sign out · Gerenciador de Credenciais → remove `github` | github.com mostra "Sign in", nenhuma credencial `github` |
| 5–10 | Abertura → "arquivo no PC" x "arquivo na internet" | ele diz por que o amigo não abre `C:\...\index.html` |
| 10–25 | Conta no github.com (código chega no e-mail) | `github.com/<usuario>` abre |
| 25–32 | Repo `meu-site`, **Public**, com README | página do repo aparece |
| 32–40 | **Add file → Upload files**: arrastar os **4 arquivos** (3 HTML + `estilos.css`, não a pasta) → Commit changes | 4 arquivos listados na raiz do repo |
| 40–50 | Settings → Pages → Branch `main` / `(root)` → Save | faixa "Your site is live" (leva 1–2 min) |
| 50–58 | Abrir `https://<usuario>.github.io/meu-site/` e clicar no menu | as 3 páginas pintadas, ida e volta |
| **✅ 58** | **MARCO MÍNIMO — daqui pra baixo é bônus** | link abre **no celular dele** |
| 58–70 | Lápis (Edit) no `estilos.css` → trocar `--cor-principal` → Commit → esperar → Ctrl+F5 | **as 3 páginas** mudam de cor de uma vez |
| **70–80** | **LOGOUT — nunca corta** (etapa 0 de novo) | site mostra "Sign in", nenhuma credencial `github` |

**Atrasou?** corta o bônus da edição. Nunca corta o logout (PC compartilhado).
Conta travou na verificação? Acompanha a sua demo e cria em casa; logout igual.

**Limpar o PC (início e fim) — só cliques:**

| # | Onde | Faz |
|--:|---|---|
| 1 | github.com | foto (canto de cima) → **Sign out** |
| 2 | Tecla Windows → **credenciais** → Gerenciador de Credenciais → **Credenciais do Windows** | remove todo item com `github` |
| ✓ | | site mostra "Sign in" e nenhuma credencial com `github` |

| Conceito | Em 1 frase | ✋ Checagem (resposta boa) |
|---|---|---|
| repositório | a pasta do projeto, guardada no GitHub | "O que tem no seu repo?" (3 HTML + 1 CSS) |
| `estilos.css` | o visual num arquivo só; os HTML apontam pra ele com `<link>` | "Mudei 1 cor. Quantos arquivos mexi?" (1) |
| commit | salvar uma versão, com mensagem | "O botão verde do upload faz o quê?" (guarda a versão) |
| GitHub Pages | o GitHub vira o servidor do seu site | "Quem roda seu site agora?" (o GitHub, não o PC) |
| URL do site | `usuario.github.io/repo` | "Por que o seu link é diferente do do colega?" (usuário e repo mudam) |

| Ele vê | Você checa |
|---|---|
| link dá **404** | `index.html` está na **raiz** do repo? (arrastou a pasta `site` inteira → o link vira `/meu-site/site/`) |
| 404 logo depois do Save | esperar 1–2 min e F5; ver a aba **Actions** se a faixa "live" não sai |
| página abre **sem cor** | faltou subir o `estilos.css`, ou ele não está na **mesma pasta** dos HTML, ou o nome é outro (`<link href>` tem que ser igual) |
| menu dá 404 | nome do arquivo ≠ `href` (maiúscula conta no GitHub; no Windows não contava) |
| opção **Pages** não aparece / pede plano pago | repo está **Private** → Settings → mudar pra Public |
| editou e nada mudou | faltou o Commit, ou não esperou 1 min; F5 forçado (Ctrl+F5) |
| código não chega no e-mail | spam; GitHub exige 13+ anos |

**Antes:** pasta `site/` do aluno com `estilos.css` (se não tiver, usar [inicial/site/](./inicial/site/)), aluno com o e-mail e o celular à mão
Aluno: [DESAFIO.md](./DESAFIO.md) · Respostas: [gabarito/](./gabarito/)
