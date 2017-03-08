import { Router } from 'express';
import adapter from '../adapter/invites';
import interactor from '../interactor/invites';

const router = new Router();

router.post('/slack',
  (req, res) => {
    const { input, response } = adapter.inviteSlackExpressAdapter(req, res);
    interactor.inviteSlackEmail(input, response);
  }
);

export default router;
