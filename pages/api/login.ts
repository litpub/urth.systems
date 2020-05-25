import { findCustomerByEmail, stripe, billingPortalForCustomer } from '../../lib/stripe';
import jwt from 'jsonwebtoken';
import { send } from '../../lib/sendgrid';
import { NextApiRequest, NextApiResponse } from 'next'


function loginMessage(token: string) {
  return `We received a request for access to your account. If you did not request access, please let us know.

  This link will be valid for 1 hour: <a href="https://www.urth.systems/api/billing?token=${token}">Login</a>`
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const customer = await findCustomerByEmail(req.body.email)

  if (customer) {
    const token = jwt.sign({ id: customer.id }, process.env.JWT_SECRET, { expiresIn: '1h' })

    await send(customer.email, 'Login', loginMessage(token))

    res.statusCode = 200
    res.end(JSON.stringify({}));
  } else {
    res.statusCode = 404
    res.end(JSON.stringify({ error: "No customer record matching that address could be found."}))
  }
}