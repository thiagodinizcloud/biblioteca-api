import express from 'express';
import LivroController from '../controllers/livroController.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';
import { authorize } from '../middlewares/authorize.middleware.js';
import regrasValidacaoLivro from '../validators/livroValidator.js';

const router = express.Router();

router.get('/', authMiddleware, LivroController.listarLivros);
router.get('/:id', authMiddleware, LivroController.buscarLivroPorId);
router.post('/', authMiddleware, authorize('admin'), regrasValidacaoLivro, LivroController.criarLivro);
router.put('/:id', authMiddleware, authorize('admin'), regrasValidacaoLivro, LivroController.atualizarLivro);
router.patch('/:id', authMiddleware, authorize('admin'), regrasValidacaoLivro, LivroController.atualizarParcialLivro);
router.delete('/:id', authMiddleware, authorize('admin'), LivroController.deletarLivro);

export default router;