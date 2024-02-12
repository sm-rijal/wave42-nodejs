const express = require("express");
const app = express();
const port = 8000


app.use(express.json()) // agar method post bisa menerima data json

app.get('/', (req, res) => {
    res.send("hallo")
})

const users = [
    {
        id: 1,
        name: "Faris",
        address: "Tangerang"
    },
    {
        id: 2,
        name: "Adit",
        address: "Jakarta"
    },
    {
        id: 3,
        name: "Mariana",
        address: "Jakarta"
    },
]

app.get('/users', (req, res) => {
    

    res.send(users)
})

// params
app.get('/users/:id', (req, res) => {
    const params = req.params.id
    const findOne = users.find((item) => item.id === Number(params));
    if(!findOne){
        res.status(404).send({
            status: 404,
            message: "data tidak ditemukan"
        })
    } else {
        res.status(200).send(findOne)
    }
})

// params query
// app.get('/users', (req, res) => {
//     const query = req.query 
//     console.log(query);
//     const filter = users.filter((item) => item.address === req.query.address)
    
//     res.send(filter)
// })


// method post
app.post('/users',(req, res) => {

    console.log(req.body);
    const body = req.body // berfungsi untuk ngambil data request dari client
    users.push(body)

    res.status(201).send({
        status: 201,
        message: "data user berhasil ditambahkan",
        data: body
    })

});


app.listen(port, () => console.log(`server running on port ${port}`))