const knex = require('knex')


const database =  knex({
    client: 'pg',
    connection: {
      host : 'localhost',
      port : 5432,
      user : 'postgres',
      password : 'admin',
      database : 'mydatabase'
    }
});

module.exports = database;