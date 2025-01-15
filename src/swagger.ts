import swaggerJSDoc from 'swagger-jsdoc';

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Library Management API',
      version: '1.0.0',
      description: 'API para gerenciamento de biblioteca',
    },
    servers: [
      {
        url: 'http://localhost:3000/api',
      },
    ],
  },
  apis: ['./src/routes/*.ts', './src/models/*.ts'], // Caminho para arquivos de rotas e modelos
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;