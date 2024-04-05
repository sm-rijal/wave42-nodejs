/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('products', function (table) {
        table.increments('id').primary();
        table.string('name', 100).notNullable();
        table.integer('price').notNullable();
        table.string('image', 250);
        table.integer('store_id').unsigned();
        table.foreign('store_id').references('store.id');
        table.timestamps(true, true); // -> akan mengenerate created_at sama updated_at
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('products')
};
