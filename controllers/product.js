const { findAllProduct, createProduct, findByIdProduct, updateProduct } = require("../models/productModel.");

const getProduct = async(req, res) => {
    try {
        const products = await findAllProduct();
        res.render('products', {products})

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'internal server error'
        });
    }
}

const getByIdProduct = async(req, res) => {
    try {
        const ID = req.params.id
        const detailProduct = await findByIdProduct(ID);
        res.render('detail-product', {detailProduct})

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'internal server error'
        });
    }
}

const postProduct = async (req, res) => {
    try {
        // console.log(req.body);
        const {name, price, store_id} = req.body
        const newProduct = {
            name,
            price: Number(price),
            store_id: Number(store_id)
        }

        await createProduct(newProduct);

        res.redirect('/products')

    } catch (error) {
     console.log(error);   
    }

}

const patchProduct = async (req, res) => {
    try {
        // console.log(req.body);
        const ID = req.params.id
        const {name, price, store_id} = req.body
        const newProduct = {
            name,
            price: Number(price),
            store_id: Number(store_id)
        }

        await updateProduct(ID, newProduct);

        res.redirect('/products')

    } catch (error) {
     console.log(error);   
    }

}


module.exports = {getProduct, postProduct, getByIdProduct, patchProduct}