// var express = require('express')
// var router = express.Router()
// var app = express()

const words = require('./controllers/words')

exports.route = (app) => {

// respond with "hello world" when a GET request is made to the homepage
  app.get('/', function (req, res) {
    res.send('Hello, World!')
  });

  app.post('/mywords', words.create);

  app.get('/mywords/:id?', words.read);

  app.patch('/mywords/:id', words.update);

  app.delete('/mywords/id', words.delete);
}