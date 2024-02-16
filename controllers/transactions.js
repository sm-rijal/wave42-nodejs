const { transactions, products } = require("../dummy/data");

exports.getTransactions = (req, res) => {

    res.send(transactions)

}

exports.postTransactions = (req, res) => {
    const {productId, quantity} = req.body

    const product = products.find((item) => item.id == productId);
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
            id: transactions.length + 1,
            productId: productId,
            quantity: quantity,
            subtotal: subtotal,
            discount: discount,
            total: subtotal - discount
        }    

        transactions.push(newTransaction);

        res.send({
            data: {...newTransaction, product},
            message: "tambah product berhasil"
        })
    }



}

// productID
// quantity * price
// total : quantity * price



// {
//     productId: 1,
//     quantity: 2,
//     total = quantity * harga product
// }


// {
    // "id": 1,
    // "productId": 2,
    // "quantity": 2,
    // "subtotal": 100000
    // "discount": 10000
    // "total": subtotal - discount,
// }