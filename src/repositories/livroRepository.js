import { getDB } from '../config/db.js';

class LivroRepository {

 static async findAll() {

 console.log('LIVROS VINDO DO MONGODB');

  const db = getDB();

  return await db
   .collection('livros')
   .find()
   .toArray();
 }

 static async findById(id) {
  const db = getDB();

  return await db
   .collection('livros')
   .findOne({
    id: Number(id)
   });
 }

 static async create(livro) {

console.log('CHEGOU NO REPOSITORY');

  const db = getDB();

    console.log('BANCO USADO:', db.databaseName);

  await db
   .collection('livros')
   .insertOne(livro);

  return livro;
 }

 static async update(id, data) {
  const db = getDB();

  const livroAtual = await db
   .collection('livros')
   .findOne({
    id: Number(id)
   });

  if (!livroAtual) return null;

  await db.collection('livros').updateOne(
   { id: Number(id) },
   { $set: data }
  );

  return await db.collection('livros').findOne({
   id: Number(id)
  });
 }

 static async delete(id) {
  const db = getDB();

  const result = await db
   .collection('livros')
   .deleteOne({
    id: Number(id)
   });

  return result.deletedCount > 0;
 }
}

export default LivroRepository;