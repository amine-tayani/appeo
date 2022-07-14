import { motion } from 'framer-motion'
import * as React from 'react'
import LogoIcon from '../icons/LogoIcon'
import NavPopover from './NavPopover'

const mobile_nav_items = [
  {
    id: 0,
    navTitle: 'Features',
  },
  {
    id: 1,
    navTitle: 'Blog',
  },
  {
    id: 2,
    navTitle: 'Support',
  },
  {
    id: 3,
    navTitle: 'Pricing',
  },
]

const Navbar: React.FunctionComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const ulVariant = {
    opened: {
      transition: {
        delayChildren: 1,
        staggerChildren: 0.18,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.06,
        staggerDirection: -1,
      },
    },
  }
  const liVariant = {
    opened: {
      opacity: 1,
      y: '0%',
      transition: {
        duration: 0.65,
        ease: 'easeOut',
      },
    },
    closed: {
      opacity: 0,
      y: '100%',
      transition: {
        duration: 0.25,
        ease: 'easeInOut',
      },
    },
  }

  const mobileMenuVariant = {
    opened: {
      y: '0%',
      transition: {
        delay: 0.15,
        duration: 1.1,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
    closed: {
      y: '-100%',
      transition: {
        delay: 0.35,
        duration: 0.63,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
  }
  const fadeInVariant = {
    opened: {
      opacity: 1,
      transition: {
        delay: 1.2,
      },
    },
    closed: { opacity: 0 },
  }
  return (
    <nav className="mt-4 px-2 py-2.5 ">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="ml-10 mt-4 md:mt-0 md:ml-8">
          <a href="/" className="text-3xl font-bold text-white ">
            <LogoIcon />
          </a>
        </div>
        <div className="flex md:order-2">
          <div className="mr-12 hidden items-center space-x-10 md:flex ">
            <a
              href="/signup"
              className="rounded-lg bg-neutral-50 px-8 py-3 text-sm font-medium text-neutral-800 hover:bg-white focus:outline-none"
            >
              Get Started
            </a>
          </div>
          <motion.button
            variants={fadeInVariant}
            aria-label="Open Menu"
            onClick={() => {
              setIsMenuOpen(true)
            }}
            className=" mt-4 inline-flex items-center rounded-lg py-3 px-4 text-sm text-neutral-500 hover:text-neutral-100 focus:outline-none md:mr-0 md:mt-0 md:hidden"
          >
            {/* button to open the mobile menu  */}
            <svg
              className="h-8 w-8 rotate-180 transform "
              strokeWidth={1.2}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M3 5H11"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <motion.path
                d="M3 12H16"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <motion.path
                d="M3 19H21"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>

          <motion.div
            className="fixed inset-0 z-50 max-w-full overflow-hidden bg-neutral-900  lg:hidden"
            initial="closed"
            variants={mobileMenuVariant}
            animate={isMenuOpen ? 'opened' : 'closed'}
          >
            <div className="mx-12 mt-12 flex items-center justify-between">
              <motion.a
                variants={fadeInVariant}
                href="/"
                className="text-3xl font-bold text-white "
              >
                <LogoIcon />
              </motion.a>
              <motion.button
                variants={fadeInVariant}
                aria-label="Close Menu"
                className=" text-neutral-500 hover:text-neutral-100 focus:outline-none md:hidden"
                onClick={() => {
                  setIsMenuOpen(false)
                }}
              >
                <svg
                  className=" h-10 w-10"
                  strokeWidth={1}
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
              </motion.button>
            </div>
            <nav className="mx-2 h-screen w-screen">
              <motion.ul
                variants={ulVariant}
                className="mx-12 mt-20 space-y-16 text-neutral-100"
              >
                {mobile_nav_items.map((item) => (
                  <motion.li key={item.id} whileHover={{ scale: 0.9 }}>
                    <motion.a
                      variants={liVariant}
                      href="/"
                      className="text-3xl font-medium hover:text-white  "
                    >
                      {item.navTitle}
                    </motion.a>
                  </motion.li>
                ))}
              </motion.ul>
            </nav>
          </motion.div>
        </div>
        {/* widescreen navigation bar */}
        <div className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto">
          <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 lg:space-x-16  ">
            <li>
              <NavPopover />
            </li>
            <li>
              <a
                href="/privacy"
                className=" font-medium text-neutral-400 hover:text-blue-500 "
              >
                Privacy
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
