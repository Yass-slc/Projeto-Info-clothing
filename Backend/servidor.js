// Importa o framework Express (cria servidor e rotas HTTP)
const express = require('express')

// Cria a aplicação (servidor)
const app = express();

// Middleware do Express para entender JSON no corpo da requisição (req.body)
app.use(express.json());

// rota GET para listar as tarefas do BD


/**
 * Rota raiz (teste rápido)
 * GET http://localhost:3000/
 */
app.get("Servidor", (req, res) => {
  // Retorna um JSON simples
  return res.json({ mensagem: "Servidor OK!!" });
});


// GET = listar usuarios /users => listar todos; /users:id
// POST =  faz a criação do usuario /users
// PUT = atualização do usuario /users:id
// DELETE = faz a deleçãoo do usuario /users:id

// Define a porta (padrão 3000)
const PORT = process.env.PORT || 3000;

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);

});

import  MySQL  from './database.js';


