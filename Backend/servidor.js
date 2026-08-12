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

  const sql = "SELECT * FROM formulario";

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

  console.log("DADOS RECEBIDOS:", req.body);
  
  const { Nome, Email, Assunto, Mensagem } = req.body;

  if (!Nome || Nome.trim() === '' || !Email || Email.trim() === '' || !Assunto || Assunto.trim() === '' || !Mensagem || Mensagem.trim() === '') 
    
   {
return res.status(400).json({
      erro: "Todos os campos são obrigatórios."
    });
   };

  const sql =`
 INSERT INTO formulario (Nome, Email, Assunto, Mensagem) 
 VALUES (?, ?, ?, ?)
`;

db.query(
  sql,
  [
    Nome.trim(),
    Email.trim(),
    Assunto.trim(),
    Mensagem.trim()
  ],
  (erro, resultados) => {
    if (erro) {
      return res.status(500).json({
        erro: "Erro ao cadastrar contato."
      });
    }

    return res.status(201).json({
      mensagem: "Contato cadastrado com sucesso."
    });
    });
    });
  

//AQUI É O PUT PARA ATUALIZAR O CONTATO
app.put('/contato/:id', (req, res) => {
  const { id } = req.params;
  const { Nome, Email, Assunto, Mensagem } = req.body;

  if (!Nome || Nome.trim() === '' || !Email || Email.trim() === '' || !Assunto || Assunto.trim() === '' || !Mensagem || Mensagem.trim() === '') {
    return res.status(400).json({
      erro: "Todos os campos são obrigatórios."
    });
  }

  const sql = `
    UPDATE formulario 
    SET Nome = ?, Email = ?, Assunto = ?, Mensagem = ? 
    WHERE id = ?
  `;

  db.query(
    sql,
    [
      Nome.trim(),
      Email.trim(),
      Assunto.trim(),
      Mensagem.trim(),
      id
    ],
    (erro, resultados) => {
      if (erro) {
        return res.status(500).json({
          erro: "Erro ao atualizar contato."
        });
      }

      if (resultados.affectedRows === 0) {
        return res.status(404).json({
          erro: "Contato não encontrado."
        });
      }

      return res.json({
        mensagem: "Contato atualizado com sucesso."
      });
    }
  );
});

//PATCH ATUALIZA PARCIALMENTE!!

app.patch('/contato/:id', (req, res) => {
  const { id } = req.params;
  const { Nome, Email, Assunto, Mensagem } = req.body;

  //VAI VERIFICAR SE VEIO PELO MENOS  1 CAMPO
  if (!Nome && !Email && !Assunto && !Mensagem) {
    return res.status(400).json({
      erro: "Pelo menos um campo deve ser fornecido para atualização."
    });
  }

  //MONTA SQL DINAMICAMENTE
  let campos = [];
  let valores = [];

  if (Nome) {
    campos.push("Nome = ?");
    valores.push(Nome.trim());
  }
  if (Email) {
    campos.push("Email = ?");
    valores.push(Email.trim());
  }
  if (Assunto) {
    campos.push("Assunto = ?");
    valores.push(Assunto.trim());
  }
  if (Mensagem) {
    campos.push("Mensagem = ?");
    valores.push(Mensagem.trim());
  }

  const sql = `
    UPDATE formulario 
    SET ${campos.join(", ")} 
    WHERE id = ?
  `;

  valores.push(id);

  db.query(
    sql, valores, (erro, resultados) => {
      if (erro) {
        return res.status(500).json({
          erro: "Erro ao atualizar contato."
        });
      }

      if (resultados.affectedRows === 0) {
        return res.status(404).json({
          erro: "Contato não encontrado."
        });
      }

      return res.json({
        mensagem: "Contato atualizado com sucesso."
      });
    }
  );
});

//AQUI VAI SER A PARTE DE DELETAR ALGUMA MENSAGEM!!!
app.delete('/contato/:id', (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM formulario WHERE id = ?";

  db.query(sql, [id], (erro, resultados) => {
    if (erro) {
      return res.status(500).json({
        erro: "Erro ao deletar contato."
      });
    }
//VERIFICA SE DELETOU OR NOT 😪
    if (resultados.affectedRows === 0) {
      return res.status(404).json({
        erro: "Contato não encontrado."
      });
    }

    return res.json({
      mensagem: "Contato deletado com sucesso."
    });
  });
});

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



