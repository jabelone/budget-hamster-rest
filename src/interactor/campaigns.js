import Campaign from '../models/campaign';

async function getAllCampaigns(
  input,
  response,
  data = {
    Campaign,
  },
) {
  try {
    const campaigns = await data.Campaign.fetchAll();
    response.onSuccess(campaigns);
  } catch (e) {
    response.onFail(500, { msg: e.message });
  }
}

async function readOneCampaign(
  input,
  response,
  data = {
    Campaign,
  },
) {
  try {
    const campaign = await data.Campaign.findWhere({ id: input.id });
    response.onSuccess(campaign);
  } catch (e) {
    response.onFail(500, { msg: e.message });
  }
}

async function createOneCampaign(
  input,
  response,
  data = {
    Campaign,
  },
) {
  try {
    const campaign = await new data.Campaign({
      start: input.start,
      end: input.end,
      goal: input.goal,
    }).save(null, { method: 'insert' });
    response.onSuccess(campaign);
  } catch (e) {
    response.onFail(500, { msg: e.message });
  }
}

async function updateOneCampaign(
  input,
  response,
  data = {
    Campaign,
  },
) {
  try {
    const campaign = await new data.Campaign({
      id: input.id,
      start: input.start,
      end: input.end,
      goal: input.goal,
    }).save(null, { method: 'update' });
    response.onSuccess(campaign);
  } catch (e) {
    response.onFail(500, { msg: e.message });
  }
}

async function deleteOneCampaign(
  input,
  response,
  data = {
    Campaign,
  },
) {
  try {
    const campaign = await new data.Campaign({
      id: input.id,
    }).destroy();
    response.onSuccess(campaign);
  } catch (e) {
    response.onFail(500, { msg: e.message });
  }
}

export default {
  getAllCampaigns,
  readOneCampaign,
  createOneCampaign,
  updateOneCampaign,
  deleteOneCampaign,
};
