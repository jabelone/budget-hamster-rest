export function inviteSlackExpressAdapter(req, res) {
  return {
    input: {
      email: req.body.email,
    },
    response: {
      onSuccess: ({ email: email }) => {
        res.json({
          ok: true,
          msg: 'Email has been invited',
          email,
        });
      },
      onFail: (status, { msg }) => {
        res.status(status).json({
          ok: false,
          msg: msg,
        });
      },
    },
  };
}

export default {
  inviteSlackExpressAdapter,
};