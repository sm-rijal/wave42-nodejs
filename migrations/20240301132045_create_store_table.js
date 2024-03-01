/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('store', function (table) {
        table.increments('id').primary();
        table.string('name', 100).notNullable();
        table.text('address').notNullable();
        table.timestamps(true, true); // -> akan mengenerate created_at sama updated_at
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('store')
};
