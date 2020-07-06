const words = require('./controllers/words_controller')

exports.route = (app) => {

  //  app.get('/', function (req, res) {
  //   res.send('Hello, World!')
  // });

  // app.post('/mywords', words.create);

  app.get('/mywords', words.read);

  app.get('/mywords/:id?', words.read);

  app.patch('/mywords/:id', words.update);

  app.delete('/mywords/id', words.delete);
}