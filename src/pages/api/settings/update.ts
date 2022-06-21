import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import prisma from '@/lib/prisma'
import bcrypt from 'bcrypt'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = getSession({ req })
  const { oldPassword, newPassword, confirmPassword } = req.body
  if (!session) {
    res.status(404).json({ message: 'unauthenticated' })
  }
  if (!oldPassword || !newPassword || !confirmPassword)
    return res.status(401).json({ message: 'fill in the required fields' })

  const activeUser = await prisma.user.findUnique({
    where: { email: (await session).user.email },
  })

  if (newPassword !== confirmPassword) {
    return res
      .status(401)
      .json({
        message: 'the new password does not match password confirmation',
      })
  }

  const isPasswordMatchOld = await bcrypt.compare(
    oldPassword,
    activeUser.password
  )

  if (!isPasswordMatchOld) {
    return res
      .status(404)
      .json({ message: 'old password does not match the one in the db' })
  }

  const salt = await bcrypt.genSalt(6)
  const hashedPassword = await bcrypt.hash(newPassword, salt)

  const result = await prisma.user.update({
    data: { password: hashedPassword },
    where: {
      email: (await session).user.email,
    },
  })
  res.status(200).json(result)
}
