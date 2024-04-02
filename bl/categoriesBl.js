const { CategoryModel } = require('../models/categoryModel')

const getAllcategories = async () => {
  const categories = await CategoryModel.find({}).select({ _id: '0' }).exec()
  return categories
}
const getCategoryByName = async (name) => {
  const category = await CategoryModel.findOne({ category_name: name }).select({ _id: '0' }).exec()
  return category
}
const deletCategoryByName = async (name) => {
  const category = await CategoryModel.findOne({ category_name: name }).select({}).exec()
  if (category != null) {
    await category.deleteOne()
    return true
  }
  return false
}
const updatCategoryByName = async (oldName, newName, newProducts) => {
  await CategoryModel.updateOne({ category_name: oldName }, { category_name: newName, products: newProducts }).select({}).exec()
}

module.exports = {
  getAllcategories,
  getCategoryByName,
  deletCategoryByName,
  updatCategoryByName
}
