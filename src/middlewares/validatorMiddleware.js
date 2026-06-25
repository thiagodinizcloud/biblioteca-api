import { validationResult } from 'express-validator';

export const verificarErros = (req, res, next) => {
 const errors = validationResult(req);

 if (!errors.isEmpty()) {
  return res.status(400).json({
   sucesso: false,
   mensagens: errors.array().map(e => e.msg)
  });
 }

 next();
};