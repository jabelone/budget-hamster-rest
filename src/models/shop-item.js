import Db from '../config/db';
import { TABLE_NAME } from '../../migrations/20170309202304_create_shop_item';
import Campaign from './campaign';
import ShopItem from './shop-item';

const Bookshelf = Db.Bookshelf;

const OrderDetail = Bookshelf.Model.extend({
  idAttribute: 'id',
  tableName: TABLE_NAME,
  campaign: () => this.belongsTo(Campaign),
  orderDetails: () => this.hasMany(ShopItem),
});

export default OrderDetail;
