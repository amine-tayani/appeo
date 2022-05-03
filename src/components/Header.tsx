import * as React from 'react'

const BodyStyles = [
  'flex flex-col',
  'items-center justify-center',
  ' font-inter',
].join(' ')

const Header: React.FunctionComponent = () => {
  return (
    <div className={BodyStyles}>
      <div className="relative mt-24 max-w-5xl text-center ">
        <h1 className="text-5xl font-bold  leading-tight text-white md:text-[80px] md:leading-[86px]">
          Organize, Track and Get Reminder of your job applications
        </h1>
      </div>
      <div className="max-w-3xl text-center">
        <p className="mt-12 text-xl text-neutral-400 ">
          Make your job search less stressful with the help of smart and
          specialized job application tracker app
        </p>
      </div>
      <button className="mt-12 rounded-lg bg-blue-600 px-12 py-4 font-medium text-white hover:bg-blue-500 focus:outline-none ">
        Sign up for Free
      </button>
      <div className="absolute -left-72 hidden h-[500px] w-[500px] rounded-full border border-purple-400 lg:block" />
      <div className="absolute -right-72 hidden h-[500px] w-[500px] rounded-full border border-blue-400  lg:block" />
    </div>
  )
}

export default Header
