const express = require('express')
const router = express.Router();

const {isUser, auth, isSeller} = require('../middlewares/middleware')
const {addProduct, getProducts, addCategory, getProductById} = require('../controllers/Product.controller')

router.post('/createProduct',auth,isSeller,addProduct);
router.get('/getProducts',getProducts);
router.get('/getProduct/:productId',getProductById);

router.post('/createCategory',auth,isSeller,addCategory);

module.exports=router;