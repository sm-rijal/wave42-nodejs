const knexfile = require('../knexfile');
const knex = require('knex')(knexfile.production);

const registerUser = (user) => {
    return knex('users').insert(user).returning('*')
}


const loginUser = (email) => {
    return knex('users').where('users.email', email).first();
}


module.exports = {registerUser, loginUser}

