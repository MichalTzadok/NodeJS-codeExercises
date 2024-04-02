const { CategoryModel } = require('../models/categoryModel')
const getProductsByCategory = async (categoryName) => {
  const category = await CategoryModel.findOne({ category_name: categoryName }).select({ _id: 0, products: 1 }).exec()
  return category.products
}

const getProduct = async (categoryName, productName) => {
  return await getProductsByCategory(categoryName).then(res => res.filter(p => p.name === productName))
}

const deleteProductById = async (categoryName, ProductId) => {
  const category = await CategoryModel.findOne({ category_name: categoryName }).select({ _id: 0, products: 1 }).exec()
  category.products = category.products.filter(p => p.id !== parseInt(ProductId))
  await CategoryModel.updateOne({ category_name: categoryName }, { products: category.products })
}
const updateProductById = async (categoryName, ProductId, newName, NewCategory) => {
  const category = await CategoryModel.findOne({ category_name: categoryName }).select({ _id: 0, products: 1 }).exec()
  const product = category.products.find(p => p.id === parseInt(ProductId))
  product.name = newName || product.name
  product.category = NewCategory || product.category
  await CategoryModel.updateOne({ category_name: categoryName }, { products: category.products })
}
module.exports = {
  getProductsByCategory,
  getProduct,
  deleteProductById,
  updateProductById

}
