const products = [
    {
        id: 1,
        nama: "Aqua",
        harga: 5000
    },
    {
        id: 2,
        nama: "Aqua",
        harga: 6500
    },
    {
        id: 3,
        nama: "Aqua",
        harga: 3000
    },
]

exports.getProducts = (req, res) => {
    res.send(products)
}

exports.getProductById = (req, res) => {
    const params = req.params.id
    const product = products.find((item) => item.id === Number(params))
    res.send(product)
}