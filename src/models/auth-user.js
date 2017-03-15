import Db from '../config/db';
import { TABLE_NAME } from '../../migrations/20170315163745_create_auth_user';

const Bookshelf = Db.Bookshelf;

const AuthUser = Bookshelf.Model.extend({
  idAttribute: 'id',
  tableName: TABLE_NAME,
  bcrypt: {
    field: 'password_hash',
  },
});

export default AuthUser;
