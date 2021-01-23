import Stripe from 'stripe';

// @TODO API version
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: '2020-08-27' });

export async function findCustomerByEmail(email: string) {
  const customers = await stripe.customers.list({ email })

  return customers.data[0]
}

export async function billingPortalForCustomer(customer: string) {
  const session = await stripe.billingPortal.sessions.create({ customer })

  return session
}

export async function createSession(patp: string) {
  const session = await stripe.checkout.sessions.create({
    line_items: [{
      price: process.env.STRIPE_PLAN,
      quantity: 1
    }],
    subscription_data: {
      metadata: {
        patp
      }
    },
    mode: 'subscription',
    payment_method_types: ["card"],
    success_url: 'https://www.urth.systems/success?session_id={CHECKOUT_SESSION_ID}',
    cancel_url: 'https://www.urth.systems/',
  });

  return session
}
