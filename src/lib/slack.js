import superAgent from 'superagent';
import translateError from './translate-error';

const SLACK_URL = process.env.SLACK_URL || '';
const SLACK_TOKEN = process.env.SLACK_TOKEN || '';

export async function inviteEmailToSlack(email) {
  const invitation = await superAgent
    .post(`https://${SLACK_URL}/api/users.admin.invite`)
    .accept('json')
    .type('form')
    .send({
      email: email,
      token: SLACK_TOKEN,
      set_active: true,
    })
    .catch(translateError('superAgent Error'));

  if(!invitation.body.ok) {
    switch(invitation.body.error) {
      case 'already_in_team':
        throw new Error('Already in team');
      case 'invalid_email':
        throw new Error('Invalid Email');
      default:
        throw new Error('Unknown Error');
    }
  }

  return true;
}

export default {
  inviteEmailToSlack,
}
