const { Pool } = require('pg');

const db = new Pool({
    user: 'postgres',
    password: 'admin',
    host: 'localhost',
    database: 'mydatabase',
    port: 5432
})

module.exports = db