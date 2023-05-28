/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('recipes', table => {
        table.increments('id').primary();
        table.string('cookname', 100).notNullable();
        table.string('ingredients');
        table.string('instructions');
        table.string('imageurl');
        table.integer('cookingtime');
        table.boolean('is_liked');
        table
          .integer('tag_id')
          .unsigned()
          .notNullable();
        table.foreign('tag_id').references('tag.id');
      });
  };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('recipes');
  };
