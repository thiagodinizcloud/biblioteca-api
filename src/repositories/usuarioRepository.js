import { getDB } from '../config/db.js';

class UsuarioRepository {

 static async findAll() {
  const db = getDB();
  return await db.collection('usuarios').find().toArray();
 }

 static async findById(id) {
  const db = getDB();
  return await db.collection('usuarios').findOne({ id: Number(id) });
 }

 static async findByEmail(email) {
  const db = getDB();
  return await db.collection('usuarios').findOne({ email });
 }

 static async create(usuario) {
  const db = getDB();
  usuario.id = Number(usuario.id);
  await db.collection('usuarios').insertOne(usuario);
  return usuario;
 }

 static async update(id, data) {
  const db = getDB();

  const usuario = await db.collection('usuarios').findOne({
   id: Number(id)
  });

  if (!usuario) return null;

  await db.collection('usuarios').updateOne(
   { id: Number(id) },
   { $set: data }
  );

  return await db.collection('usuarios').findOne({
   id: Number(id)
  });
 }

 static async patch(id, data) {
  const db = getDB();

  const usuario = await db.collection('usuarios').findOne({
   id: Number(id)
  });

  if (!usuario) return null;

  await db.collection('usuarios').updateOne(
   { id: Number(id) },
   { $set: data }
  );

  return await db.collection('usuarios').findOne({
   id: Number(id)
  });
 }

 static async delete(id) {
  const db = getDB();

  const result = await db.collection('usuarios').deleteOne({
   id: Number(id)
  });

  return result.deletedCount > 0;
 }
}

export default UsuarioRepository;