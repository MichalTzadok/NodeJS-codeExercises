const { CategoryModel } = require('../models/categoryModel')
class Category {
  constructor (id, name, products = []) {
    this.id = id
    this.name = name
    this.products = products
  }

  async setId () {
    const CategoriesList = await CategoryModel.find({})
    const CategoriesId = CategoriesList.map(p => parseInt(p.category_id))
    this.category_id = Math.max.apply(this, CategoriesId) + 1 | 0
  }

  async save () {
    const findCategory = await CategoryModel.findOne({ category_name: this.Category_name }).select({ _id: 0 }).exec()
    if (findCategory != null) { return false }
    await this.setId()
    const category = new CategoryModel({
      category_id: parseInt(this.category_id),
      category_name: this.category_name,
      products: this.products
    })
    await category.save()
    return true
  }
}
module.exports = Category
