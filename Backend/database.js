const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'info-clohing'
});

connection.connect(err => {
  if (err) return console.error('Erro: ' + err.message);
  console.log('Conectado');
});
