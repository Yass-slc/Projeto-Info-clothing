import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();
const db = "info-clothing";

const connection = mysql.createConnection({
  host: process.env.DB_host,
  user: process.env.DB_root,
  password: process.env.DB_123456,
  database: process.env.DB_Guilherme
  
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao Mysql:', err);
  }else{;
    console.log('Conectado ao Mysql com successo"');
  }});

export default connection;