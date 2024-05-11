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
const { getUser, getUserId } = require("../controllers/user");
const validateProduct = require("../controllers/validateProduct");
const passport = require("../lib/passport");
const router = express.Router();


router.get('/', getHello);
router.get('/store', getStore);

router.get('/products', restrict, getProduct);
router.post('/products', restrict, upload('image'), postProduct);
router.patch('/products/:id', restrict, upload('image'), patchProduct);
router.get('/products/:id', getByIdProduct);
router.delete('/products/:id', removeProduct)

// auth
router.post('/register', register);
router.post('/login', login);
router.get('/whoami', restrict, whoami);
router.get('/users', getUser);
router.get('/my-user', restrict, getUserId);

// router.get('user/:id' userController)


// oauth google
router.get('/auth/google', passport.authenticate('google', {scope: ['profile', 'email']}))

// router.get('/auth/google/callback',  passport.authenticate('google', {successRedirect: '/'}))

router.get('/auth/google/callback',  (req, res, next) => {
    passport.authenticate('google', (err, userToken) => {
        if(err){
            return next(err)
        }

        // jika user tidak ada
        if(!userToken){
            res.redirect('/')
        }

        const token = userToken.accessToken
        return res.redirect(`http://localhost:3000/auth-success?token=${token}`)

    },)(req, res, next)
})


module.exports = router;

// routes