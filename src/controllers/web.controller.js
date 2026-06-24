import LivroService from '../services/livroService.js';
import UsuarioService from '../services/usuarioService.js';


class WebController {


 static async listarLivrosPage(req,res,next){

  try {


   const livros = await LivroService.listar();


   const usuarios = await UsuarioService.listar();


   res.render('dashboard',{
    livros,
    usuarios
   });


  } catch(error){

   next(error);

  }

 }


}


export default WebController;