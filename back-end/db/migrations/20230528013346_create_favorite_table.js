/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('favorite', table => {
        table.increments('id').primary();
        table.string('idMeal', 20).notNullable();
        table.string('strMeal', 100).notNullable();
        table.string('strCategory', 100).notNullable();
        table.string('strMealThumb', 100).notNullable();
      });     
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('favorite');   
};
