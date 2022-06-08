import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import prisma from '@/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = getSession({ req })
  if (!session) {
    res.status(401)
  }
  const { username, email } = req.body
  const result = await prisma.user.update({
    data: { username, email },
    where: { email: (await session).user?.email },
  })
  res.status(200).json(result)
}
