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
 * @apiParam (Path Parameter) {Integer} id ID of the campaign to read.
 * @apiParam (Parameters) {Integer} quantity The amount of Campaign item to purchase.
 * @apiParam (Parameters) {String} email Buyer's email.
 * @apiParam (Parameters) {String} identity Buyer's identity (Usually `firstName lastName`).
 * @apiParam (Parameters) {String} source Buyer's source token (Usually starts with tok_*).
 *
 * @apiSuccess {Integer} receiptId Receipt ID.
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *     "receiptId": "1234",
 *   }
 */
router.post('/',
  (req, res) => {
    throw new Error('Not yet implemented');
  },
);

export default router;
