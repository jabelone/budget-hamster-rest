import { Router } from 'express';
import members from './members';
import invites from './invites';
import transactions from './transactions';

function mainRouter() {
  const router = new Router();
  router.use('/members', members);
  router.use('/invites', invites);
  router.use('/transactions', transactions);
  return router;
}

export default mainRouter;
