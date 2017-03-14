function getAllExpress(res) {
  return {
    input: {},
    response: {
      onSuccess: (shopItems) => {
        res.json(shopItems);
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

function readOneExpress(req, res) {
  return {
    input: {
      id: req.params.id,
    },
    response: {
      onSuccess: (shopItem) => {
        res.json(shopItem);
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

function createOneExpress(req, res) {
  return {
    input: {
      campaign_id: req.body.campaign_id,
      title: req.body.title,
      description: req.body.description,
      unit_price: req.body.unit_price,
      meta: req.body.meta,
    },
    response: {
      onSuccess: (shopItem) => {
        res.json(shopItem);
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

function updateOneExpress(req, res) {
  return {
    input: {
      id: req.params.id,
      campaign_id: req.body.campaign_id,
      title: req.body.title,
      description: req.body.description,
      unit_price: req.body.unit_price,
      meta: req.body.meta,
    },
    response: {
      onSuccess: (shopItem) => {
        res.json(shopItem);
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

function deleteOneExpress(req, res) {
  return {
    input: {
      id: req.params.id,
    },
    response: {
      onSuccess: () => {
        res.json({ msg: 'Successfully Deleted shopItem' });
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
  getAllExpress,
  readOneExpress,
  createOneExpress,
  updateOneExpress,
  deleteOneExpress,
};
