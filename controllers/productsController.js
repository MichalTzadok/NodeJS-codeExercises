const Product = require('../classes/productClass')
const productsSVC = require('../services/productService')
const getProductsByCategory = async (req, res) => {
  const categoryName = req.params.category_name
  const allProducts = await productsSVC.getProductsByCategory(categoryName)
  if (allProducts !== undefined) { res.json(allProducts) } else {
    res.status(404).json({ error: 'Products not found' })
  }
}
const getSpecificProductByCategory = async (req, res) => {
  const categoryName = req.params.categoryName
  const productName = req.params.productName
  const product = await productsSVC.getProduct(categoryName, productName)
  if (product !== undefined) { res.json(product) } else {
    res.status(404).json({ error: 'Product not found' })
  }
}

const addProduct = async (req, res, next) => {
  try {
    const categoryName = req.params.categoryName
    const newProduct = new Product(req.body.productName, categoryName)
    await newProduct.save(categoryName)
    res.send('product added succesfully!')
  } catch (err) {
    res.status(400).json({ error: 'Something went wrong' })
  }
}

const updateProductForCategory = async (req, res) => {
  try {
    const categoryName = req.params.categoryName
    const productId = req.params.productId
    await productsSVC.updateProductById(categoryName, productId, req.body.newProductName, req.body.newCategoryName)
    res.send('product updated!')
  } catch (err) {
    res.status(400).json({ error: 'Something went wrong' })
  }
}

const deleteProductForCategory = async (req, res) => {
  try {
    const categoryName = req.params.categoryName
    const productId = req.params.productId
    await productsSVC.deleteProductById(categoryName, productId)
    res.send('product deleted!')
  } catch (err) {
    res.status(400).json({ error: 'Something went wrong' })
  }
}
module.exports = {
  getProductsByCategory,
  deleteProductForCategory,
  addProduct,
  updateProductForCategory,
  getSpecificProductByCategory
}
