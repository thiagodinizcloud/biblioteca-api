export class UsuarioResponseDTO {
 constructor(usuario) {
  this.id = usuario.id;
  this.nome = usuario.nome;
  this.email = usuario.email;
  this.role = usuario.role;
 }
}