const knexfile = require('../knexfile');
const knex = require('knex')(knexfile.development);

const findAllUser = () => {
    return knex('users').select('*');
}

const findUser = (id) => {
    return knex('users').where('users.id', id).first();
}


module.exports = {findUser, findAllUser}