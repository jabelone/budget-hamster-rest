const TABLE_NAME = 'campaigns';

exports.TABLE_NAME = TABLE_NAME;

exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable(TABLE_NAME, function(table){
      table.increments();
      table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
      table.timestamp('start').notNullable();
      table.timestamp('end').notNullable();
      table.string('title').notNullable();
      table.string('body').notNullable();
      table.integer('goal');
    }),
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable(TABLE_NAME),
  ]);
};
