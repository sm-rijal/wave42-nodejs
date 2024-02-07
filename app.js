const express = require("express");
const app = express();
const port = 3000

app.set('view engine', 'ejs') // set view engine
app.use(express.static('public')) // untuk membaca file yang ada di folder public
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    const nama = "Samsul Rijal"

    res.render('index', {nama})
});

app.get('/users', (req, res) => {
    const user = {
        nama: "Samsul Rijal",
        alamat: "Jakarta"
    }

    res.render('user', {user})
});

app.get('/products',(req, res) => {
    const products = [
        {
            nama: "Aqua",
            harga: 5000
        },
        {
            nama: "Cleo",
            harga: 3000
        },
        {
            nama: "Le Minerale",
            harga: 4000
        },
    ]

    res.render('product', {products})

})

app.get('/form',(req, res) => {

    res.render('form')
})
app.post('/add-product',(req, res) => {

    // console.log(req.body.nama);
    // console.log(req.body.harga);

    const body = {
        nama: req.body.nama,
        harga: req.body.harga
    }
    console.log(body);

    res.redirect('form')
})




app.listen(port, () => console.log(`server running on port ${port}`))