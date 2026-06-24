import express from 'express';
import livroRoutes from './routes/livroRoutes.js';
import usuarioRoutes from './routes/usuarioRoutes.js';
import webRoutes from './routes/web.routes.js';
import authRoutes from './routes/auth.routes.js';
import { errorHandler } from './middlewares/error.middleware.js';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swagger.js';

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

app.use((req, res, next) => {
 console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
 next();
});

app.get('/hello-pug', (req, res) => {
 res.render('hello', {
  title: 'Teste PUG',
  message: 'Olá mundo com PUG!'
 });
});

app.use('/livros', livroRoutes);
app.use('/usuarios', usuarioRoutes);
app.use('/auth', authRoutes);

app.use('/api-docs',
 swaggerUi.serve,
 swaggerUi.setup(swaggerSpec)
);

app.use('/', webRoutes);

app.use((req, res, next) => {
 res.status(404).json({
  mensagem: 'A rota solicitada não existe.'
 });
});

app.use(errorHandler);

export default app;


