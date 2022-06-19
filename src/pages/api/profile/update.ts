import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import prisma from '@/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = getSession({ req })
  const { username } = req.body
  if (!session) {
    res.status(401)
  }
  if (username === null) return res.status(404).send('invalid Usename')
  const result = await prisma.user.update({
    data: { username },
    where: {
      id: session?.userId,
    },
  })
  res.status(200).json(result)
}
