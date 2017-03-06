import { Router } from 'express';
import members from './member';
import invites from './invite';
import transactions from './transactions';

function mainRouter() {
  const router = new Router();
  router.use('/members', members);
  router.use('/invites', invites);
  router.use('/transactions', transactions);
  return router;
}

export { mainRouter as router };
export default mainRouter;
