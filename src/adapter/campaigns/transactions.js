function generateCampaignInvoice(req, res) {
  return {
    input: {
      campaignId: req.params.id,
      buyerEmail: req.body.buyerEmail,
      buyerIdentity: req.body.buyerIdentity,
      quantity: req.body.quantity,
      source: req.body.source,
    },
    response: {
      onSuccess: (id, email) => {
        res.json({
          msg: 'Successfully created transaction',
          email,
          id,
        });
      },
      onFail: (status, { msg, id }) => {
        res.status(status).json({
          ok: false,
          id,
          msg,
        });
      },
    },
  };
}

export default {
  generateCampaignInvoice,
};
