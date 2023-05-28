/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('myfavorite', table => {
        table.increments('id').primary();
        table.string('idMeal', 20).notNullable();
        table.string('strMeal', 100).notNullable();
        table.string('strCategory', 100).notNullable();
        table.string('strMealThumb', 100).notNullable();
        table
          .integer('user_id')
          .unsigned()
          .notNullable();
        table.foreign('user_id').references('user.id');
      });    
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('myfavorite');   
};
