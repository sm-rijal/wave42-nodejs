let users = [
    {
        id: 1,
        name: "Faris",
        address: "Jakarta"
    },
    {
        id: 2,
        name: "Sultan",
        address: "Tangerang"
    },
]

exports.getAllUsers = (req, res) => { 
    res.send(users)
}

exports.getById = (req, res) => {
    const params = req.params.id
    const findOne = users.find((item) => item.id === Number(params))
    if (!findOne){
        res.status(404).send({
            status: 404,
            message: "data tidak ditemukan"
        })
    }

    res.send(findOne)
}

exports.postUser = (req, res) => {
    // console.log(req.body);
    const body = req.body
    users.push(body)
    res.status(201).send({
        status: 201,
        message: "data user berhasil ditambahkan"
    });
}

exports.patchUser = (req, res) => {
    const params = req.params.id
    const body = req.body
    const index = users.findIndex((item) => item.id === Number(params))
    if(index !== -1){
        users[index] = {...users[index], ...body}
    } else {
        res.status(404).send({
            status: 404,
            message: "data tidak ditemukan"
        })
    }

    res.send(users[index]);
}


exports.deleteUser = (req, res) => {
    const id = req.params.id
    users = users.filter((item) => item.id !== Number(id));

    res.send({
        // data: users,
        message: `user id ${id} berhasil dihapus` 
    })
}