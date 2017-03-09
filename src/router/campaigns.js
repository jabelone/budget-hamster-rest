import { Router } from 'express';
import adapter from '../adapter/campaigns';
import interactor from '../interactor/campaigns';

const router = new Router();

// Get all
router.get('/',
  (req, res) => {
    const { input, response } = adapter.getAllCampaignsExpress(res);
    throw new Error('Not yet implemented');
  },
);

// Create One
router.post('/',
  (req, res) => {
    const { input, response } = adapter.createOneCampaignExpress(req, res);
    throw new Error('Not yet implemented');
  },
);

// Read One
router.get('/:id',
  (req, res) => {
    const { input, response } = adapter.readOneCampaignExpress(req, res);
    throw new Error('Not yet implemented');
  },
);

// Update One
router.put('/:id',
  (req, res) => {
    const { input, response } = adapter.updateOneCampaignExpress(req, res);
    throw new Error('Not yet implemented');
  },
);

// Destroy One
router.delete('/:id',
  (req, res) => {
    const { input, response } = adapter.deleteOneCampaignExpress(req, res);
    throw new Error('Not yet implemented');
  },
);

export default router;
