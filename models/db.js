const mongoose = require('mongoose');

async function main() {
  await mongoose.connect('mongodb://localhost/MichalShop');
}


module.exports = main;