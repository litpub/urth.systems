import { billingPortalForCustomer } from '../../lib/stripe';
import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { token },
  } = req

  let decoded;

  try {
    decoded = jwt.verify(String(token), process.env.JWT_SECRET)
  } catch(_err) {
    res.statusCode = 403
    res.end("Your login link is invalid or it expired");
    return;
  }

  const session = await billingPortalForCustomer(decoded.id)

  res.statusCode = 302
  res.setHeader('Location', session.url)
  res.end()
}