import express from 'express'
import dotenv from 'dotenv'
import Rotas from './formulariocontatoRotas.js'

dotenv.config()

const app = express()

app.use(express.json())

// Monta as rotas do formulário em /contato
app.use('/contato', Rotas)

// rota raiz para checagem rápida
app.get('/', (req, res) => {
  return res.json({ mensagem: 'Servidor OK!!' })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})






