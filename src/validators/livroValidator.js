import { body } from 'express-validator' ;
import { verificarErros } from '../middlewares/validatorMiddleware';

export const regrasValidacaoLivro = [
 body('titulo')
 .trim()
 .notEmpty ().withMessage ('O título do livro é obrigatório' )
 .isLength ({ min: 2 }).withMessage ('O título deve ter pelo menos 2 caracteres' ),

 body('autor' )
 .notEmpty ().withMessage ('O nome do autor é obrigatório' ),

 body('ano')
 .isInt({ min: 0 }).withMessage ('O ano de lançamento do livro deve ser um número positivo' ),
 
 verificarErros
];
export default regrasValidacaoLivro;