const mongoose = require('mongoose')

const HomeSchema = new mongoose.Schema({
  titulo: { type: String, required: true},
  descricao: String
})

const HomeModule = mongoose.model('Home', HomeSchema)

class Home {

}

exports = Home