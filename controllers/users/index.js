const users = [
    {
        id: 1,
        nama: "John"
    },
    {
        id: 2,
        nama: "Asep",
        alamat: "Tangerang"
    },
    {
        id: 3,
        nama: "Asep",
        alamat: "Depok"
    },
]



exports.getUser = (req, res) => {
    res.send(users)
}

exports.getUserById = (req, res) => {
    // console.log(req.params.nama);
    const params = req.params.nama
    const user = users.find((item) => item.nama === params)

    if (!user){
        res.send('data tidak ditemukan')
    } else {
        res.send(user)
    }
}