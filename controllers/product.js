const {uploadFileCloudinary, deleteFileCloudinary} = require("../middlewares/cloudinary");
const deleteFile = require("../middlewares/deleteFile");
const { findAllProduct, createProduct, findByIdProduct, updateProduct, deleteProduct } = require("../models/productModel.");

const getProduct = async(req, res) => {
    try {
        const limit = req.query.limit
        const products = await findAllProduct(limit);
        // res.render('products', {products})
        const dataProducts = products.map((item) => {
            return {...item, image: process.env.PATH_FILE + item.image, stock: 2}
        })
        res.status(200).json({
            message: 'ok',
            data: dataProducts
        })
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
        
        res.json({
            message: 'ok',
            data: detailProduct
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'internal server error'
        });
    }
}

const postProduct = async (req, res) => {
    try {

        const {name, price, store_id} = req.body
        const resultCloudinary = await uploadFileCloudinary(req.file.path)
        // console.log(resultCloudinary);

        const newProduct = {
            name,
            price: Number(price),
            // image: req.file.filename,
            image: resultCloudinary,
            store_id: Number(store_id)
        }

        await createProduct(newProduct);   

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
        // console.log('test',req.file);
        const ID = req.params.id
        const product = await findByIdProduct(ID);
        const {name, price, store_id} = req.body

        let resultCloudinary
        if(req.file){
            resultCloudinary = await uploadFileCloudinary(req.file.path)
        }
    
        const newProduct = {
            name,
            price: Number(price),
            image: req.file ? resultCloudinary : product.image,
            store_id: Number(store_id)
        }

        if(req.file){
            // deleteFile(product.image)
            deleteFileCloudinary(product.image)
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

const removeProduct = async(req, res) => {

    const ID = req.params.id
    
    const product = await findByIdProduct(ID);

    if(product && product.image){

        // deleteFile(product.image) tidak dipake, karena menggunakan cloudinary
        deleteFileCloudinary(product.image)
    }
    
    await deleteProduct(ID);

    res.json({
        message: 'delete produk berhasil'
    })

}


module.exports = {getProduct, postProduct, getByIdProduct, patchProduct, removeProduct}