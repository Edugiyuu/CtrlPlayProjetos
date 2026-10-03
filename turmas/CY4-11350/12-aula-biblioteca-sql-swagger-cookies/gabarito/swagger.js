// Configuracao do swagger-jsdoc: ele varre os arquivos listados em "apis"
// procurando comentarios /** @swagger ... */ e monta a documentacao com eles.
import swaggerJsdoc from 'swagger-jsdoc';

const opcoes = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Biblioteca Digital',
      version: '1.0.0',
      description: 'API de livros e autores da turma CY4 - SQLite + Sequelize',
    },
    // Faz aparecer o botao "Authorize" na tela do Swagger.
    components: {
      securitySchemes: {
        bearerAuth: { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
        cookieAuth: { type: 'apiKey', in: 'cookie', name: 'token' },
      },
    },
    // Vale pra API inteira; as rotas publicas desmarcam com "security: []".
    security: [{ bearerAuth: [] }, { cookieAuth: [] }],
  },
  apis: ['./routes/*.js'], // caminho relativo a pasta de onde o servidor roda
};

export default swaggerJsdoc(opcoes);
