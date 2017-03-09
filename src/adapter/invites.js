function inviteSlackExpress(req, res) {
  return {
    input: {
      email: req.body.email,
    },
    response: {
      onSuccess: ({ email }) => {
        res.json({
          ok: true,
          msg: 'Email has been invited',
          email,
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
  inviteSlackExpress,
};
