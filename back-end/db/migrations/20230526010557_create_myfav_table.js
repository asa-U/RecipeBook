/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('myfav', table => {
        table.increments('id').primary();
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
    return knex.schema.dropTable('myfav');  
};
