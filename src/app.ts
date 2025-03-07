import express, { Application } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import publisherRoutes from './routes/publisher.routes';
import bookRoutes from './routes/book.routes';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swagger';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Rotas
app.use('/api', publisherRoutes);
app.use('/api', bookRoutes);

// Documentação Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Conectar ao MongoDB e iniciar o servidor
mongoose
  .connect(process.env.MONGODB_URI as string)
  .then(() => {
    console.log('Conectado ao MongoDB');
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Erro ao conectar ao MongoDB', err);
  });
