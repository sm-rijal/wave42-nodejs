/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('store').del()
  await knex('store').insert([
    {id: 1, name: 'Maju Jaya', address: 'Bandung'},
    {id: 2, name: 'Berkah Selalu', address: 'Jakarta'},
    {id: 3, name: 'Laku Terus', address: 'Depok'},
  ]);
};
