import * as React from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { formatDistance, formatRelative, subDays } from 'date-fns'
import { getSession, useSession } from 'next-auth/react'
import AuthNav from '@/components/navbar/AuthNav'
import CancelIcon from '@/components/icons/CancelIcon'
import CheckIcon from '@/components/icons/CheckIcon'
import Clsx from 'clsx'

const Dashboard = () => {
  const activities = [
    {
      icon: <CheckIcon h="16" w="16" sw={2} color="white" />,
      title: 'You applied for the full stack web developer',
      time: formatRelative(subDays(new Date(), 3), new Date()),
      company: '@Twitch',
    },
    {
      icon: <CancelIcon h="16" w="16" sw={2} color="white" />,
      title: 'You got rejected from the Frontend Engineer position ',
      time: formatDistance(subDays(new Date(), 8), new Date(), {
        addSuffix: true,
      }),
      company: '@Airbnb',
    },
    {
      icon: <CheckIcon h="16" w="16" sw={2} color="white" />,
      title: 'You applied for the Mechanical Engineer position ',
      time: formatRelative(subDays(new Date(), 0), new Date()),
      company: '@Tesla',
    },
  ]

  const s = useSession()

  return (
    <React.Fragment>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className="min-h-screen bg-neutral-800">
        <AuthNav />
        <div className="container mx-auto -mt-16 flex max-w-screen-md flex-col justify-center">
          <h1 className="mb-1 text-left text-2xl font-semibold text-neutral-100">
            Dashboard
          </h1>
          <p className="mb-10 text-sm text-neutral-400">Check the analytics</p>
          <div className="grid grid-cols-12 gap-x-6">
            <div className=" flex flex-col rounded-xl bg-neutral-700 px-4 sm:col-span-6 xl:col-span-4">
              <div className="p-8">
                <h2 className="mb-2 text-neutral-400">Job Applications</h2>
                <div className="mr-2 text-3xl font-semibold text-neutral-100">
                  780
                </div>
                <div className="mt-3 text-xs font-medium text-neutral-400">
                  {formatDistance(subDays(new Date(), 3), new Date(), {
                    addSuffix: true,
                  })}
                </div>
              </div>
            </div>
            <div className=" flex flex-col rounded-xl bg-neutral-700 sm:col-span-6 xl:col-span-4">
              <div className="p-8">
                <h2 className="mb-2 text-neutral-400">Interviews</h2>
                <div className="mr-2 text-3xl font-semibold text-neutral-100">
                  24
                </div>
                <div className="mt-3 text-xs font-medium text-neutral-400">
                  {formatDistance(subDays(new Date(), 1), new Date(), {
                    addSuffix: true,
                  })}
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-xl bg-neutral-700 sm:col-span-6 xl:col-span-4">
              <div className="p-8">
                <h2 className="mb-2 text-neutral-400">Accepted</h2>
                <div className="mr-2 text-3xl font-semibold text-neutral-100">
                  7
                </div>
                <div className="mt-3 text-xs font-medium text-neutral-400">
                  {formatDistance(subDays(new Date(), 0), new Date(), {
                    addSuffix: true,
                  })}
                </div>
              </div>
            </div>
            <div className="mt-4 w-fit rounded-sm">
              <header className="py-4">
                <h2 className="text-2xl font-semibold text-neutral-100">
                  Activity
                </h2>
                <p className="mb-4 mt-1 text-sm text-neutral-400">
                  Check your latest activity
                </p>
              </header>
              <div className="w-[770px] rounded-xl bg-neutral-700 p-4">
                {activities.map((activity, id) => {
                  return (
                    <ol
                      key={id}
                      className="relative mx-12 mt-4 border-l border-neutral-500"
                    >
                      <li className="mb-4 ml-8 py-1">
                        <div className="absolute -left-1.5 -mt-1 -ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-neutral-500">
                          {activity.icon}
                        </div>
                        <h3 className=" mb-1 text-sm text-neutral-200">
                          {activity.title}{' '}
                          <span className="text-blue-400">
                            {activity.company}
                          </span>
                        </h3>
                        <time className="mb-1 text-sm leading-none text-neutral-400">
                          {activity.time}
                        </time>
                      </li>
                    </ol>
                  )
                })}
              </div>
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

export default Dashboard
