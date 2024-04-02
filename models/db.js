const mongoose = require('mongoose')
require('dotenv').config()

async function main () {
  await mongoose.connect(process.env.MONGODB_URI)
}

module.exports = main
