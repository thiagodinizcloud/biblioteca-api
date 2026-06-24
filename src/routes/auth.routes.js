import express from 'express';
import jwt from 'jsonwebtoken';
import UsuarioService from '../services/usuarioService.js';

const router = express.Router();

const SECRET = 'biblioteca-api';

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Realiza login e retorna JWT
 *     tags:
 *       - Autenticação
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: thiago@gmail.com
 *               senha:
 *                 type: string
 *                 example: 123456
 *     responses:
 *       200:
 *         description: Login realizado com sucesso
 */

router.post('/login', async (req, res, next) => {
 try {

  const { email, senha } = req.body;

  const usuario = await UsuarioService.login(
   email,
   senha
  );

  const token = jwt.sign(
 {
  id: usuario.id,
  email: usuario.email,
  role: usuario.role
 },
 SECRET,
 {
  expiresIn: '1h'
 }
);

  res.json({ token });

 } catch (error) {
  next(error);
 }
});

export default router;