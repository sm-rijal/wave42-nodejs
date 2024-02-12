const express = require("express");
const { getAllUsers, getById, postUser, patchUser, deleteUser } = require("../controllers/users");
const { getAllProducts, getProductById } = require("../controllers/products");
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
router.get('/products', getAllProducts)
router.get('/products/:id', getProductById)

module.exports = router;