import { Router } from 'express';

const router = new Router();

router.post('/campaigns/:id',
  (req, res) => {
    throw new Error('Not implemented yet');
  },
);

export default router;
