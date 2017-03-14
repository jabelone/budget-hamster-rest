import moment from 'moment';
import Campaign from '../../models/campaign';

function parseDate(date) {
  return moment.utc(date).format().valueOf();
}

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
    const campaign = await data.Campaign.where({ id: input.id }).fetch();
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
      start: parseDate(input.start),
      end: parseDate(input.end),
      goal: input.goal,
      title: input.title,
      body: input.body,
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
      start: parseDate(input.start),
      end: parseDate(input.end),
      goal: input.goal,
      title: input.title,
      body: input.body,
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
    await new data.Campaign({
      id: input.id,
    }).destroy();
    response.onSuccess();
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
