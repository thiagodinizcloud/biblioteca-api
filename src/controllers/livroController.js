import LivroService from '../services/livroService.js';
import { validationResult } from 'express-validator';

class LivroController {

 static async listarLivros(req, res, next) {
  try {
   const livros = await LivroService.listar();
   res.status(200).json(livros);
  } catch (error) {
   next(error);
  }
 }

 static async buscarLivroPorId(req, res, next) {
  try {
   const { id } = req.params;
   const livro = await LivroService.buscarPorId(Number(id));
   res.status(200).json(livro);
  } catch (error) {
   next(error);
  }
 }

 static async criarLivro(req, res, next) {
  try {

   const errors = validationResult(req);
   if (!errors.isEmpty()) {
    return res.status(400).json({
     sucesso: false,
     mensagens: errors.array().map(e => e.msg)
    });
   }

   const livro = await LivroService.criar(req.body);
   res.status(201).json(livro);

  } catch (error) {
   next(error);
  }
 }

 static async atualizarLivro(req, res, next) {
  try {

   const errors = validationResult(req);
   if (!errors.isEmpty()) {
    return res.status(400).json({
     sucesso: false,
     mensagens: errors.array().map(e => e.msg)
    });
   }

   const { id } = req.params;
   const livro = await LivroService.atualizar(Number(id), req.body);
   res.json(livro);

  } catch (error) {
   next(error);
  }
 }

 static async atualizarParcialLivro(req, res, next) {
  try {

   const errors = validationResult(req);
   if (!errors.isEmpty()) {
    return res.status(400).json({
     sucesso: false,
     mensagens: errors.array().map(e => e.msg)
    });
   }

   const { id } = req.params;
   const livro = await LivroService.atualizar(Number(id), req.body);
   res.json(livro);

  } catch (error) {
   next(error);
  }
 }

 static async deletarLivro(req, res, next) {
  try {
   const { id } = req.params;
   await LivroService.deletar(Number(id));
   res.status(204).send();
  } catch (error) {
   next(error);
  }
 }
}

export default LivroController;