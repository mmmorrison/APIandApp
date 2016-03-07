exports.up = function(knex, Promise) {
  return knex.schema.createTable('all', function(table){
    table.increments();
    table.integer('learning_id');
    table.integer('comment_id');

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('all');
};
