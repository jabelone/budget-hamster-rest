import { Router } from 'express';
import adapter from '../adapter/ca';
import interactor from '../interactor/invites';

const router = new Router();

// Get all
router.get('/',
  (req, res) => {
    throw new Error('Not yet implemented');
  },
);

// Create One
router.post('/',
  (req, res) => {
    throw new Error('Not yet implemented');
  },
);

// Read One
router.get('/:id',
  (req, res) => {
    throw new Error('Not yet implemented');
  },
);

// Update One
router.put('/:id',
  (req, res) => {
    throw new Error('Not yet implemented');
  },
);

// Destroy One
router.delete('/:id',
  (req, res) => {
    throw new Error('Not yet implemented');
  },
);

export default router;
