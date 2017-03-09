import dotenv from 'dotenv';

dotenv.config();

const email = process.env.EMAIL || 'team@codenetwork.co';
const identity = process.env.IDENTITY || 'CodeNetwork';

export default {
  EMAIL: email,
  IDENTITY: identity,
};
