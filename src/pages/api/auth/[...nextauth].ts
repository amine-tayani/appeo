import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import IndeedProvider from '@/services/providers/indeed'

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
    IndeedProvider({
      clientId: process.env.INDEED_CLIENT_ID,
      clientSecret: process.env.INDEED_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
})
