const express = require("express")
const router = express.Router()

const { getUser, getUserById } = require("../controllers/users");
const { getProducts, getProductById } = require("../controllers/products");

router.get("/", (req, res) => {
    res.send("Hello World")
})

router.get("/users", getUser)
router.get("/users/:nama", getUserById)
router.get("/products", getProducts)
router.get("/product/:id", getProductById)


module.exports = router