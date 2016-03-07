exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', function(table){
    table.increments();
    table.integer('learning_id');
    table.string('author');
    table.string('review');
    table.integer('stars');

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments');
};
