# Seu site na internet

No fim, qualquer pessoa com o link abre o seu site — e este PC fica sem nenhum rastro da sua conta.

## Palavras de hoje

| Palavra | O que é |
|---|---|
| repositório | a pasta do seu projeto, guardada no GitHub |
| commit | salvar uma versão do projeto, com uma mensagem |
| `estilos.css` | o arquivo só do visual; as 3 páginas usam ele |
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
3. **Subir os arquivos** — **Add file** → **Upload files**. Abra a pasta `site` no Explorador e arraste os **4 arquivos** (`index.html`, `sobre.html`, `contato.html` e `estilos.css`) — os arquivos, não a pasta! Clique **Commit changes**.
   **Teste:** o repositório lista os 4 arquivos na lista principal.
4. **Ligar o site** — **Settings** → **Pages** (menu da esquerda). Em **Branch** escolha `main` e `/ (root)` → **Save**.
   **Teste:** depois de 1–2 minutos (F5 de vez em quando) aparece **Your site is live at ...**.
5. **Abrir** — clique em **Visit site**. O endereço é `https://<seu-usuario>.github.io/meu-site/`. Clique no menu para ir e voltar entre as páginas.
   **Teste:** as 3 páginas abrem **pintadas** (roxo e bonitas). Agora abra o mesmo link **no seu celular**.
6. **Sair da conta (obrigatório)** — faça a etapa 0 de novo, igualzinha.
   **Teste:** o mesmo da etapa 0.

## Check

- [ ] Seu link `...github.io/meu-site/` abre no celular.
- [ ] Você sabe dizer **quem** está rodando o seu site agora (não é este PC).
- [ ] Você sabe dizer por que o `index.html` precisa estar na **frente**, não dentro de pasta.
- [ ] Você sabe dizer por que o site ficou sem cor quando o `estilos.css` não sobe.
- [ ] Na etapa 6, o site mostra **Sign in** e não sobrou credencial com **github**.

## Travou?

| Você vê | Faça |
|---|---|
| o link dá 404 | espere 2 min e F5; confira se o `index.html` está na lista principal do repo |
| 404 e o link tem `/site/` no meio | você subiu a pasta; apague e suba os 4 arquivos soltos (ou chame o professor) |
| a página abre sem cor | faltou o `estilos.css` no repo, ou ele está dentro de uma pasta; suba ele solto, junto dos HTML |
| clico no menu e dá 404 | o nome do arquivo precisa ser **igual** ao do `href`, com maiúscula |
| não acho **Pages** | o repo precisa ser **Public** |

## Sobrou tempo (antes da etapa 6!)

1. Abra o `estilos.css` no GitHub → ícone de **lápis** → no topo, troque a cor de `--cor-principal` (ex.: `#DB2777`) → **Commit changes**. Espere 1 minuto e dê Ctrl+F5 no seu site. **As 3 páginas mudaram mexendo em 1 arquivo.**
2. Mande o link pra alguém da turma abrir.
3. Troque também `--cor-escura` e mude o texto do `index.html` pelo lápis.
