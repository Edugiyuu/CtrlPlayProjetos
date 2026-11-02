# Seu site na internet

No fim, qualquer pessoa com o link abre o seu site — e este PC fica sem nenhum rastro da sua conta.

## Palavras de hoje

| Palavra | O que é |
|---|---|
| repositório | a pasta do seu projeto, guardada no GitHub |
| commit | salvar uma versão do projeto, com uma mensagem |
| GitHub Pages | o GitHub mostrando seus arquivos como um site |

## Faça

0. **Limpar o PC (antes de tudo)** — outros alunos já usaram este PC e a conta deles pode estar salva. Só cliques:
   - **github.com** → se tiver alguém logado: foto (canto de cima) → **Sign out**.
   - Tecla **Windows** → digite **credenciais** → **Gerenciador de Credenciais** → **Credenciais do Windows**. Em cada item com **github** no nome: clique → **Remover** → **Sim**.

   **Teste:** o github.com mostra **Sign in** e não sobrou nenhum item com **github** nas credenciais.
1. **Conta** — github.com → **Sign up**. Use um e-mail que você abre agora. Anote o usuário.
   **Teste:** `github.com/<seu-usuario>` mostra seu perfil.
2. **Repositório** — **+** → **New repository** → nome `meu-site`, **Public**, marque **Add a README file** → **Create repository**.
   **Teste:** a página mostra o `README.md`.
3. **Subir os arquivos** — **Add file** → **Upload files**. Abra a pasta `site` no Explorador e arraste os **3 arquivos** `.html` (não a pasta!). Clique **Commit changes**.
   **Teste:** o repositório lista `index.html`, `sobre.html` e `contato.html` na lista principal.
4. **Ligar o site** — **Settings** → **Pages** (menu da esquerda). Em **Branch** escolha `main` e `/ (root)` → **Save**.
   **Teste:** depois de 1–2 minutos (F5 de vez em quando) aparece **Your site is live at ...**.
5. **Abrir** — clique em **Visit site**. O endereço é `https://<seu-usuario>.github.io/meu-site/`. Clique no menu para ir e voltar entre as páginas.
   **Teste:** as 3 páginas abrem **pintadas**. Agora abra o mesmo link **no seu celular**.
6. **Sair da conta (obrigatório)** — faça a etapa 0 de novo, igualzinha.
   **Teste:** o mesmo da etapa 0.

## Check

- [ ] Seu link `...github.io/meu-site/` abre no celular.
- [ ] Você sabe dizer **quem** está rodando o seu site agora (não é este PC).
- [ ] Você sabe dizer por que o `index.html` precisa estar na **frente**, não dentro de pasta.
- [ ] Na etapa 6, o site mostra **Sign in** e não sobrou credencial com **github**.

## Travou?

| Você vê | Faça |
|---|---|
| o link dá 404 | espere 2 min e F5; confira se o `index.html` está na lista principal do repo |
| 404 e o link tem `/site/` no meio | você subiu a pasta; apague e suba os 3 arquivos soltos (ou chame o professor) |
| a página abre sem cor | o arquivo subido está sem o `<style>`; suba de novo o da pasta `site` |
| clico no menu e dá 404 | o nome do arquivo precisa ser **igual** ao do `href`, com maiúscula |
| não acho **Pages** | o repo precisa ser **Public** |

## Sobrou tempo (antes da etapa 6!)

1. Abra o `index.html` no GitHub → ícone de **lápis** → mude o título → **Commit changes**. Espere 1 minuto e dê Ctrl+F5 no seu site.
2. Mande o link pra alguém da turma abrir.
3. Mude a cor do `.header` do mesmo jeito e veja o site mudar sem abrir o VS Code.
