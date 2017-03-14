import Stripe from 'stripe';
import dotenv from 'dotenv';

dotenv.config();

if (process.env.STRIPE_KEY == null) {
  throw new Error('Missing STRIPE_KEY from .env !');
}

const stripe = new Stripe(process.env.STRIPE_KEY);

function createChargeObject({
  amount,
  currency = 'AUD',
  source,
  description,
  metadata,
}) {
  return {
    amount,
    currency,
    source,
    description,
    metadata,
  };
}

async function createStripeTransaction(charge, stripeInstance = stripe) {
  return stripeInstance.charges.create(charge);
}

export default {
  createChargeObject,
  createStripeTransaction,
};
