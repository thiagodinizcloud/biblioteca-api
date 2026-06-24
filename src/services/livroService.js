import LivroRepository from '../repositories/livroRepository.js';
import { LivroResponseDTO } from '../dtos/livro.dto.js';

class LivroService {

 static async listar() {
  const livros = await LivroRepository.findAll();
  return livros.map(l => new LivroResponseDTO(l));
 }

 static async buscarPorId(id) {
  const livro = await LivroRepository.findById(id);
  if (!livro) {
   const error = new Error('Livro não encontrado');
   error.statusCode = 404;
   throw error;
  }
  return new LivroResponseDTO(livro);
 }

 static async criar(data) {
  const novoLivro = {
   id: Date.now(),
   ...data
  };

  const novo = await LivroRepository.create(novoLivro);
  return new LivroResponseDTO(novo);
 }

 static async atualizar(id, data) {
  const livro = await LivroRepository.update(id, data);
  if (!livro) {
   const error = new Error('Livro não encontrado');
   error.statusCode = 404;
   throw error;
  }
  return new LivroResponseDTO(livro);
 }

 static async atualizarParcial(id, data) {
  const livro = await LivroRepository.patch(id, data);
  if (!livro) {
   const error = new Error('Livro não encontrado');
   error.statusCode = 404;
   throw error;
  }
  return new LivroResponseDTO(livro);
 }

 static async deletar(id) {
  const ok = await LivroRepository.delete(id);
  if (!ok) {
   const error = new Error('Livro não encontrado');
   error.statusCode = 404;
   throw error;
  }
 }
}

export default LivroService;