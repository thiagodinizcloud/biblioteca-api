import express from 'express';
import LivroController from '../controllers/livroController.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';


const router = express.Router();

/**
 * @swagger
 * /livros:
 *   get:
 *     summary: Lista todos os livros
 *     tags:
 *       - Livros
 *     responses:
 *       200:
 *         description: Lista de livros retornada com sucesso
 */

router.get('/', authMiddleware, LivroController.listarLivros);
router.get('/:id', authMiddleware, LivroController.buscarLivroPorId);
router.post('/', authMiddleware, LivroController.criarLivro);
router.put('/:id', authMiddleware, LivroController.atualizarLivro);
router.patch('/:id', authMiddleware, LivroController.atualizarParcialLivro);
router.delete('/:id', authMiddleware, LivroController.deletarLivro);

export default router;