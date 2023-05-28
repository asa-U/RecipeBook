/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('tag').del()
  await knex('tag').insert([
    {id:1, title: 'Recommend'},
    {id:2, title: 'Quick'},
    {id:3, title: 'My favorite'}
  ]);
};


