import UsuarioRepository from '../repositories/usuarioRepository.js';
import { UsuarioResponseDTO } from '../dtos/usuario.dto.js';
import bcrypt from 'bcrypt';

class UsuarioService {

 static async listar() {
  const usuarios = await UsuarioRepository.findAll();
  return (usuarios || []).map(u => new UsuarioResponseDTO(u));
 }

 static async login(email, senha) {
  const usuario = await UsuarioRepository.findByEmail(email);

  if (!usuario) {
   const error = new Error('Email ou senha inválidos');
   error.statusCode = 401;
   throw error;
  }

  const senhaValida = await bcrypt.compare(senha, usuario.senha);

  if (!senhaValida) {
   const error = new Error('Email ou senha inválidos');
   error.statusCode = 401;
   throw error;
  }

  return usuario;
 }

 static async buscarPorId(id) {
  const usuario = await UsuarioRepository.findById(id);

  if (!usuario) {
   const error = new Error('Usuário não encontrado');
   error.statusCode = 404;
   throw error;
  }

  return new UsuarioResponseDTO(usuario);
 }

 static async criar(data) {

  const senhaHash = await bcrypt.hash(data.senha, 10);

  const novo = {
   id: Date.now(),
   ...data,
   role: data.role || 'user',
   senha: senhaHash
  };

  console.log('====================');
  console.log('OBJETO ENVIADO AO MONGO');
  console.log(novo);
  console.log('====================');

  const usuario = await UsuarioRepository.create(novo);

  return new UsuarioResponseDTO(usuario);
 }

 static async atualizar(id, data) {
  const usuario = await UsuarioRepository.update(id, data);

  if (!usuario) {
   const error = new Error('Usuário não encontrado');
   error.statusCode = 404;
   throw error;
  }

  return new UsuarioResponseDTO(usuario);
 }

 static async atualizarParcial(id, data) {
  const usuario = await UsuarioRepository.patch(id, data);

  if (!usuario) {
   const error = new Error('Usuário não encontrado');
   error.statusCode = 404;
   throw error;
  }

  return new UsuarioResponseDTO(usuario);
 }

 static async deletar(id) {
  const ok = await UsuarioRepository.delete(id);

  if (!ok) {
   const error = new Error('Usuário não encontrado');
   error.statusCode = 404;
   throw error;
  }
 }
}

export default UsuarioService;