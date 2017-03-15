import Knex from 'knex';
import Bookshelf from 'bookshelf';
import BookshelfBcrypt from 'bookshelf-bcrypt';
import dotenv from 'dotenv';
import knexfile from '../../knexfile';

dotenv.config();

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const knex = Knex(knexfile[process.env.NODE_ENV]);
const bookshelf = Bookshelf(knex);
bookshelf.plugin('registry');
bookshelf.plugin(BookshelfBcrypt);

export default {
  Bookshelf: bookshelf,
};
