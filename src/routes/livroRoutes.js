import express from 'express';
import LivroController from '../controllers/livroController.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';
import { authorize } from '../middlewares/authorize.middleware.js';


const router = express.Router();


router.get('/', authMiddleware, LivroController.listarLivros);

router.get('/:id', authMiddleware, LivroController.buscarLivroPorId);


router.post('/', authMiddleware, authorize('admin'), (req, res, next) => {

 console.log("PASSOU PELO AUTHORIZE");

 LivroController.criarLivro(req, res, next);

});


router.put('/:id', authMiddleware, authorize('admin'), LivroController.atualizarLivro);


router.patch('/:id', authMiddleware, authorize('admin'), LivroController.atualizarParcialLivro);


router.delete('/:id', authMiddleware, authorize('admin'), LivroController.deletarLivro);


export default router;