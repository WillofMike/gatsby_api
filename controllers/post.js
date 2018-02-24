const post = require('../models/post')

module.exports = {
  create: (req,res) => {
    return post.create(req.body)
      .then(doc => res.status(200).json(doc))
      .catch(err => res.status(500).json(err))
  },
  read: (req,res) => {
    const query = req.params.id ? {_id: req.params.id} : {}
    return post.find(query)
      .then(doc => res.status(200).json(doc))
      .catch(err => res.status(500).json(err))
  },
  update: (req,res) => {
    return post.findByIdandupdate(req.params.id, req.body, {new: true})
      .then(doc => res.status(200).json(doc))
      .catch(err => res.status(500).json(err))
  },
  delete: (req,res) => {
    return post.findByIdandupdate(req.params.id, {isDeleted: true})
    .then(doc => res.status(200))
    .catch(err => res.status(500).json(err))
  },
};
