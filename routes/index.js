const express = require("express");
const getHello = require("../controllers/hello");
const { getStore } = require("../controllers/store");
const { getProduct, postProduct, getByIdProduct, patchProduct } = require("../controllers/product");
const formProduct = require("../controllers/form");
const { findByIdProduct, deleteProduct } = require("../models/productModel.");
const { findAllStore } = require("../models/storeModel");
const upload = require("../middlewares/fileUpload");
const router = express.Router();


router.get('/', getHello);
router.get('/store', getStore);

router.get('/products', getProduct);
router.post('/add-product', upload.single('image'), postProduct);
router.patch('/edit-product/:id', upload.single('image'), patchProduct);
router.get('/detail-product/:id', getByIdProduct);

router.get('/form', formProduct);

router.get('/edit-product/:id', async(req, res) => {
    const ID = req.params.id

    const product = await findByIdProduct(ID);
    const store = await findAllStore();
    res.render('edit-product', {product, store})
    
});

router.delete('/delete-product/:id', async(req, res) => {
    const ID = req.params.id
    await deleteProduct(ID);
    // res.redirect('/products')
    res.json({
        message: 'delete produk berhasil'
    })
})



module.exports = router;

// routes