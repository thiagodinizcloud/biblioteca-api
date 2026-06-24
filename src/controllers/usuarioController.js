import UsuarioService from '../services/usuarioService.js';

class UsuarioController {

 static async listarUsuarios(req, res, next) {
  try {
   const usuarios = await UsuarioService.listar();
   res.status(200).json(usuarios);
  } catch (error) {
   next(error);
  }
 }

 static async buscarUsuarioPorId(req, res, next) {
  try {
   const { id } = req.params;
   const usuario = await UsuarioService.buscarPorId(Number(id));
   res.status(200).json(usuario);
  } catch (error) {
   next(error);
  }
 }

 static async criarUsuario(req, res, next) {
  try {
   const usuario = await UsuarioService.criar(req.body);
   res.status(201).json(usuario);
  } catch (error) {
   next(error);
  }
 }

 static async atualizarUsuario(req, res, next) {
  try {
   const { id } = req.params;
   const usuario = await UsuarioService.atualizar(Number(id), req.body);
   res.json(usuario);
  } catch (error) {
   next(error);
  }
 }

 static async atualizarParcialUsuario(req, res, next) {
  try {
   const { id } = req.params;
   const usuario = await UsuarioService.atualizarParcial(Number(id), req.body);
   res.json(usuario);
  } catch (error) {
   next(error);
  }
 }

 static async deletarUsuario(req, res, next) {
  try {
   const { id } = req.params;
   await UsuarioService.deletar(Number(id));
   res.status(204).send();
  } catch (error) {
   next(error);
  }
 }
}

export default UsuarioController;
