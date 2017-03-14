import { Router } from 'express';
import members from './members';
import invites from './invites';
import campaigns from './campaigns';
import shopitems from './shop-item';

function mainRouter() {
  const router = new Router();
  router.use('/members', members);
  router.use('/invites', invites);
  router.use('/campaigns', campaigns);
  router.use('/shopItems', shopitems);
  return router;
}

export default mainRouter;
