import superAgent from 'superagent';
import dotenv from 'dotenv';
import translateError from './translate-error';

dotenv.config();

if (process.env.SLACK_URL == null) {
  throw new Error('Missing SLACK_URL from .env !');
}

if (process.env.SLACK_TOKEN == null) {
  throw new Error('Missing SLACK_TOKEN from .env !');
}

const SLACK_URL = process.env.SLACK_URL;
const SLACK_TOKEN = process.env.SLACK_TOKEN;

export async function inviteEmailToSlack(email) {
  const invitation = await superAgent
    .post(`https://${SLACK_URL}/api/users.admin.invite`)
    .accept('json')
    .type('form')
    .send({
      email,
      token: SLACK_TOKEN,
      set_active: true,
    })
    .catch(translateError('superAgent Error'));

  if (!invitation.body.ok) {
    switch (invitation.body.error) {
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
};
