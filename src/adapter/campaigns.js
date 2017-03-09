function getAllCampaignsExpress(res) {
  return {
    input: {},
    response: {
      onSuccess: (campaigns) => {
        res.json(campaigns);
      },
      onFail: (status, { msg }) => {
        res.status(status).json({
          ok: false,
          msg,
        });
      },
    },
  };
}

function readOneCampaignExpress(req, res) {
  return {
    input: {
      email: req.param.id,
    },
    response: {
      onSuccess: (campaign) => {
        res.json(campaign);
      },
      onFail: (status, { msg }) => {
        res.status(status).json({
          ok: false,
          msg,
        });
      },
    },
  };
}

function createOneCampaignExpress(req, res) {
  return {
    input: {
      start: req.body.start,
      end: req.body.end,
      goal: req.body.goal,
    },
    response: {
      onSuccess: (campaign) => {
        res.json(campaign);
      },
      onFail: (status, { msg }) => {
        res.status(status).json({
          ok: false,
          msg,
        });
      },
    },
  };
}

function updateOneCampaignExpress(req, res) {
  return {
    input: {
      id: req.param.id,
      start: req.body.start,
      end: req.body.end,
      goal: req.body.goal,
    },
    response: {
      onSuccess: (campaign) => {
        res.json(campaign);
      },
      onFail: (status, { msg }) => {
        res.status(status).json({
          ok: false,
          msg,
        });
      },
    },
  };
}

function deleteOneCampaignExpress(req, res) {
  return {
    input: {
      id: req.param.id,
      start: req.body.start,
      end: req.body.end,
      goal: req.body.goal,
    },
    response: {
      onSuccess: (campaign) => {
        res.json(campaign);
      },
      onFail: (status, { msg }) => {
        res.status(status).json({
          ok: false,
          msg,
        });
      },
    },
  };
}

export default {
  getAllCampaignsExpress,
  readOneCampaignExpress,
  createOneCampaignExpress,
  updateOneCampaignExpress,
  deleteOneCampaignExpress,
};
