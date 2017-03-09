const TABLE_NAME = 'order_details';
const orderTable = require('./20170309202310_create_orders').TABLE_NAME;
const shopItemTable = require('./20170309202304_create_shop_item').TABLE_NAME;

exports.TABLE_NAME = TABLE_NAME;

exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable(TABLE_NAME, function(table){
      table.integer('id').primary();
      table.integer('order_id').references('id').inTable(orderTable).notNullable();
      table.integer('shop_item_id').references('id').inTable(shopItemTable);
      table.integer('quantity').notNullable();
      table.json('meta').nullable();
    }),
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable(TABLE_NAME),
  ]);
};
