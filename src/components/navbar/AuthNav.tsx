import * as React from 'react'
import { useSession, signOut } from 'next-auth/react'
import { Popover } from '@headlessui/react'
import { motion } from 'framer-motion'
import LogoIcon from '../icons/LogoIcon'
import UserAvatarIcon from '../icons/UserAvatarIcon'

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
                  <UserAvatarIcon />
                )}
              </Popover.Button>

              <Popover.Panel className="absolute right-0 z-10 mt-2 text-white">
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
                  className=" w-[220px] overflow-hidden rounded-lg bg-neutral-700 shadow-xl"
                >
                  {session && (
                    <div className="ml-6 mt-4 flex items-center space-x-2">
                      <img
                        className=" h-10 w-10 cursor-pointer rounded-full"
                        src={session.user.image}
                      />
                      <span className=" font-medium capitalize text-neutral-100">
                        {session.user.name}
                      </span>
                    </div>
                  )}

                  <ul
                    className="mt-4 space-y-1 border-t border-[#4b4a4a] py-3"
                    aria-labelledby="dropdown"
                  >
                    <li>
                      <a
                        href="#"
                        className="mx-4 block rounded-lg py-2 px-4 text-sm text-zinc-400 hover:bg-neutral-600 hover:text-neutral-100"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="mx-4 block rounded-lg py-2 px-4 text-sm text-zinc-400 hover:bg-neutral-600 hover:text-neutral-100"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="mx-4 block rounded-lg py-2 px-4 text-sm text-zinc-400 hover:bg-neutral-600 hover:text-neutral-100"
                      >
                        Earnings
                      </a>
                    </li>
                    {session ? (
                      <li>
                        <button
                          onClick={handleSignOutAction}
                          className="mx-4 w-[190px] rounded-lg py-2 px-4 text-left text-sm text-zinc-400 hover:bg-neutral-600 hover:text-neutral-100"
                        >
                          Sign out
                        </button>
                      </li>
                    ) : (
                      <li>
                        <a
                          href="/login"
                          className="mx-4 block rounded-lg py-2 px-4 text-sm text-zinc-400 hover:bg-neutral-600 hover:text-neutral-100"
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
