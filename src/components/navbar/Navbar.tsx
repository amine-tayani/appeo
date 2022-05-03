import * as React from 'react'
import NavPopover from './NavPopover'

const Navbar: React.FunctionComponent = () => {
  return (
    <nav className="mt-4 px-2 py-2.5 ">
      <div className="container mx-auto  flex flex-wrap items-center justify-between">
        <div className="ml-12 flex items-baseline">
          <div className="mr-[2px] mb-1.5 h-3 w-3 rounded-full bg-white" />
          <a href="/" className="text-3xl font-bold text-white ">
            <h1>trace</h1>
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
            data-collapse-toggle="mobile-menu-4"
            type="button"
            className="inline-flex items-center rounded-lg py-3 px-12 text-sm text-neutral-500 hover:text-neutral-100 focus:outline-none md:hidden"
            aria-controls="mobile-menu-4"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-10 w-10"
              strokeWidth={1.4}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 5H21"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 12H21"
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

            <svg
              className="hidden h-10 w-10"
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
        <div
          className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
          id="mobile-menu-4"
        >
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
