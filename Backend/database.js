const { MySQL } = require('./database.js')
export const MySQL = servidor.js
const connection = mysql.createConnection({
  host: " localhost",
  user: "root",
  password: "2026ARROCHA",
  database: "info_clothing.sql"

});

connection.connect((err) => {
    if(err) {
        console.log('Erro ao conectar ao banco de dados: ', err);
    } else {
        console.log('Conectado ao banco de dados');
    }
})
module.exports = connection;
