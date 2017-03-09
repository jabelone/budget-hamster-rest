import { Router } from 'express';

const router = new Router({ mergeParams: true });

/**
 * Create an invoice with the campaign.
 *
 * It should be noted this is VERY bootstrapped right now.
 *
 * In the future, this will become more... feasible...
 * Including: Shopping basket, etc.
 *
 * The apiParam hold ALL details required to complete a transaction
 * that's part of a campaign.
 *
 * @api {post} /campaigns/:id/transactions Create a Campaign Transaction
 * @apiName CampaignCreateTransaction
 * @apiGroup CampaignTransactions
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
    res.json({ msg: 'Hello' });
  },
);

export default router;
