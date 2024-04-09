const mongoose = require('mongoose')

const main = require('../services/dbService')
main().catch(err => console.error('Could not connect to MongoDB', err))
const Schema = mongoose.Schema

const userSchema = new Schema({
  id: Number,
  name: String,
  password: String,
  role: String
})

const UserModel = mongoose.model('users', userSchema)
module.exports = { UserModel }
