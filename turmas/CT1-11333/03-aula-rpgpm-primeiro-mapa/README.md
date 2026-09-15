# Primeiro Mapa no RPG Paper Maker — abrir, pintar, testar

Aula **#3** da turma **#11333 (CT1)** — Guilherme.
Primeiro contato com o RPG Paper Maker: ele cria o projeto, pinta um mapa
próprio e vê o personagem andando nele. Nenhum pré-requisito de programação.

> O cronograma oficial chama esta aula de "Criando Concept Arts com Gemini".
> Trocado por um bloco de 6 aulas de RPG Paper Maker (#3 a #8) a pedido do
> aluno/professor: ele já veio do CK4 (Roblox/Lua, Arduino) e rende mais
> construindo um jogo inteiro do que gerando arte solta. Cronograma oficial
> inalterado — adaptação pontual, registrada no progresso da turma.

## De onde o aluno está saindo

Fez as aulas #1 (Code.org) e #2 (sprites no Scratch). **Nunca abriu o RPG
Paper Maker.** Já mexeu em Roblox Studio no CK4, então "editor com mapa 3D e
câmera" não é choque — mas a interface aqui é **toda em inglês** e é o maior
atrito da aula, não o conceito.

## O que o aluno pratica

- Criar projeto no editor web (`Blank` / `Default` / `Tutorial`)
- Ler a janela do editor: seletor de mapas, seletor de tiles, área de desenho
- Pintar chão (`Floor`) e colocar sprites (`Face sprite`) com pincel e balde
- Mover a câmera e entender as coordenadas `X / Y / Z`
- Definir onde o herói começa (`Start position`)
- Testar o jogo (`Test > Play`) e salvar/exportar o projeto

## O que fica de fora (de propósito)

NPC, diálogo, evento, comando, batalha, item — **tudo** que é objeto fica para
a aula #4. Altura/montanha (`Mountain`) e objeto 3D só entram como bônus.
Se ele perguntar "e pra alguém falar comigo?", a resposta é: "é exatamente a
próxima aula".

## Formato

Conduzida por você, com ele no teclado o tempo todo. 3 blocos: montar o
projeto → pintar o mapa → testar e salvar. O `DESAFIO.md` ("A praça da vila")
é a última parte da aula, feita por ele sozinho.

## Como rodar

Sem instalar nada. No navegador (Chrome ou Edge):

1. Abrir <https://rpg-paper-maker.com>
2. Clicar em **OPEN WEB APP** (ou ir direto em <https://rpg-paper-maker.com/play>)
3. Esperar o "Loading textures..." (leva ~30s na primeira vez)

Versão testada: **3.2.14** (web).

> ⚠️ **O projeto fica salvo dentro do navegador daquele PC** (IndexedDB), não
> na nuvem e não em arquivo. Limpou dados do navegador ou trocou de máquina =
> projeto perdido. Por isso toda aula termina com `File > Export project...`
> e o `.zip` vai pro pendrive/Drive do aluno. Isso não é opcional.

## Arquivos

```text
03-aula-rpgpm-primeiro-mapa/
├── README.md              # este arquivo (professor)
├── ROTEIRO-AULA.md        # professor: blocos de tempo, marco mínimo, erros comuns
├── DESAFIO.md             # ALUNO: o que fazer e o que testar
├── CARTAO-DE-MEMORIA.md   # ALUNO: folha de consulta (termos em inglês do editor)
└── gabarito/
    └── GABARITO.md        # professor: caminho exato de cliques + respostas esperadas
```

## Registro pós-aula

Não editar o `.md` na mão no fim da aula. **Despejar cru** (chat, voz, bloco
de notas): até onde ele chegou de verdade, onde travou e o que cortar/adiantar
na #4. O arquivo da turma é preenchido a partir desse despejo.
Fluxo em [alunos/WORKFLOW-AULAS.md](../../../alunos/WORKFLOW-AULAS.md).
