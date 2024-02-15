let products = [
    {
        id: 1,
        name: "Milo", // rubah jadi Rinso
        price: 12000
    },
    {
        id: 2,
        name: "Ultra",
        price: 15000
    },
]


// get all products
exports.getAllProducts = (req, res) => {

    res.send(products)
}

// get by id
exports.getProductsById = (req, res) => {
    const id = req.params.id

    const findOne = products.find((item) => item.id === Number(id));
    if(!findOne){
        res.status(404).send({
            status: 404,
            message: "data tidak ditemukan"
        });
    }

    res.send(findOne)
}

// post users
exports.postProduct = (req, res) => {
    id = products.length + 1
    const {name, price} = req.body
    const newProduct = {
        id: id,
        name: name,
        price: price,
    }

    products.push(newProduct);

    res.status(201).send({
        status: 201,
        message: "produk berhasil ditambahkan"
    })
}

exports.EditProducts = (req, res) => {
    const ID = req.params.id

    index = products.findIndex((item) => item.id == ID);
    const {name, price} = req.body
    if(price){
        products[index].price = price
    }

    if(name){
        products[index].name = name
    }
    // console.log(index);
    // find -> mendapatkan data object
    // findIndex -> mendapatkan posisi index nya
    res.send(products);
}

exports.deleteProducts = (req, res) => {
    const ID = req.params.id
    const findOne = products.find((item) => item.id == ID);
    if(!findOne){
        res.status(404).send({
            status: 404,
            message: `id ${ID} tidak ditemukan`
        });
    } else {
        products = products.filter((item) => item.id != ID);
        res.send({
            message: `id product ${ID} berhasil dihapus`
        })
    }
}