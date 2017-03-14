import Campaign from '../../models/campaign';
import Order from '../../models/order';
import OrderDetail from '../../models/order-detail';
import Identity from '../../lib/identity';
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

    // const order = await new data.Order({
    //   seller_email: Identity.EMAIL,
    //   seller_identity: Identity.IDENTITY,
    //   buyer_email: input.buyerEmail,
    //   buyer_identity: input.buyerIdentity,
    //   approved: false,
    // });
    //
    // console.log(order.attributes);
    //
    // console.log(shopItem.attributes);
    //
    // const orderDetail = await new data.OrderDetail({
    //
    // });

    response.onSuccess();
  } catch (e) {
    response.onFail(500, { msg: e.message });
  }
}

export default {
  purchaseOneCampaign,
};
