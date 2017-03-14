const TABLE_NAME = 'orders';

exports.TABLE_NAME = TABLE_NAME;

exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable(TABLE_NAME, function(table){
      table.integer('id').primary();
      table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
      table.string('seller_email').notNullable();
      table.string('seller_identity').notNullable();
      table.string('buyer_email').notNullable();
      table.string('buyer_identity').notNullable();
      table.boolean('approved').notNullable().defaultTo(true);
    }),
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable(TABLE_NAME),
  ]);
};
