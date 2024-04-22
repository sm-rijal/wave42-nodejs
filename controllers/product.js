const { findAllProduct, createProduct, findByIdProduct, updateProduct } = require("../models/productModel.");

const getProduct = async(req, res) => {
    try {
        const limit = req.query.limit
        const products = await findAllProduct(limit);
        // res.render('products', {products})
        const dataProducts = products.map((item) => {
            return {...item, image: process.env.PATH_FILE + item.image, stock: 2}
        })
        res.json(dataProducts)
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
        let detailProduct = await findByIdProduct(ID);
        // res.render('detail-product', {detailProduct})
        detailProduct = {
            ...detailProduct, image: process.env.PATH_FILE + detailProduct.image
        }
        
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
        // console.log(req.file);

        const {name, price, store_id} = req.body
        const newProduct = {
            name,
            price: Number(price),
            image: req.file.filename,
            store_id: Number(store_id)
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
        console.log(req.file);
        const ID = req.params.id
        const {name, price, store_id} = req.body
        const newProduct = {
            name,
            price: Number(price),
            image: req.file?.filename,
            store_id: Number(store_id)
        }

        await updateProduct(ID, newProduct);

        // res.redirect('/products')
        res.json({
            newProduct,
            message: 'edit produk berhasil'
        })

    } catch (error) {
     console.log(error);   
    }

}


module.exports = {getProduct, postProduct, getByIdProduct, patchProduct}