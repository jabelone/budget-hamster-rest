export function inviteSlackExpressAdapter(req, res) {
  return {
    input: {
      email: req.body.email,
    },
    response: {
      onSuccess: () => {
        res.json({
          ok: true,
          msg: 'Email has been invited',
        });
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
  inviteSlackExpressAdapter,
};
