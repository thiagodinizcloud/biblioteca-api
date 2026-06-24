export function authorize(...allowedRoles) {

 return (req, res, next) => {

  const userRole = req.usuario.role;

  if (!allowedRoles.includes(userRole)) {
   return res.status(403).json({
    mensagem: 'Acesso negado'
   });
  }

  next();

 };

}