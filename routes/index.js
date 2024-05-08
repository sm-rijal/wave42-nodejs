const express = require("express");
const getHello = require("../controllers/hello");
const { getStore } = require("../controllers/store");
const { getProduct, postProduct, getByIdProduct, patchProduct, removeProduct } = require("../controllers/product");
const formProduct = require("../controllers/form");
const { findByIdProduct } = require("../models/productModel.");
const { findAllStore } = require("../models/storeModel");
const upload = require("../middlewares/fileUpload");
const { register, login, whoami } = require("../controllers/auth");
const restrict = require("../middlewares/restrict");
const { getUser } = require("../controllers/user");
const validateProduct = require("../controllers/validateProduct");
const passport = require("../lib/passport");
const router = express.Router();


router.get('/', getHello);
router.get('/store', getStore);

router.get('/products', getProduct);
router.post('/add-product', validateProduct, upload('image'), postProduct);
router.patch('/edit-product/:id', upload('image'), patchProduct);
router.get('/detail-product/:id', getByIdProduct);

router.get('/form', formProduct);

router.get('/edit-product/:id', async(req, res) => {
    const ID = req.params.id

    const product = await findByIdProduct(ID);
    const store = await findAllStore();
    res.render('edit-product', {product, store})
    
});

router.delete('/delete-product/:id', removeProduct)

// auth
router.post('/register', register);
router.post('/login', login);
router.get('/whoami', restrict, whoami);
router.get('/users', restrict, getUser);


// oauth google
router.get('/auth/google', passport.authenticate('google', {scope: ['profile', 'email']}))

router.get('/auth/google/callback', passport.authenticate('google', {successRedirect: '/'}))




module.exports = router;

// routes