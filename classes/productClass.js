const { CategoryModel } = require('../models/categoryModel');

class Product {
    constructor(name,category){
        this.id =0;
        this.name = name;
        this.category = category;
    }
    async setId(categoryName){
        const category = await CategoryModel.findOne({ category_name: categoryName }).select({ _id: 0, products: 1 }).exec();
        const productsId =category.products.map(p=>parseInt(p.id))
        this.id = Math.max.apply(this , productsId )+1 |0;
      }
    
    async save(categoryName){
        await this.setId(categoryName);
        const category = await CategoryModel.findOne({ category_name: categoryName }).select({ _id: 0, products: 1 }).exec();
        category.products.push(this);
        await CategoryModel.updateOne({ category_name: categoryName }, { products: category.products });
    }

  
}
module.exports = Product;