import { fileURLToPath } from 'node:url'
import dotenv from 'dotenv'
import express from 'express'
import db from './config/db.js'
import cors from 'cors';
import contatoRoutes from './routes/contato.routes.js'
import localizacaoRoutes from './routes/localizacao.routes.js'

dotenv.config({ path: fileURLToPath(new URL('../.env', import.meta.url)) })

const app = express()

app.use(cors({
  origin: 'http://127.0.0.1:5500'
}));

app.use(express.json());
app.use('/contato', contatoRoutes);
app.use('/localizacao', localizacaoRoutes);


// rota raiz para checagem rápida
app.get('/', (req, res) => {
  return res.json({ mensagem: 'Servidor OK!!' })
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



