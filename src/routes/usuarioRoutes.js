import express from 'express';
import UsuarioController from '../controllers/usuarioController.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';
import { authorize } from '../middlewares/authorize.middleware.js';

const router = express.Router();

router.get('/', authMiddleware, authorize('admin'), UsuarioController.listarUsuarios);
router.get('/:id', authMiddleware, UsuarioController.buscarUsuarioPorId);
router.post('/', UsuarioController.criarUsuario);
router.put('/:id', authMiddleware, authorize('admin'), UsuarioController.atualizarUsuario);
router.patch('/:id', authMiddleware, authorize('admin'), UsuarioController.atualizarParcialUsuario);
router.delete('/:id', authMiddleware, authorize('admin'), UsuarioController.deletarUsuario);

export default router;