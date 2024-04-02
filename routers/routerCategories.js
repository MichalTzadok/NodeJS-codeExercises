const express = require('express');
const router = express.Router();
const categoriesController = require('../controller/controllerCategories');
const productsController =  require('../controller/controllerProducts');
const adminMiddleware  = require('../middlewares/adminMiddleWare');

router.get('/categories', categoriesController.getCategories);
router.post('/categories', adminMiddleware,categoriesController.createCategory);
// router.get('/categories/:categoryName', categoriesController.getCategoryByName);
// router.delete('/categories/:categoryName',adminMiddleware, categoriesController.deleteCategory);
// router.put('/categories/:id',adminMiddleware,categoriesController.updateCategory);
// router.get('/products/:categoryName', productsController.getProductsByCategory);
//  router.get('/products/:categoryName/:productName', productsController.getSpecificProductByCategory);
// router.post('/products/:categoryName',adminMiddleware, productsController.createProductForCategory);
// router.put('/products/:categoryName',adminMiddleware, productsController.updateProductForCategory);
// router.delete('/products/:categoryName/:productName',adminMiddleware, productsController.deleteProductForCategory);

router.use(function(err, req, res) {
    res.status(500).send("יש כרגע שגיאה בשרת, נסו שוב מאוחר יותר");
  });
module.exports = router;



