const knexfile = require('../knexfile');
const knex = require('knex')(knexfile.development);

const findAllProduct = (limit) => {
    if(!limit){
        return knex('products').select('products.id', 'products.name', 'products.price','products.image','store.name as toko', 'products.store_id')
        .innerJoin('store', 'products.store_id', '=', 'store.id').orderBy('products.created_at', 'desc')        
    } else {
        return knex('products').select('products.id', 'products.name', 'products.price','products.image','store.name as toko', 'products.store_id')
         .innerJoin('store', 'products.store_id', '=', 'store.id').limit(limit).orderBy('products.created_at', 'desc')
    }
}

const findByIdProduct = (id) => {
    return knex('products').select('products.id', 'products.name', 'products.price','products.image','store.name as toko', 'products.store_id')
     .innerJoin('store', 'products.store_id', '=', 'store.id').where('products.id', id).first();
 }

const createProduct = (product) => {
    return knex('products').insert(product)
}

const updateProduct = (id, product) => {
    return knex('products').where('id', id).update(product)
}

const deleteProduct = (id) => {
    return knex('products').where('id', id).del();
}

module.exports = {findAllProduct, createProduct, findByIdProduct, updateProduct, deleteProduct}