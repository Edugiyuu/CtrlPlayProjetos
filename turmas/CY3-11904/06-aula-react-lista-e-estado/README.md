# Catálogo da Loja — Lista e Cálculo com Componentes

Aula #6 da turma CY3-11904 (Miguel). É a segunda aula de React. Continua na
mesma pasta do projeto Vite da aula #5 (`central-herois` ou um projeto novo) —
só troca o que os componentes mostram: em vez de heróis, um **catálogo de
produtos de loja**.

> Por que trocar o tema: a pedido do aluno, que não curtiu o tema "heróis".
> O conteúdo é idêntico; muda só o assunto dos dados.

## De onde o aluno está saindo

Na aula #5 o Miguel chegou até: criar o projeto com Vite, escrever um
componente e passar `props` escrevendo cada card na mão. **Não viu** `.map()`,
`useState`, eventos nem renderização condicional.

## O que o aluno pratica nesta aula

- Recapitular **componente** e **props** (com as próprias palavras)
- Guardar dados num **array** de objetos (`produtos.js`)
- Renderizar **uma lista de componentes** com `.map()`
- Entender para que serve o **`key`**
- **Calcular dentro do componente**: usar `{ }` no JSX para mostrar um valor
  derivado das props (ex.: "Frete grátis" quando o preço passa de R$ 100)

## O que fica de fora (de propósito)

`useState`, `onClick`, eventos, spread (`[...lista]`), imutabilidade, guardas
tipo `if (lista.includes(x)) return`. Tudo isso é a aula #7 ("Criando Equações
Através de Estados e Eventos"). Aqui a tela é **estática**: os dados vêm do
array e não mudam depois que a página carrega.

## Como rodar a versão de referência (professor)

O `gabarito/` **não é um projeto Vite completo** — são só os 3 arquivos de
`src/` no estado final da aula. Para testar, copie-os para dentro de um
projeto Vite React por cima de `src/` (e ajuste o `import` em `main.jsx` se
necessário para apontar `App.jsx`).

```text
06-aula-react-lista-e-estado/
├── README.md
├── ROTEIRO-AULA.md            # seu: blocos de tempo, perguntas, marco mínimo
├── DESAFIO.md                 # do aluno: desafio curto, sem código pronto
└── gabarito/
    ├── DESAFIO-gabarito.md    # seu: código completo da resposta, por etapa
    └── src/
        ├── App.jsx            # importa o array e faz o .map()
        ├── CardProduto.jsx    # props + valor calculado no JSX
        └── produtos.js        # o array de dados
```

> Nome da pasta ficou `06-aula-react-lista-e-estado` por causa do cronograma
> oficial; o conteúdo real é **lista + cálculo**, sem estado.

## Registro pós-aula

Atualizar `alunos/progresso/turma-11904.md`: status da aula #6, presença do
Miguel, até onde ele chegou de verdade e a próxima aula. Fluxo em
[alunos/WORKFLOW-AULAS.md](../../../alunos/WORKFLOW-AULAS.md).
