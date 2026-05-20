import db from './db.js'

export const listarDadosContato = (req, res) => {
    db.query('SELECT * FROM formulario_de_contato', (err, results) => {
        if (err) return res.status(500).json({ error: 'Erro ao buscar dados' })
        res.json(results)
    })
}

export const inserirDadosContato = (req, res) => {
    const sql = 'INSERT INTO formulario_de_contato (nome, email, telefone, assunto, mensagem) VALUES (?, ?, ?, ?, ?)'
    db.query(
        sql,
        [req.body.nome, req.body.email, req.body.telefone, req.body.assunto, req.body.mensagem],
        (err, results) => {
            if (err) return res.status(500).json({ error: 'Erro ao inserir dados' })
            res.json({ mensagem: 'Dados inseridos com sucesso!' })
        }
    )
}