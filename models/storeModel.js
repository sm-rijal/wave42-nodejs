const knexfile = require('../knexfile');
const knex = require('knex')(knexfile.production);



const findAllStore = () => {
    return knex('store').select('*');
}


module.exports = {findAllStore}