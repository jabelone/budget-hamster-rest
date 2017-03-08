import { Router } from 'express';
import { invites } from '../adapter'

const router = new Router();

router.post('/slack',
  (req, res) => {
    const { input, response } = invites.inviteSlackExpressAdapter(req, res);
    throw new Error('Not yet implemented');
  }
);

export default router;
