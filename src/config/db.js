import Knex from 'knex';
import Bookshelf from 'bookshelf';
import dotenv from 'dotenv';
import knexfile from '../../knexfile';

dotenv.config();

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const knex = Knex(knexfile[process.env.NODE_ENV]);
const bookshelf = Bookshelf(knex);
bookshelf.plugin('registry');

export default {
  Bookshelf: bookshelf,
};
