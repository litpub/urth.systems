import { createSession } from '../../lib/stripe';
import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    body: { patp },
  } = req

  const session = await createSession(patp)

  res.statusCode = 201
  res.end(JSON.stringify({ sessionId: session.id }))
}