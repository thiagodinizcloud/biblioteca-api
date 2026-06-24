import dns from 'dns';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

// FORÇA o Node a usar DNS públicos
dns.setServers(['8.8.8.8', '8.8.4.4']);

dotenv.config();

const client = new MongoClient(process.env.MONGO_URI);

let db;

export async function connectDB() {
  try {
    await client.connect();

    db = client.db('biblioteca');

    console.log('MongoDB conectado');
  } catch (error) {
    console.error('Erro MongoDB:', error);
  }
}

export function getDB() {
  return db;
}

console.log("URI:", process.env.MONGO_URI);