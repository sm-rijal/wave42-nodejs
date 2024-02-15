const express = require("express");
const { getAllUsers, getById, postUser, patchUser, deleteUser } = require("../controllers/users");
const { getAllProducts, getProductsById, postProduct, EditProducts, deleteProducts } = require("../controllers/products");
const { getTransactions, postTransactions } = require("../controllers/transactions");
const router = express.Router()

router.get('/', (req, res) => {
    res.send("Hello World")
})

// users
router.get('/users', getAllUsers)
router.get('/users/:id', getById)
router.post('/users', postUser);
router.patch('/users/:id', patchUser);
router.delete('/users/:id', deleteUser);

// products
router.get('/products', getAllProducts);
router.get('/products/:id', getProductsById);
router.post('/products', postProduct);
router.patch('/products/:id', EditProducts);
router.delete('/products/:id', deleteProducts);

// transaksi
router.get('/transactions', getTransactions);
router.post('/transactions', postTransactions);

module.exports = router;