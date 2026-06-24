import jwt from 'jsonwebtoken';

const SECRET = 'biblioteca-api';

export const authMiddleware = (req, res, next) => {
 const authHeader = req.headers.authorization;

 if (!authHeader) {
  return res.status(401).json({
   mensagem: 'Token não informado'
  });
 }

 const [, token] = authHeader.split(' ');

 try {
  const decoded = jwt.verify(
   token,
   SECRET
  );

  req.usuario = decoded;

  next();
 } catch (error) {
  return res.status(401).json({
   mensagem: 'Token inválido'
  });
 }
};