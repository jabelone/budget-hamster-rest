import ShopItem from '../models/shop-item';

async function getAll(
  input,
  response,
  data = {
    ShopItem,
  },
) {
  try {
    const shopItems = await data.ShopItem.fetchAll();
    response.onSuccess(shopItems);
  } catch (e) {
    response.onFail(500, { msg: e.message });
  }
}

async function readOne(
  input,
  response,
  data = {
    ShopItem,
  },
) {
  try {
    const shopItem = await data.ShopItem.where({ id: input.id }).fetch();
    response.onSuccess(shopItem);
  } catch (e) {
    response.onFail(500, { msg: e.message });
  }
}

async function createOne(
  input,
  response,
  data = {
    ShopItem,
  },
) {
  try {
    const shopItem = await new data.ShopItem({
      campaign_id: input.campaign_id,
      title: input.title,
      description: input.description,
      unit_price: input.unit_price,
      meta: JSON.stringify(input.meta),
    }).save(null, { method: 'insert' });
    response.onSuccess(shopItem);
  } catch (e) {
    response.onFail(500, { msg: e.message });
  }
}

async function updateOne(
  input,
  response,
  data = {
    ShopItem,
  },
) {
  try {
    const shopItem = await new data.ShopItem({
      id: input.id,
      campaign_id: input.campaign_id,
      title: input.title,
      description: input.description,
      unit_price: input.unit_price,
      meta: JSON.stringify(input.meta),
    }).save(null, { method: 'update' });
    response.onSuccess(shopItem);
  } catch (e) {
    response.onFail(500, { msg: e.message });
  }
}

async function deleteOne(
  input,
  response,
  data = {
    ShopItem,
  },
) {
  try {
    await new data.ShopItem({
      id: input.id,
    }).destroy();
    response.onSuccess();
  } catch (e) {
    response.onFail(500, { msg: e.message });
  }
}

export default {
  getAll,
  readOne,
  createOne,
  updateOne,
  deleteOne,
};
