const { transactions, products } = require("../dummy/data");

exports.getTransactions = (req, res) => {

    res.send(transactions)

}

exports.postTransactions = (req, res) => {
    const {productId, quantity} = req.body

    const dataProduct = products.find((item) => item.id == productId)
    if(!dataProduct){
        res.status(404).send({
            status: 404,
            message: `id product ${productId} tidak ditemukan`
        });
    } else {

        const newTransaction = {
            id: transactions.length + 1,
            productId: productId,
            quantity: quantity,
            total: dataProduct.price * quantity
            // jika total > 100_000, kasih diskon 10%
        }
    
        transactions.push(newTransaction)
        res.status(201).send({
            data: {...newTransaction, product: dataProduct},
            status: 201,
            message: "transaksi berhasil"
        })
    }

}


// productID
// quantity * price
// total : quantity * price