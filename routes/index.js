const PostController = require('../controllers/post')
module.exports = (app) => {
  app.get('/post', PostController.read)
  app.get('/post/:id', PostController.read)
  app.post('/post', PostController.create)
  app.put('/post/:id', PostController.update)
  app.delete('/post/:id', PostController.delete)
}
