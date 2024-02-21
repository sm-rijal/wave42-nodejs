const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public')) // untuk membaca file yang ada di folder public
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {

    const halo = "Hallooow"
    res.render('index', {halo})
})

let products = []

app.get('/products', (req, res) => {

    res.render('products', {products})

})

app.get('/form', (req, res) => {
    res.render('form')
})

app.post('/add-product', (req, res) => {
    products.push(req.body)

    res.redirect('/products')
})

app.listen(8000)