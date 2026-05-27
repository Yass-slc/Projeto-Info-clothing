import express, { Router } from 'express'
const app = express()

app.use(express.json())

// Monta as rotas do formulário em /contato


// rota raiz para checagem rápida
app.get('/', (req, res) => {
  return res.json({ mensagem: 'Servidor OK!!' })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})






