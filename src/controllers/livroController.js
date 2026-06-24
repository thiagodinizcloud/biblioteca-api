import LivroService from '../services/livroService.js';

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
   const livro = await LivroService.criar(req.body);
   res.status(201).json(livro);
  } catch (error) {
   next(error);
  }
 }

 static async atualizarLivro(req, res, next) {
  try {
   const { id } = req.params;
   const livro = await LivroService.atualizar(Number(id), req.body);
   res.json(livro);
  } catch (error) {
   next(error);
  }
 }

 static async atualizarParcialLivro(req, res, next) {
  try {
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