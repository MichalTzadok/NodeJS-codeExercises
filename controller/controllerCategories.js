const fs = require('fs');
const fsPromises = require('fs').promises;
const { log } = require('console');
const Category = require('../classes/categoryClass');
const categoryBl = require('../bl/categoriesBl')
 
exports.getCategories = (req, res) => {
  const sortedCategories = categoryBl.getAllcategories();
  // .sort((a, b) => a.category_name.localeCompare(b.category_name));
  res.json(sortedCategories);
};

exports.createCategory = async (req, res) => {
  try {
    const newCategory = new Category(0, req.query.category_name,[]);
    newCategory.save();
    // res.status(200).json({ message: "קטגוריה חדשה נוצרה בהצלחה" });
  } catch (error) {
    // res.status(404).json({ error: "קרתה תקלה בהוספת קטגוריה חדשה" });
  }
};

exports.getCategoryByName = (req, res) => {
  const categoryName=req.params.category_name;
  const category = categoryBl.getCategoryByName(categoryName);
  if (category!=undefined) {
    res.json(category);
  } else {
    res.status(404).json({ error: "Category not found" });

  }

};
exports.deleteCategory = async (req, res) => {
  const categoryName=req.params.category_name;
   if(await categoryBl.deletCategoryByName(categoryName))
    res.status(200).json({ message: "הקטגוריה נמחקה בהצלחה" });
   else{
    res.status(404).json({ error: "הקטגוריה לא נמצאה" });}
};


exports.updateCategory = async (req, res) => {
  try{
  const categoryName = req.params.category_name;
  categoryBl.updatCategoryByName(categoryName,req.body.newName?req.body.newName:categoryName,req.products?req.products:await categoryBl.getCategoryByName(categoryName).products);
    res.status(200).json({ message: "קטגוריה עודכנה בהצלחה!" });
  }
  catch {
    res.status(500).json({ error: "שגיאה בעדכון קטגוריה" });
  }

};

