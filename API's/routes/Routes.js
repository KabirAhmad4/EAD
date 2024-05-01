const express=require('express');
const router= express.Router();
// FOR Products
const productController=require('../controllers/productController');
router.post('/products',productController.createProduct);
router.get('/products',productController.getAllProducts);
router.put('/products/:id',productController.updateProduct);
router.delete('/products/:id',productController.deleteProduct);

// FOR users
const UserController=require('../controllers/UserController');
router.post('/CreateUser',UserController.createUser);
router.get('/getUser',UserController.getAllUsers);
router.put('/updateUsers/:id',UserController.updateUser);
router.delete('/DeleteUsers/:id',UserController.deleteUser);

module.exports=router;