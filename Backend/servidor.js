import express from 'express'
import db from './db.js'
const app = express()

app.use(express.json())

//const db = require('../Backend/db.js')

// Monta as rotas do formulário em /contato


// rota raiz para checagem rápida
app.get('/', (req, res) => {
  return res.json({ mensagem: 'Servidor OK!!' })
})

// listar todos os contatos
app.get("/contato", (req, res) => {

  const sql = "SELECT * FROM formulario_contato";

  db.query(sql, (erro, resultados) => {
    if (erro) {
        return res.status(500).json({
            erro: "Erro ao buscar tarefas."
        });
    }

    return res.json(resultados);
});



});

// cadastrar no bd o contato do form
app.post('/contato', (req, res) => {
  // aqui entra a criação do contato para o banco.
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
});

export default app


/**
 * GET = listar dados [GET: /, GET: /id]
 * POST = cadastrar dados
 * PUT = atualizar daods [PUT: /, PUT: /id]
 * DELETE = deletar daods [DELETE: /, DELETE: /id]
 * 
 * DELETE FROM contatos WHERE id = 5;
 * 
 * TIPOS DE ERROS:
 * 500 = erro do servidor
 * 400 = erro do cliente
 * 300 = 
 * 200 = sucesso | 201 - created success
 */



