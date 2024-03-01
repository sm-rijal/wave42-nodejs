const knexfile = require('../knexfile');
const knex = require('knex')(knexfile.development);



const findAllStore = () => {
    return knex('store').select('*');
}


module.exports = {findAllStore}