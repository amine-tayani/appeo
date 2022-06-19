import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import prisma from '@/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = getSession({ req })

  const AuthenticatedUser = await prisma.user.findUnique({
    where: {
      email: (await session).user?.email,
    },
    include: { Account: true, Session: true },
  })
  if (AuthenticatedUser)
    res.status(200).json(JSON.stringify(AuthenticatedUser, null, 2))
}
