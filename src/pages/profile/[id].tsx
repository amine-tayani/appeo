import * as React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import prisma from '@/lib/prisma'
import AuthNav from '@/components/navbar/AuthNav'

const Profile = ({ user }) => {
  const [username, setUsername] = React.useState(user?.username)
  const [email, setEmail] = React.useState(user?.email)
  const [loading, setLoading] = React.useState(false)

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    try {
      const body = { username, email }
      setLoading(true)
      await fetch('/api/profile/update', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      setLoading(false)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <React.Fragment>
      <Head>
        <title>Profile</title>
      </Head>
      <div className="min-h-screen bg-neutral-800">
        <AuthNav />
        <form onSubmit={submitData}>
          <div className="container flex max-w-screen-2xl justify-center">
            <div className="mt-6 w-1/3">
              <h1 className="mb-1 text-left text-2xl font-semibold text-neutral-100">
                Profile
              </h1>
              <p className="mb-10 text-sm text-neutral-400">
                Manage your Appeo profile
              </p>
              <div>
                <p className="mb-4 text-sm font-medium text-neutral-300">
                  Profile picture
                </p>
                <Image
                  src={user?.image}
                  width={120}
                  height={120}
                  alt="profile avatar"
                  className="rounded-full"
                />
              </div>
              <div className="my-4 flex flex-col space-y-2">
                <label className="text-sm text-neutral-400" htmlFor="username">
                  Username
                </label>
                <input
                  id="username"
                  className="rounded-lg bg-neutral-700 py-2 pl-6 text-sm text-neutral-300 placeholder:text-neutral-400 focus:outline-none focus:ring-blue-500"
                  placeholder="username"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value)
                  }}
                />
              </div>
              <div className="my-4 flex flex-col space-y-2">
                <label className="text-sm text-neutral-400" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  className="rounded-lg bg-neutral-700 py-2 pl-6 text-sm text-neutral-300 placeholder:text-neutral-400 focus:outline-none focus:ring-blue-500"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                />
              </div>
              <button
                type="submit"
                disabled={!username || !email}
                className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-sm text-neutral-200 hover:bg-blue-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <svg
                      className="mr-2 inline h-4 w-4 animate-spin text-gray-200 "
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="#1C64F2"
                      />
                    </svg>
                    <span>loading</span>
                  </>
                ) : (
                  'Update'
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  const currentUser = await prisma.user.findUnique({
    where: { email: session.user.email },
  })

  return {
    props: { session, user: currentUser },
  }
}

export default Profile
