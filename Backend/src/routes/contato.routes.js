import express from 'express'
import db from '../config/db.js'

const router = express.Router()

router.get('/', (req, res) => {
  const sql = "SELECT * FROM formulario";

  db.query(sql, (erro, resultados) => {
    if (erro) {
      return res.status(500).json({
        erro: "Erro ao buscar contatos."
      });
    }

    return res.json(resultados);
  });
});

router.post('/', (req, res) => {
  const { Nome, Email, Assunto, Mensagem } = req.body;

  if (!Nome || Nome.trim() === '' || !Email || Email.trim() === '' || !Assunto || Assunto.trim() === '' || !Mensagem || Mensagem.trim() === '') {
    return res.status(400).json({
      erro: "Todos os campos são obrigatórios."
    });
  }

  const sql = `
    INSERT INTO formulario (Nome, Email, Assunto, Mensagem)
    VALUES (?, ?, ?, ?)
  `;

  db.query(sql, [
    Nome.trim(),
    Email.trim(),
    Assunto.trim(),
    Mensagem.trim()
  ], (erro) => {
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

router.put('/:id', (req, res) => {
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

  db.query(sql, [
    Nome.trim(),
    Email.trim(),
    Assunto.trim(),
    Mensagem.trim(),
    id
  ], (erro, resultados) => {
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
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const { Nome, Email, Assunto, Mensagem } = req.body;

  if (!Nome && !Email && !Assunto && !Mensagem) {
    return res.status(400).json({
      erro: "Pelo menos um campo deve ser fornecido para atualização."
    });
  }

  const campos = [];
  const valores = [];

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

  db.query(sql, valores, (erro, resultados) => {
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
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM formulario WHERE id = ?", [id], (erro, resultados) => {
    if (erro) {
      return res.status(500).json({
        erro: "Erro ao deletar contato."
      });
    }

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

export default router
