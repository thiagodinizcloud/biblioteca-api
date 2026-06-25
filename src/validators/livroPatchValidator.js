import { body } from 'express-validator';
import { verificarErros } from '../middlewares/validatorMiddleware.js';

const regrasValidacaoLivroPatch = [
 body().custom(value => {
  if (!value.titulo && !value.autor && value.ano === undefined) {
   throw new Error('Informe pelo menos um campo para atualização');
  }
  return true;
 }),
 body('titulo').optional().trim().notEmpty().withMessage('O título do livro é obrigatório').isLength({ min: 2 }).withMessage('O título deve ter pelo menos 2 caracteres'),
 body('autor').optional().notEmpty().withMessage('O nome do autor é obrigatório'),
 body('ano').optional().isInt({ min: 0 }).withMessage('O ano de lançamento do livro deve ser um número positivo'),
 verificarErros
];

export default regrasValidacaoLivroPatch;