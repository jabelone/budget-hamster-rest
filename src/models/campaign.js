import Db from '../config/db';
import { TABLE_NAME } from '../../migrations/20170308202600_create_campaign';
import ShopItem from './shop-item';

const Bookshelf = Db.Bookshelf;

const Campaign = Bookshelf.Model.extend({
  idAttribute: 'id',
  tableName: TABLE_NAME,
  orderDetails: () => this.hasOne(ShopItem),
});

export default Campaign;
