import * as React from 'react'
import LogoIcon from './icons/LogoIcon'

const Footer: React.FunctionComponent = () => {
  return (
    <footer>
      <div className="container mx-auto flex flex-col flex-wrap px-5 py-24  lg:flex-row  lg:flex-nowrap lg:items-start">
        <div className="mx-4 w-full flex-shrink-0 text-left md:mx-0 lg:w-1/3 ">
          <a className="flex items-end space-x-1 font-medium text-white md:mx-4 md:mb-10 lg:mx-40 lg:mb-0">
            <LogoIcon />
          </a>
        </div>
        <div className=" mt-10 flex flex-grow flex-wrap text-left lg:mt-0">
          <div className="w-full px-4 md:w-1/2 lg:w-1/5">
            <h2 className="mt-8 mb-10 text-lg font-semibold text-white md:mt-0">
              Product
            </h2>
            <nav className=" list-none space-y-4">
              <li>
                <a className="cursor-pointer text-sm text-neutral-400 hover:text-neutral-200">
                  Pricing
                </a>
              </li>
              <li>
                <a className="cursor-pointer text-sm text-neutral-400 hover:text-neutral-200">
                  Changelog
                </a>
              </li>
              <li>
                <a className="cursor-pointer text-sm text-neutral-400 hover:text-neutral-200">
                  Docs
                </a>
              </li>
              <li>
                <a className="cursor-pointer text-sm text-neutral-400 hover:text-neutral-200">
                  Download
                </a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/5">
            <h2 className="mt-8 mb-10 text-lg font-semibold text-white lg:mt-0">
              Company
            </h2>
            <nav className=" list-none space-y-4">
              <li>
                <a className="cursor-pointer text-sm text-neutral-400 hover:text-neutral-200">
                  About Us
                </a>
              </li>
              <li>
                <a className="cursor-pointer text-sm text-neutral-400 hover:text-neutral-200">
                  Blog
                </a>
              </li>
              <li>
                <a className="cursor-pointer text-sm text-neutral-400 hover:text-neutral-200">
                  Careers
                </a>
              </li>
              <li>
                <a className="cursor-pointer text-sm text-neutral-400 hover:text-neutral-200">
                  Customers
                </a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/5">
            <h2 className="mt-8 mb-10 text-lg font-semibold text-white lg:mt-0">
              Resources
            </h2>
            <nav className=" list-none space-y-4">
              <li>
                <a className="cursor-pointer text-sm text-neutral-400 hover:text-neutral-200">
                  Community
                </a>
              </li>
              <li>
                <a className="cursor-pointer text-sm text-neutral-400 hover:text-neutral-200">
                  Contact
                </a>
              </li>
              <li>
                <a className="cursor-pointer text-sm text-neutral-400 hover:text-neutral-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="cursor-pointer text-sm text-neutral-400 hover:text-neutral-200">
                  Terms of service
                </a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/5">
            <h2 className="mt-8 mb-10 text-lg font-semibold text-white lg:mt-0">
              Developers
            </h2>
            <nav className=" list-none space-y-4">
              <li>
                <a className="cursor-pointer text-sm text-neutral-400 hover:text-neutral-200">
                  Web API
                </a>
              </li>
              <li>
                <a className="cursor-pointer text-sm text-neutral-400 hover:text-neutral-200">
                  Status
                </a>
              </li>
              <li>
                <a className="cursor-pointer text-sm text-neutral-400 hover:text-neutral-200">
                  Github
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
