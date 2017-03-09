import { Router } from 'express';
import adapter from '../adapter/campaigns';
import interactor from '../interactor/campaigns';

const router = new Router();

// Get all
router.get('/',
  (req, res) => {
    const { input, response } = adapter.getAllCampaignsExpress(res);
    interactor.getAllCampaigns(input, response);
  },
);

// Create One
router.post('/',
  (req, res) => {
    const { input, response } = adapter.createOneCampaignExpress(req, res);
    interactor.createOneCampaign(input, response);
  },
);

// Read One
router.get('/:id',
  (req, res) => {
    const { input, response } = adapter.readOneCampaignExpress(req, res);
    interactor.readOneCampaign(input, response);
  },
);

// Update One
router.put('/:id',
  (req, res) => {
    const { input, response } = adapter.updateOneCampaignExpress(req, res);
    interactor.updateOneCampaign(input, response);
  },
);

// Destroy One
router.delete('/:id',
  (req, res) => {
    const { input, response } = adapter.deleteOneCampaignExpress(req, res);
    interactor.deleteOneCampaign(input, response);
  },
);

export default router;
