import express from 'express'
import { listarDadosContato, inserirDadosContato } from './formulariocontato.js'

const Router = express.Router()

Router.get('/', listarDadosContato)
Router.post('/', inserirDadosContato)

export default Router

