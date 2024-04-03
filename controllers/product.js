const { findAllProduct, createProduct, findByIdProduct, updateProduct } = require("../models/productModel.");

const getProduct = async(req, res) => {
    try {
        const limit = req.query.limit
        const products = await findAllProduct(limit);
        // res.render('products', {products})
        res.json(products)

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
        // res.render('detail-product', {detailProduct})
        res.json(detailProduct)

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
            store_id: 2
        }

        await createProduct(newProduct);
        // req.flash('success','produk berhasil ditambahkan') // untuk kirim pesan aler ke halaman produk
        // res.redirect('/products')
        res.status(201).json({
            message: 'successs'
        })

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

        // res.redirect('/products')
        res.json({
            message: 'edit data berhasil'
        })

    } catch (error) {
     console.log(error);   
    }

}


module.exports = {getProduct, postProduct, getByIdProduct, patchProduct}