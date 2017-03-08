import Db from '../config/db';
import { TABLE_NAME } from '../../migrations/20170308203836_create_order_details';
import Order from './order';

const Bookshelf = Db.Bookshelf;

const OrderDetail = Bookshelf.Model.extend({
  idAttribute: 'id',
  tableName: TABLE_NAME,
  order: () => this.belongsTo(Order),
});

export default OrderDetail;
