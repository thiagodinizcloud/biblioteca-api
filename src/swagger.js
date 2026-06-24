import swaggerJSDoc from 'swagger-jsdoc';

const options = {
 definition: {
  openapi: '3.0.0',
  info: {
   title: 'API Biblioteca',
   version: '1.0.0',
   description: 'Documentação da API de Livros e Usuários'
  }
 },
 apis: ['./src/routes/**/*.js']
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;