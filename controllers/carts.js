const { products } = require("../dummy/data")
let carts = []


const getCarts = (req, res) => {
    
    res.send(carts)   
}

const postCart = (req, res) => {

    const {productId, quantity} = req.body

    const product = products.find((item) => item.id == productId);

    if(quantity > product.stock){
        return res.status(400).send({
            message: "quantity melebihi stock produk"
        })
    }


    if(!product){
        res.status(404).send({
            status: 404,
            message: `id product ${productId} tidak ditemukan`
        });
    } else {

        let discount = 0
        let subtotal = product.price * quantity

        if(subtotal >= 100000){  
            discount = subtotal * 0.1
        }

        const newTransaction = {
            id: carts.length + 1,
            productId: productId,
            quantity: quantity,
            subtotal: subtotal,
            discount: discount,
            total: subtotal - discount
        }    

        carts.push(newTransaction);

        res.send({
            data: {...newTransaction, product},
            message: "product berhasil ditambahkan"
        })
    }
}

const checkoutProduct = (req, res) => {

    const total = carts.reduce((acc, cur) => acc + cur.total, 0,);
    // console.log(total);
    const chekoutProduct = carts
    carts = []
    let tunai = 500000
    res.send({
        chekoutProduct,
        total,
        tunai,
        kembali: tunai - total
    })
}


module.exports = {getCarts, postCart, checkoutProduct}