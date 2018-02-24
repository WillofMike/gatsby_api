const mongoose = require("mongoose")
const model = 'post'

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
})

module.exports = mongoose.model(model, schema)
