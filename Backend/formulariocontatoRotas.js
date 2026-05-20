import express from 'express'
import { listarDadosContato, inserirDadosContato } from './formulariocontato.js'

const Rotas = express.Router()

Rotas.get('/', listarDadosContato)
Rotas.post('/', inserirDadosContato)

export default Rotas

