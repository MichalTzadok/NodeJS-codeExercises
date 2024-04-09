const Category = require('../classes/categoryClass')
const categorySVC = require('../services/categoryService')

const getCategories = (req, res) => {
  const sortedCategories = categorySVC.getAllcategories()
    .sort((a, b) => a.category_name.localeCompare(b.category_name))
  res.json(sortedCategories)
}

const createCategory = async (req, res) => {
  try {
    const newCategory = new Category(0, req.query.category_name, [])
    newCategory.save()
    res.status(200).json({ message: 'קטגוריה חדשה נוצרה בהצלחה' })
  } catch (error) {
    res.status(404).json({ error: 'קרתה תקלה בהוספת קטגוריה חדשה' })
  }
}

const getCategoryByName = (req, res) => {
  const categoryName = req.params.category_name
  const category = categorySVC.getCategoryByName(categoryName)
  if (category !== undefined) {
    res.json(category)
  } else {
    res.status(404).json({ error: 'Category not found' })
  }
}
const deleteCategory = async (req, res) => {
  const categoryName = req.params.category_name
  if (await categorySVC.deletCategoryByName(categoryName)) { res.status(200).json({ message: 'הקטגוריה נמחקה בהצלחה' }) } else {
    res.status(404).json({ error: 'הקטגוריה לא נמצאה' })
  }
}

const updateCategory = async (req, res) => {
  try {
    const categoryName = req.params.category_name
    categorySVC.updatCategoryByName(categoryName, req.body.newName ? req.body.newName : categoryName, req.products ? req.products : await categorySVC.getCategoryByName(categoryName).products)
    res.status(200).json({ message: 'קטגוריה עודכנה בהצלחה!' })
  } catch {
    res.status(500).json({ error: 'שגיאה בעדכון קטגוריה' })
  }
}
module.exports = { getCategories, getCategoryByName, updateCategory, deleteCategory, createCategory }
