import app from './app.js';
import { connectDB } from './config/db.js'; 

async function startServer() {
  await connectDB(); 

  app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
  });
}

startServer();