import { Router } from 'express';

const router = new Router({ mergeParams: true });

router.get('/',
  (req, res) => {
    res.json({ msg: 'Hello' });
  },
);

export default router;
