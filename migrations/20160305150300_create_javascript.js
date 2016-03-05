exports.up = function(knex, Promise) {
  return knex.schema.createTable('learning', function(table){
    table.increments();
    table.string('imageURL');
    table.string('name');
    table.string('language');
    table.string('website');
    table.string('description');
    table.integer('visits');
    table.integer('usefulness');

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('learning');
};
