import Db from '../config/db';
import { TABLE_NAME } from '../../migrations/20170309202310_create_orders';
import OrderDetail from './order-detail';

const Bookshelf = Db.Bookshelf;

const Order = Bookshelf.Model.extend({
  idAttribute: 'id',
  tableName: TABLE_NAME,
  orderDetails: () => this.hasMany(OrderDetail),
});

export default Order;
