import { Router } from 'express';
import adapter from '../adapter/shop-item';
import interactor from '../interactor/shop-item';

const router = new Router();

/**
 * @api {get} /shopItem Read all ShopItems
 * @apiName ShopItemGetAll
 * @apiGroup ShopItems
 *
 * @apiSuccess {Array} shopItems Array of ShopItems
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   [
 *     {
 *       "id": 1,
 *       "campaign_id": 1,
 *       "title": "Code Network T-Shirt",
 *       "description": "# Cool kids\n Ever wanted to be cool? Buy a shirt!",
 *       "unit_price": 2000,
 *       "meta": "{\"sizes\":[\"S\",\"M\",\"L\",\"XL\"]}"
 *     },
 *     {
 *       "id": 2,
 *       "title": "Mainframes",
 *       "description": "# Mainframe\n One cobol server please.",
 *       "unit_price": 100000
 *     }
 *   ]
 */
router.get('/',
  async (req, res) => {
    const { input, response } = adapter.getAllExpress(res);
    await interactor.getAll(input, response);
  },
);

/**
 * @api {post} /shopItem Create a ShopItem
 * @apiName ShopItemCreate
 * @apiGroup ShopItems
 *
 * @apiParam (Parameters) {Integer} [campaign_id] The parent Campaign's ID
 * @apiParam (Parameters) {String} title The title of the shop item.
 * @apiParam (Parameters) {String} description The description of the shop item.
 * @apiParam (Parameters) {Integer} unit_price The unit_price of the shop item.
 * @apiParam (Parameters) {JSON} meta A JSON payload of any extra meta data.
 *
 * @apiSuccess {Integer} id ID of the shop Item.
 * @apiSuccess {Integer} campaign_id Parent Campaign's ID.
 * @apiSuccess {String} title The title of the shop item.
 * @apiSuccess {String} description The description of the shop item.
 * @apiSuccess {Integer} unit_price The unit_price of the shop item.
 * @apiSuccess {JSON} meta A JSON payload of any extra meta data.
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *     "id": 1,
 *     "campaign_id": 1,
 *     "title": "Code Network T-Shirt",
 *     "description": "# Cool kids\n Ever wanted to be cool? Buy a shirt!",
 *     "unit_price": 2000,
 *     "meta": "{\"sizes\":[\"S\",\"M\",\"L\",\"XL\"]}"
 *   }
 */
router.post('/',
  async (req, res) => {
    const { input, response } = adapter.createOneExpress(req, res);
    await interactor.createOne(input, response);
  },
);

/**
 * @api {get} /shopItem/:id Read a ShopItem
 * @apiName ShopItemRead
 * @apiGroup ShopItems
 *
 * @apiParam (Path Parameter) {Integer} id ID of the campaign to read.
 *
 * @apiSuccess {Integer} id ID of the shop Item.
 * @apiSuccess {Integer} campaign_id Parent Campaign's ID.
 * @apiSuccess {String} title The title of the shop item.
 * @apiSuccess {String} description The description of the shop item.
 * @apiSuccess {Integer} unit_price The unit_price of the shop item.
 * @apiSuccess {JSON} meta A JSON payload of any extra meta data.
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *     "id": 1,
 *     "campaign_id": 1,
 *     "title": "Code Network T-Shirt",
 *     "description": "# Cool kids\n Ever wanted to be cool? Buy a shirt!",
 *     "unit_price": 2000,
 *     "meta": "{\"sizes\":[\"S\",\"M\",\"L\",\"XL\"]}"
 *   }
 */
router.get('/:id',
  (req, res) => {
    const { input, response } = adapter.readOneExpress(req, res);
    interactor.readOne(input, response);
  },
);

/**
 * @api {put} /shopItem/:id Update a ShopItem
 * @apiName ShopItemUpdate
 * @apiGroup ShopItems
 *
 * @apiParam (Path Parameter) {Integer} id ID of the shop Item.
 * @apiParam (Parameters) {Integer} [campaign_id] The parent Campaign's ID
 * @apiParam (Parameters) {String} title The title of the shop item.
 * @apiParam (Parameters) {String} description The description of the shop item.
 * @apiParam (Parameters) {Integer} unit_price The unit_price of the shop item.
 * @apiParam (Parameters) {JSON} meta A JSON payload of any extra meta data.
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
 *     "id": 1,
 *     "campaign_id": 1,
 *     "title": "Code Network T-Shirt",
 *     "description": "# Cool kids\n Ever wanted to be cool? Buy a shirt!",
 *     "unit_price": 4000,
 *     "meta": "{\"sizes\":[\"S\",\"M\",\"L\",\"XL\"]}"
 *   }
 */
router.put('/:id',
  (req, res) => {
    const { input, response } = adapter.updateOneExpress(req, res);
    interactor.updateOne(input, response);
  },
);

/**
 * @api {delete} /shopItem/:id Delete a ShopItem
 * @apiName ShopItemDelete
 * @apiGroup ShopItems
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
    const { input, response } = adapter.deleteOneExpress(req, res);
    interactor.deleteOne(input, response);
  },
);

export default router;
