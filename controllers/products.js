const products = [
    {
        id: 1,
        name: "Ayam Geprek",
        price: 15000
    },
    {
        id: 2,
        name: "Kue Bolu",
        price: 25000
    },
]

exports.getAllProducts = (req, res) => {
    res.send(products)
}

exports.getProductById = (req, res) => {
    const params = req.params.id
    const findOne = products.find((item) => item.id === Number(params))
    if(!findOne){
        res.status(404).send({
            status: 404,
            message: "data tidak ditemukan"
        })
    }
    res.send(findOne)
}