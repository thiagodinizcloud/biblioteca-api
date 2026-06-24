export class LivroResponseDTO {
 constructor(livro) {
  this.id = livro.id;
  this.titulo = livro.titulo;
  this.autor = livro.autor;
  this.genero = livro.genero;
  this.ano = livro.ano;
 }
}