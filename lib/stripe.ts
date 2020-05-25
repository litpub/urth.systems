import Stripe from 'stripe';

// @TODO API version
export const stripe = new Stripe('sk_test_uygTMEeN0Lfg6HytVTLAo8V300TEgfQPgV', { apiVersion: '2020-03-02' });

export async function findCustomerByEmail(email: string) {
  const customers = await stripe.customers.list({ email })

  return customers.data[0]
}

export async function billingPortalForCustomer(customer: string) {
  const session = await stripe.billingPortal.sessions.create({ customer })

  return session
}