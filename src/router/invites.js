import { Router } from 'express';
import adapter from '../adapter/invites';
import interactor from '../interactor/invites';

const router = new Router();

/**
 * @api {post} /invites/slack Invite someone to Slack via Email
 * @apiName InviteToSlack
 * @apiGroup Invites
 *
 * @apiParam {String} email Invitee's Email.
 *
 * @apiSuccess {Boolean} ok Boolean of successful call.
 * @apiSuccess {String} msg Developer friendly message.
 * @apiSuccess {String} email The email of the invitee.
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "ok": true,
 *      "msg": "Email has been invited",
 *      "email": "example@codenetwork.co"
 *   }
 */
router.post('/slack',
  (req, res) => {
    const { input, response } = adapter.inviteSlackExpress(req, res);
    interactor.inviteSlackEmail(input, response);
  },
);

export default router;
