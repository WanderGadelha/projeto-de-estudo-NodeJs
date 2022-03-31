require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.CONNECTSTRING)
  .then(() => {
    console.log('Conectado a Base de dados')
    app.emit('pronto')
  })
  .catch(e => console.log(e))


const routes = require('./routes')
const path = require('path')
const { middlewareGlobal } = require('./src/middleware/middleware')

app.use(express.urlencoded( { extended: true}))
app.use(express.static(path.resolve(__dirname, 'public')))

app.set('views',path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.use(middlewareGlobal)

app.use(routes)

app.on('pronto', () => {
  app.listen(3000, () => {
    console.log("http://localhost:3000")
    console.log('Servidor Executando na porta 3000')
  })
})
