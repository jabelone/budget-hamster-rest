import Db from '../config/db';
import { TABLE_NAME } from '../../migrations/20170309202314_create_order_details';
import Order from './order';
import ShopItem from './shop-item';

const Bookshelf = Db.Bookshelf;

const OrderDetail = Bookshelf.Model.extend({
  idAttribute: 'id',
  tableName: TABLE_NAME,
  order: () => this.belongsTo(Order),
  shopItem: () => this.belongsTo(ShopItem),
});

export default OrderDetail;
