const TABLE_NAME = 'order_details';
const orderTable = require('./20170308203005_create_orders').TABLE_NAME;
const campaignTable = require('./20170308202600_create_campaign').TABLE_NAME;

exports.TABLE_NAME = TABLE_NAME;

exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable(TABLE_NAME, function(table){
      table.integer('id').primary();
      table.integer('order_id').references('id').inTable(orderTable).notNullable();
      table.integer('campaign_id').references('id').inTable(campaignTable);
      table.string('title').notNullable();
      table.string('description').notNullable();
      table.integer('quantity').notNullable();
      table.integer('unit_price').notNullable();
    }),
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable(TABLE_NAME),
  ]);
};
