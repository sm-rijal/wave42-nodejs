const knexfile = require('../knexfile');
const knex = require('knex')(knexfile.development);

const findAllProduct = () => {
   return knex('products').select('products.id', 'products.name', 'products.price','store.name as toko', 'products.store_id')
    .innerJoin('store', 'products.store_id', '=', 'store.id').orderBy('id', 'desc')
}

const findByIdProduct = (id) => {
    return knex('products').select('products.id', 'products.name', 'products.price','store.name as toko', 'products.store_id')
     .innerJoin('store', 'products.store_id', '=', 'store.id').where('products.id', id).first();
 }

const createProduct = (product) => {
    return knex('products').insert(product)
}

const updateProduct = (id, product) => {
    return knex('products').where('id', id).update(product)

}

module.exports = {findAllProduct, createProduct, findByIdProduct, updateProduct}