import Campaign from '../../models/campaign';
import Order from '../../models/order';
import OrderDetail from '../../models/order-detail';
import Identity from '../../lib/identity';
import LibStripe from '../../lib/stripe';
import ShopItem from '../../models/shop-item';

async function purchaseOneCampaign(
  input,
  response,
  data = {
    Campaign,
    Order,
    OrderDetail,
    ShopItem,
  },
) {
  try {
    const shopItem = await data.ShopItem.where({ campaign_id: input.campaignId }).fetch();
    if (shopItem == null) {
      return response.onFail(500, { msg: 'Default shop item has not been listed for this campaign.' });
    }

    const order = await new data.Order({
      seller_email: Identity.EMAIL,
      seller_identity: Identity.IDENTITY,
      buyer_email: input.buyerEmail,
      buyer_identity: input.buyerIdentity,
      approved: false,
    }).save(null, { method: 'insert' });

    const orderDetail = await new data.OrderDetail({
      order_id: order.attributes.id,
      shop_item_id: shopItem.attributes.id,
      quantity: input.quantity,
    }).save(null, { method: 'insert' });

    const totalPrice = shopItem.attributes.unit_price * orderDetail.attributes.quantity;

    const charge = LibStripe.createChargeObject({
      amount: totalPrice,
      source: input.source,
      description: `Invoice #${order.id} from CodeNetwork`,
      metadata: {
        email: input.buyerEmail,
        identity: input.buyerIdentity,
      },
    });

    await LibStripe.createStripeTransaction(charge);

    await order.save({ approved: true }, { patch: true });

    response.onSuccess(order.attributes.id, input.buyerEmail);
  } catch (e) {
    response.onFail(500, { msg: e.message });
  }
}

export default {
  purchaseOneCampaign,
};
