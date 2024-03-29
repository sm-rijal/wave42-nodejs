const express = require("express");
const getHello = require("../controllers/hello");
const { getStore } = require("../controllers/store");
const { getProduct, postProduct, getByIdProduct, patchProduct } = require("../controllers/product");
const formProduct = require("../controllers/form");
const { findByIdProduct } = require("../models/productModel.");
const { findAllStore } = require("../models/storeModel");
const router = express.Router();


router.get('/', getHello);
router.get('/store', getStore);

router.get('/products', getProduct);
router.post('/add-product', postProduct);
router.post('/edit-product/:id', patchProduct);
router.get('/detail-product/:id', getByIdProduct);

router.get('/form', formProduct);

router.get('/edit-product/:id', async(req, res) => {
    const ID = req.params.id

    const product = await findByIdProduct(ID);
    const store = await findAllStore();
    res.render('edit-product', {product, store})
    
})



module.exports = router;

// routes