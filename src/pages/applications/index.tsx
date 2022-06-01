import * as React from 'react'
import { getSession } from 'next-auth/react'
import AuthNav from '@/components/navbar/AuthNav'
import SearchContainer from '@/components/applications/SearchContainer'
import Card from '@/components/applications/Card'
import { ApplicationProps } from '@/types/step'
import TwitchIcon from '@/components/icons/TwitchIcon'
import TwitterIcon from '@/components/icons/TwitterIcon'
import GoogleIcon from '@/components/icons/GoogleIcon'
import { GetServerSideProps } from 'next'

const ApplicationsIndexPage = () => {
  const [isNotifcations] = React.useState(true)
  const [apps] = React.useState<ApplicationProps[]>([
    {
      company: 'Twitch',
      title: 'DevOps Engineer',
      icon: <TwitchIcon />,
      location: 'London',
    },
    {
      company: 'Twitter',
      title: 'Product Designer',
      icon: <TwitterIcon />,
      location: 'San Diego',
    },
    {
      company: 'Google',
      title: 'Full Stack Developer',
      icon: <GoogleIcon width="50" />,
      location: 'California',
    },
    {
      company: 'Twitter',
      title: 'Frontend Engineer',
      icon: <TwitterIcon />,
      location: 'San Francisco',
    },
  ])
  return (
    <div className="min-h-screen bg-neutral-800">
      <AuthNav />
      <SearchContainer />
      {!isNotifcations ? (
        <div className="container mx-auto flex max-w-[1470px] flex-wrap rounded-xl bg-neutral-700 py-6 px-12 text-sm text-neutral-400">
          No new application accepted notification.
        </div>
      ) : (
        <div className="container mx-auto">
          <div className="mx-8 mt-3">
            <h1 className="mb-2 font-semibold text-neutral-100">
              Accepted Applications
            </h1>
            <p className="text-sm text-neutral-400">
              Based on your priority , check the status of your application.
            </p>
          </div>
          <div className="mx-8 mt-12 flex flex-wrap space-x-6 overflow-hidden">
            {apps.map((e, index) => (
              <Card {...e} key={index} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ApplicationsIndexPage

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
