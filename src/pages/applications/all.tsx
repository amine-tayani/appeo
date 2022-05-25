import * as React from 'react'
import AuthNav from '@/components/navbar/AuthNav'
import List from '@/components/applications/List'
import TwitchIcon from '@/components/icons/TwitchIcon'
import GoogleIcon from '@/components/icons/GoogleIcon'
import TwitterIcon from '@/components/icons/TwitterIcon'
import { ApplicationProps } from '@/types/step'

const ApplicationsListPage = () => {
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
      icon: <GoogleIcon />,
      location: 'California',
    },
  ])
  return (
    <div className="min-h-screen bg-neutral-800">
      <AuthNav />
      <div className="container mx-auto">
        <div className="mx-20 my-8">
          <h1 className="mb-2 text-xl font-semibold text-neutral-100">
            Applications
          </h1>
          <div className="mb-8 mt-4 flex space-x-3">
            <button className="rounded-lg bg-neutral-700 py-2  px-4 text-sm text-neutral-200 hover:bg-neutral-600">
              Application status
            </button>
            <button className="rounded-lg bg-neutral-700 py-2 px-4 text-sm text-neutral-200 hover:bg-neutral-600">
              High Priority
            </button>
            <button className="rounded-lg bg-neutral-700 py-2  px-4 text-sm text-neutral-200 hover:bg-neutral-600">
              Declined
            </button>
          </div>
          <div className="flex flex-col ">
            {apps.map((e) => (
              <List {...e} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApplicationsListPage
