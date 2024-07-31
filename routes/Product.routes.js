const express = require('express')
const router = express.Router();

const {isUser, auth, isSeller} = require('../middlewares/middleware')
const {addProduct, getProducts} = require('../controllers/Product.controller')

router.post('/createProduct',auth,isSeller,addProduct);
router.get('/getProducts',getProducts);

module.exports=router;