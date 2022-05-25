import * as React from 'react'
import GoogleIcon from '../icons/GoogleIcon'
import TwitchIcon from '../icons/TwitchIcon'
import TwitterIcon from '../icons/TwitterIcon'
import Container from './Container'

const ListContainer: React.FunctionComponent = () => {
  return (
    <div className="container mx-auto">
      <div className="mx-20 my-8">
        <h1 className="mb-2 font-semibold text-neutral-100">
          Accepted Applications
        </h1>
        <p className="text-sm text-neutral-400">
          Based on your priority , check the status of your application.
        </p>
      </div>
      <Container
        company="Twitter"
        icon={<TwitterIcon />}
        title="Product Designer"
        location="San Diego"
      />
      <Container
        company="Google"
        icon={<GoogleIcon />}
        title="Frontend Engineer"
        location="Austin"
      />
      <Container
        company="Twitch"
        icon={<TwitchIcon />}
        title="DevOps Engineer"
        location="London"
      />
      <div className="mt-10 text-center text-sm font-medium text-blue-500 hover:text-blue-600">
        <button>Show all applications</button>
      </div>
    </div>
  )
}
export default ListContainer
