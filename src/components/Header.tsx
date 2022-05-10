import * as React from 'react'

const BodyStyles = [
  'flex flex-col',
  'items-center justify-center',
  ' font-inter',
].join(' ')

const Header: React.FunctionComponent = () => {
  return (
    <div className={BodyStyles}>
      <div className="  mx-8 mt-24 max-w-2xl text-center sm:mx-12 lg:mx-0 lg:max-w-5xl ">
        <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl  sm:leading-[60px] md:text-6xl md:text-[80px] md:leading-[70px] lg:leading-[86px]">
          Organize, Track and Get Reminder of your job applications
        </h1>
      </div>
      <div className="max-w-xl px-12 text-center sm:px-16 md:max-w-3xl">
        <p className="mt-12 text-neutral-400 sm:text-xl ">
          Manage potential employers and their lists of requirements, as well as
          track the status of your applications.
        </p>
      </div>
      <button className="mt-12 rounded-lg bg-blue-600 px-12 py-4 font-medium text-white hover:bg-blue-500 focus:outline-none ">
        Sign up for Free
      </button>
    </div>
  )
}

export default Header
