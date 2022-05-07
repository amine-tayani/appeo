import { Transition } from '@headlessui/react'
import * as React from 'react'
import LogoIcon from '../icons/LogoIcon'
import NavPopover from './NavPopover'

const Navbar: React.FunctionComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <nav className="mt-4 px-2 py-2.5 ">
      <div className="container mx-auto  flex flex-wrap items-center justify-between">
        <div className="ml-8">
          <a href="/" className="text-3xl font-bold text-white ">
            <LogoIcon />
          </a>
        </div>
        <div className="flex md:order-2">
          <div className="mr-12 hidden items-center space-x-10 md:flex ">
            <button
              type="button"
              className="rounded-lg bg-blue-600 px-8 py-3 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none"
            >
              Start Free
            </button>
          </div>
          <button
            aria-label="Open Menu"
            onClick={() => {
              setIsMenuOpen(true)
            }}
            className="inline-flex items-center rounded-lg py-3 px-4 text-sm text-neutral-500 hover:text-neutral-100 focus:outline-none md:hidden"
          >
            {/* button to open the mobile menu  */}
            <svg
              className="h-8 w-8 rotate-180 transform "
              strokeWidth={1.4}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 5H11"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 12H16"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 19H21"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <Transition
            className="fixed inset-0 z-50 overflow-hidden "
            show={isMenuOpen}
            enter="transition ease-out duration-500 transform "
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-out duration-600 transform"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="lg:hidden">
              <Transition.Child
                enter="transition duration-500 ease-in-out"
                enterFrom="transform translate-y-full"
                enterTo="transform translate-y-0"
                leave="transition duration-500 ease-in-out"
                leaveFrom="transform translate-y-0"
                leaveTo="transform translate-y-full"
                as="div"
                className="absolute max-w-full rounded bg-neutral-900 "
              >
                <div className="mr-5 ml-9 mt-6 flex items-center justify-between">
                  <a href="/" className="text-3xl font-bold text-white ">
                    <LogoIcon />
                  </a>
                  <button
                    aria-label="Close Menu"
                    className="mt-2 mr-1 text-neutral-500 hover:text-neutral-100 focus:outline-none md:hidden"
                    onClick={() => {
                      setIsMenuOpen(false)
                    }}
                  >
                    <svg
                      className=" h-12 w-12"
                      strokeWidth={1.4}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <nav className="mx-2 h-screen w-screen">
                  <ul className="mx-8 mt-20 space-y-10 text-white">
                    <li>
                      <a
                        href="/"
                        className="text-3xl font-bold tracking-wide hover:text-blue-500  "
                      >
                        Features
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="text-3xl font-bold tracking-wide hover:text-blue-500  "
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="text-3xl font-bold tracking-wide hover:text-blue-500  "
                      >
                        Support
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        title="About us"
                        className="text-3xl font-bold tracking-wide hover:text-blue-500  "
                      >
                        Pricing
                      </a>
                    </li>
                    <button className="w-52 rounded-lg bg-blue-600 px-4 py-4 text-xl font-medium text-white hover:bg-blue-500 focus:outline-none ">
                      Sign up for Free
                    </button>
                  </ul>
                </nav>
              </Transition.Child>
            </div>
          </Transition>
          {/* button to close the mobile menu  */}
        </div>
        <div className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto">
          <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-16 ">
            <li>
              <NavPopover />
            </li>
            <li>
              <a
                href="#"
                className=" font-medium text-neutral-400 hover:text-blue-500 "
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" font-medium text-neutral-400 hover:text-blue-500 "
              >
                Support
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" font-medium text-neutral-400 hover:text-blue-500 "
              >
                Pricing
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
