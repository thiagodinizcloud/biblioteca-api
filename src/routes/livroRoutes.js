import express from 'express';
import LivroController from '../controllers/livroController.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';
import { authorize } from '../middlewares/authorize.middleware.js';
import regrasValidacaoLivro from '../validators/livroValidator.js';
import regrasValidacaoLivroPatch from '../validators/livroPatchValidator.js';

const router = express.Router();

router.get('/', authMiddleware, LivroController.listarLivros);
router.get('/:id', authMiddleware, LivroController.buscarLivroPorId);
router.post('/', regrasValidacaoLivro, authMiddleware, authorize('admin'), LivroController.criarLivro);
router.put('/:id', regrasValidacaoLivro, authMiddleware, authorize('admin'), LivroController.atualizarLivro);
router.patch('/:id', regrasValidacaoLivroPatch, authMiddleware, authorize('admin'), LivroController.atualizarParcialLivro);
router.delete('/:id', authMiddleware, authorize('admin'), LivroController.deletarLivro);

export default router;