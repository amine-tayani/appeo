import * as React from 'react'
import { useSession, signOut } from 'next-auth/react'
import { Popover } from '@headlessui/react'
import { motion } from 'framer-motion'
import LogoIcon from '../icons/LogoIcon'
import UserAvatarIcon from '../icons/UserAvatarIcon'
import Link from 'next/link'

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
            <Link href="/">
              <a className="text-3xl font-bold text-white ">
                <LogoIcon />
              </a>
            </Link>
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

              <Popover.Panel className="absolute right-0 z-20 mt-2 text-white">
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
                  className=" w-[250px] overflow-hidden rounded-lg bg-neutral-700 shadow-xl"
                >
                  {session && (
                    <div className="mx-6 mt-4 flex items-center justify-between space-x-4 py-2 ">
                      <div>
                        <p className="mb-1 text-sm font-semibold capitalize text-neutral-100">
                          {session.user.name}
                        </p>
                        <p className="text-xs text-neutral-300">
                          {session.user.email}
                        </p>
                      </div>
                      <img
                        className=" h-10 w-10 cursor-pointer rounded-full"
                        src={session.user.image}
                      />
                    </div>
                  )}

                  <ul
                    className="mt-4 space-y-1 border-t border-[#4b4a4a] py-3 "
                    aria-labelledby="dropdown"
                  >
                    <li>
                      <Link href={`/profile/${session?.user.name}`}>
                        <a className="mx-4 block rounded-lg py-2 px-4 text-sm text-zinc-300 hover:bg-neutral-600 hover:text-neutral-100">
                          Profile
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href={`/dashboard/${session?.user.name}`}>
                        <a className="mx-4 block rounded-lg py-2 px-4 text-sm text-zinc-300 hover:bg-neutral-600 hover:text-neutral-100">
                          Dashboard
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href={`/settings/${session?.user.name}`}>
                        <a className="mx-4 block rounded-lg py-2 px-4 text-sm text-zinc-300 hover:bg-neutral-600 hover:text-neutral-100">
                          Security & Login
                        </a>
                      </Link>
                    </li>

                    {session ? (
                      <li>
                        <button
                          onClick={handleSignOutAction}
                          className="mx-4 w-[190px] rounded-lg py-2 px-4 text-left text-sm text-zinc-300 hover:bg-neutral-600 hover:text-neutral-100"
                        >
                          Sign out
                        </button>
                      </li>
                    ) : (
                      <li>
                        <Link href="/login">
                          <a className="mx-4 block rounded-lg py-2 px-4 text-sm text-zinc-300 hover:bg-neutral-600 hover:text-neutral-100">
                            Sign in
                          </a>
                        </Link>
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
