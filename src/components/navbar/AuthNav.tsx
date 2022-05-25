import * as React from 'react'
import { useSession, signOut } from 'next-auth/react'
import { Popover } from '@headlessui/react'
import { motion } from 'framer-motion'
import LogoIcon from '../icons/LogoIcon'

const AuthNav = () => {
  const { data: session } = useSession()

  const handleSignOutAction = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault()
    signOut({ callbackUrl: `${window.location.origin}/login` })
  }

  return (
    <>
      <nav className=" px-2 py-7">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="ml-10 mt-4 md:mt-0 md:ml-8">
            <a href="/" className="text-3xl font-bold text-white ">
              <LogoIcon />
            </a>
          </div>
          <div className="mr-12">
            <Popover className="relative">
              <Popover.Button>
                {session ? (
                  <img
                    className="h-10 w-10 cursor-pointer rounded-full"
                    src={session.user.image}
                  />
                ) : (
                  <svg
                    className="h-12 w-12"
                    viewBox="0 0 24 24"
                    fill="#525252"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.271 18.3457C4.271 18.3457 6.50002 15.5 12 15.5C17.5 15.5 19.7291 18.3457 19.7291 18.3457"
                      stroke="#a3a3a3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z"
                      stroke="#a3a3a3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </Popover.Button>

              <Popover.Panel className="mt-2text-white absolute right-0 z-10">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: {
                      type: 'spring',
                      stiffness: 200,
                      damping: 20,
                    },
                  }}
                  className=" w-[200px] overflow-hidden rounded-lg bg-neutral-700 p-4"
                >
                  {session && (
                    <div className="mx-3 flex items-center space-x-4">
                      <img
                        className=" h-10 w-10 cursor-pointer rounded-full"
                        src={session.user.image}
                      />
                      <span className=" font-medium text-white">
                        {session.user.name}
                      </span>
                    </div>
                  )}

                  <ul className="space-y-2 py-3" aria-labelledby="dropdown">
                    <li>
                      <a
                        href="#"
                        className="block rounded-lg py-2 px-4 text-sm text-neutral-200 hover:bg-neutral-600"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block rounded-lg py-2 px-4 text-sm text-neutral-200 hover:bg-neutral-600"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block rounded-lg py-2 px-4 text-sm text-neutral-200 hover:bg-neutral-600"
                      >
                        Earnings
                      </a>
                    </li>
                    {session ? (
                      <li>
                        <button
                          onClick={handleSignOutAction}
                          className="w-full rounded-lg py-2 px-4 text-left text-sm text-neutral-200 hover:bg-neutral-600"
                        >
                          Sign out
                        </button>
                      </li>
                    ) : (
                      <li>
                        <a
                          href="/login"
                          className="block rounded-lg py-2 px-4 text-sm text-neutral-200 hover:bg-neutral-600"
                        >
                          Sign in
                        </a>
                      </li>
                    )}
                  </ul>
                </motion.div>
              </Popover.Panel>
            </Popover>
          </div>
        </div>
      </nav>
    </>
  )
}

export default AuthNav
