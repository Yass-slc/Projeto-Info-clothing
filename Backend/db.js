import mysql from 'mysql2'

// cria conexão com banco
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "formulario_contato",
    port: 3306
});

// conecta
connection.connect((err) => {
    if (err) {
        console.error("Erro ao conectar:", err);
        return;
    }

    console.log("Conectado ao MySQL!");
});

export default connection