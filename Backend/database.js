const mysql = require('mysql');

const connection = mysql.createConnection({
  host: " http://localhost:${PORT}",
  user: "root",
  password: "2026ARROCHA",
  database: "info_clthing.sql"

});

connection.connect((err) => {
    if(err) {
        console.log('Erro ao conectar ao banco de dados: ', err);
    } else {
        console.log('Conectado ao banco de dados');
    }
})
module.exports = connection;
