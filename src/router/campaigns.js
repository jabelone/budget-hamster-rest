import { Router } from 'express';
import adapter from '../adapter/campaigns';
import interactor from '../interactor/campaigns';

const router = new Router();

/**
 * @api {get} /campaigns View all Campaigns
 * @apiName CampaignsGetAll
 * @apiGroup Campaigns
 *
 * @apiSuccess {Array} Array of Campaigns
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   [
 *     {
 *       "id": 2,
 *       "created_at": "2017-03-09 04:29:32",
 *       "start": "2017-01-01T00:00:00+00:00",
 *       "end": "2017-05-01T00:00:00+00:00",
 *       "title": "Free Shirts",
 *       "body": "Wow what a great campaign! Sign up soon!",
 *       "goal": 50
 *     },
 *     {
 *       "id": 3,
 *       "created_at": "2017-03-09 04:30:39",
 *       "start": "2017-01-01T00:00:00+10:00",
 *       "end": "2017-05-01T00:00:00+10:00",
 *       "title": "Free Shirts",
 *       "body": "Wow what a great campaign! Sign up soon!",
 *       "goal": 50
 *     }
 *   ]
 */
router.get('/',
  (req, res) => {
    const { input, response } = adapter.getAllCampaignsExpress(res);
    interactor.getAllCampaigns(input, response);
  },
);

/**
 * @api {post} /campaigns Create a Campaign
 * @apiName CampaignCreate
 * @apiGroup Campaigns
 *
 * @apiParam (Parameters) {Date} start Start date of campaign in ISO 8601.
 * @apiParam (Parameters) {Date} end End date of campaign in ISO 8601.
 * @apiParam (Parameters) {String} title Name of the campaign.
 * @apiParam (Parameters) {String} body Content (body) of the campaign.
 * @apiParam (Parameters) {Integer} [goal] Goal of the campaign.
 *
 * @apiSuccess {Integer} id Campaign's ID.
 * @apiSuccess {Date} start End date of campaign in ISO 8601.
 * @apiSuccess {Date} end Start date of campaign in ISO 8601.
 * @apiSuccess {String} title Name of the campaign.
 * @apiSuccess {String} body Content (body) of the campaign.
 * @apiSuccess {Integer} [goal] Goal of the campaign.
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *     "start": "2017-01-01T00:00:00+10:00",
 *     "end": "2017-05-01T00:00:00+10:00",
 *     "goal": 50,
 *     "title": "Free Shirts",
 *     "body": "Wow what a great campaign! Sign up soon!",
 *     "id": 6
 *   }
 */
router.post('/',
  (req, res) => {
    const { input, response } = adapter.createOneCampaignExpress(req, res);
    interactor.createOneCampaign(input, response);
  },
);

/**
 * @api {get} /campaigns/:id Read a campaign
 * @apiName CampaignRead
 * @apiGroup Campaigns
 *
 * @apiParam (Path Parameter) {Integer} id ID of the campaign to read.
 *
 * @apiSuccess {Integer} id Campaign's ID.
 * @apiSuccess {Date} start End date of campaign in ISO 8601.
 * @apiSuccess {Date} end Start date of campaign in ISO 8601.
 * @apiSuccess {String} title Name of the campaign.
 * @apiSuccess {String} body Content (body) of the campaign.
 * @apiSuccess {Integer} [goal] Goal of the campaign.
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *     "start": "2017-01-01T00:00:00+10:00",
 *     "end": "2017-05-01T00:00:00+10:00",
 *     "goal": 50,
 *     "title": "Free Shirts",
 *     "body": "Wow what a great campaign! Sign up soon!",
 *     "id": 6
 *   }
 */
router.get('/:id',
  (req, res) => {
    const { input, response } = adapter.readOneCampaignExpress(req, res);
    interactor.readOneCampaign(input, response);
  },
);

/**
 * @api {post} /campaigns/:id Update a Campaign
 * @apiName CampaignUpdate
 * @apiGroup Campaigns
 *
 * @apiParam (Path Parameter) {Integer} id ID of the campaign to update.
 * @apiParam (Parameters) {Date} start Start date of campaign in ISO 8601.
 * @apiParam (Parameters) {Date} end End date of campaign in ISO 8601.
 * @apiParam (Parameters) {String} title Name of the campaign.
 * @apiParam (Parameters) {String} body Content (body) of the campaign.
 * @apiParam (Parameters) {Integer} [goal] Goal of the campaign.
 *
 * @apiSuccess {Integer} id Campaign's ID.
 * @apiSuccess {Date} start End date of campaign in ISO 8601.
 * @apiSuccess {Date} end Start date of campaign in ISO 8601.
 * @apiSuccess {String} title Name of the campaign.
 * @apiSuccess {String} body Content (body) of the campaign.
 * @apiSuccess {Integer} [goal] Goal of the campaign.
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *     "start": "2017-01-01T00:00:00+10:00",
 *     "end": "2017-05-01T00:00:00+10:00",
 *     "goal": 60,
 *     "title": "Free Shirts",
 *     "body": "Wow what a great campaign! Sign up soon!",
 *     "id": 6
 *   }
 */
router.put('/:id',
  (req, res) => {
    const { input, response } = adapter.updateOneCampaignExpress(req, res);
    interactor.updateOneCampaign(input, response);
  },
);

/**
 * @api {get} /campaigns/:id Read a campaign
 * @apiName CampaignRead
 * @apiGroup Campaigns
 *
 * @apiParam (Path Parameter) {Integer} id ID of the campaign to read.
 *
 * @apiSuccess {String} msg Friendly message from server on delete.
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *     "msg": "Successfully Deleted Campaign"
 *   }
 */
router.delete('/:id',
  (req, res) => {
    const { input, response } = adapter.deleteOneCampaignExpress(req, res);
    interactor.deleteOneCampaign(input, response);
  },
);

export default router;
