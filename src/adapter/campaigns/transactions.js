function generateCampaignInvoice(req, res) {
  return {
    input: {
      campaignId: req.params.id,
      buyerEmail: req.buyerEmail,
      buyerIdentity: req.buyerIdentity,
    },
    response: {
      onSuccess: () => {
        res.json({ msg: 'Successfully Deleted Campaign' });
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
