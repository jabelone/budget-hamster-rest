import { Router } from 'express';

const router = new Router();

router.post('/campaigns/:id',
  (req, res) => {
    throw new Error('Not implemented yet');
  },
);

router.post('/donations',
  (req, res) => {
    throw new Error('Not implemented yet');
  },
);

export default router;
