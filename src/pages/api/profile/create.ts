import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import prisma from '@/lib/prisma'
import bcrypt from 'bcrypt'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = getSession({ req })
  if (!session) {
    return res.status(404).json({
      status: 404,
      message: 'Not Found',
    })
  }
  const { username, password } = req.body
  const salt = await bcrypt.genSalt(6)
  const hashedPassword = await bcrypt.hash(password, salt)
  console.log(`hashed password : ${hashedPassword}`)
  const result = await prisma.user.update({
    data: { username, password: hashedPassword },
    where: { email: (await session).user.email },
  })
  res.status(200).json(result)
}
