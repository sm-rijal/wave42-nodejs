const express = require('express');
const app = express();
const db = require('./connection/db')

app.set('view engine', 'ejs');
app.use(express.static('public')) // untuk membaca file yang ada di folder public
app.use(express.urlencoded({extended: false}))


app.get('/', (req, res) => {

    const halo = "Hallooow"
    res.render('index', {halo})
})

let products = []

app.get('/products', async(req, res) => {

    const response = await db.query('SELECT * FROM products')
    // console.log(response.rows);
    const dataProducts = response.rows

    res.render('products', {products: dataProducts})
})

app.get('/transaction', async(req, res) => {

    const response = await db.query(`SELECT 
        custommer.name,
        products.name AS product,
        products.price,
        quantity AS qty,
        products.price * quantity AS total
        FROM transactions
        INNER JOIN custommer ON custommer.id = transactions.custommer_id
        INNER JOIN products ON products.id = transactions.product_id
    `)
    // console.log(response.rows);
    const transactions = response.rows

    res.render('transaction', {transactions})
})

app.get('/form', (req, res) => {
    res.render('form')
})

app.post('/add-product', (req, res) => {
    products.push(req.body)


    res.redirect('/products')
})

app.listen(8000)
