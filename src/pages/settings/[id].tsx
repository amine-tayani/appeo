import * as React from 'react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { getSession, useSession } from 'next-auth/react'
import AuthNav from '@/components/navbar/AuthNav'
import WindowsIcon from '@/components/icons/WindowsIcon'

const Profile = () => {
  const s = useSession()

  return (
    <React.Fragment>
      <Head>
        <title>Settings</title>
      </Head>
      <div className="min-h-screen bg-neutral-800">
        <AuthNav />
        <div className="container flex max-w-screen-2xl justify-center">
          <div className=" w-1/3">
            <h1 className="mb-1 text-left text-2xl font-semibold text-neutral-100">
              Security & Login
            </h1>
            <p className="mb-10 text-sm text-neutral-400">
              Manage your setting
            </p>

            <div className="my-4 flex flex-col space-y-2">
              <label
                className="text-sm text-neutral-400"
                htmlFor="old-password"
              >
                Old password
              </label>
              <input
                type="password"
                id="old-password"
                className="rounded-lg bg-neutral-700 py-2 pl-6 text-sm text-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="my-4 flex flex-col space-y-2">
              <label
                className="text-sm text-neutral-400"
                htmlFor="new-password"
              >
                New password
              </label>
              <input
                type="password"
                id="new-password"
                className="rounded-lg bg-neutral-700 py-2 pl-6 text-sm text-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="my-4 flex flex-col space-y-2">
              <label
                className="text-sm text-neutral-400"
                htmlFor="confirm-new-password"
              >
                Confirm new password
              </label>
              <input
                type="password"
                id="confirm-new-password"
                className="rounded-lg bg-neutral-700 py-2 pl-6 text-sm text-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className=" rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-neutral-200 hover:bg-blue-500 focus:outline-none">
              Update
            </button>

            <div className="py-8 text-sm text-neutral-200">
              <p className="mb-8 mt-4 text-sm text-neutral-400">
                Where You're Logged In
              </p>
              <div className=" mb-2 flex items-center">
                <WindowsIcon />
                <span className="ml-3">
                  Windows - Santa Monica, CA, United States
                </span>
              </div>
              <p className="mx-9 text-neutral-400">
                Chrome - <span className="text-green-400">Active now</span>
              </p>
            </div>
          </div>
        </div>
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

  return {
    props: { session },
  }
}

export default Profile
