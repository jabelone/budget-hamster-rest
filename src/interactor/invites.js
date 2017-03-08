import { inviteEmailToSlack } from '../lib/slack';

export async function inviteSlackEmail(
  input,
  response,
  method = {
    slack: inviteEmailToSlack,
  },
){
  try {
    await inviteEmailToSlack(input.email);
    response.onSuccess({ email: input.email });
  } catch(e) {
    response.onFail(500, { msg: e.message });
  }
}

export default {
  inviteSlackEmail,
}
