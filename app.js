const express = require('express');
const app = express();
const db = require('./connection/db')
const database = require('./connection/database');

app.set('view engine', 'ejs');
app.use(express.static('public')) // untuk membaca file yang ada di folder public
app.use(express.urlencoded({extended: false}))


app.get('/', (req, res) => {

    const halo = "Hallooow"
    res.render('index', {halo})
})

let products = []

app.get('/products', async(req, res) => {
    // const response = await db.query('SELECT * FROM products')
    // const dataProducts = response.rows

    const data = await database('products').select('products.id', 'products.name', 'products.price','store.name as toko')
    .innerJoin('store', 'products.store_id', '=', 'store.id').orderBy('id', 'desc')
    res.render('products', {products: data})
})

app.get('/detail-product/:id', async(req, res) => {
    try {
        const ID = req.params.id
        const response = await database.select('*').from('products').where('id', ID)    
        
        // console.log(response[0].id);
        const detailProduct = response[0]
        res.render('detail-product', {detailProduct})
        
    } catch (error) {
        console.log(error);
    }
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

app.post('/add-product', async(req, res) => {
    // products.push(req.body)

    console.log(req.body);
    const {name, price, store_id} = req.body
    const newProduct = {
        name,
        price: Number(price),
        store_id: Number(store_id)
    }

    await database('products').insert(newProduct)

    res.redirect('/products')
})

app.listen(8000, () => console.log('server running on port 8000'))
