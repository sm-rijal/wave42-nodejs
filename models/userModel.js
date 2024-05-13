const knexfile = require('../knexfile');
const knex = require('knex')(knexfile.production);

const findAllUser = () => {
    return knex('users').select('*');
}

const findUser = (id) => {
    return knex('users').where('users.id', id).first();
}


module.exports = {findUser, findAllUser}