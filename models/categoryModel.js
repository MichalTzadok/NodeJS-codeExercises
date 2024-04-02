const mongoose = require('mongoose');

const main =require('./db');
// main().catch(err => console.error('Could not connect to MongoDB', err));
 const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  category_id: Number,
  category_name: String,
   products: [{
       id: Number,
       name: String,
       category: String
       }]
 });
 const CategoryModel = mongoose.model("categories", CategorySchema);
 module.exports = {CategoryModel};
