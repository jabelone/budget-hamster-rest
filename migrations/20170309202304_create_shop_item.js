const campaignTable = require('./20170308202600_create_campaign').TABLE_NAME;

const TABLE_NAME = 'shop_items';

exports.TABLE_NAME = TABLE_NAME;

exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable(TABLE_NAME, function(table){
      table.increments();
      table.integer('campaign_id').references('id').inTable(campaignTable).nullable();
      table.string('title').notNullable();
      table.string('description').notNullable();
      table.integer('unit_price').notNullable();
      table.json('meta').nullable();
    }),
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable(TABLE_NAME),
  ]);
};
