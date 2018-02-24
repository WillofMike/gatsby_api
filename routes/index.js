const UserController = require('../controllers/user')
module.exports = (app) => {
  app.get('/user', UserController.read)
  app.get('/user/:id', UserController.read)
  app.post('/user', UserController.create)
  app.put('/user/:id', UserController.update)
  app.delete('/user/:id', UserController.delete)
}
