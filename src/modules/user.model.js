const mongoose = require('mongoose')

const useSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: true
  },
  lastName: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true,
    minlength: 7
  }
})

const UserModel = mongoose.model('user', useSchema)

module.exports = UserModel
