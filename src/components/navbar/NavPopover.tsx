import * as React from 'react'
import { Popover } from '@headlessui/react'
import { motion } from 'framer-motion'
import ThunderStormIcon from '../icons/ThunderStormIcon'
import CuttingScissorIcon from '../icons/CuttingScissorIcon'
import SuitCaseIcon from '../icons/SuitCaseIcon'
import WifiOffIcon from '../icons/WifiOffIcon'
import HalfMoonIcon from '../icons/HalfMoonIcon'
import GroupIcon from '../icons/GroupIcon'
import ChevronDownIcon from '../icons/ChevronDownIcon'

const NavPopover: React.FunctionComponent = () => {
  return (
    <Popover className="relative">
      <Popover.Button>
        <a
          href="#"
          className="flex items-center space-x-1 font-medium text-neutral-400 hover:text-blue-500 "
        >
          <span>Features</span>
          <ChevronDownIcon />
        </a>
      </Popover.Button>

      <Popover.Panel className="absolute left-1/2 z-10 mt-6 w-[430px] -translate-x-1/2 transform px-4 text-white sm:px-0 lg:max-w-3xl">
        <motion.div
          initial={{ height: 0 }}
          animate={{
            height: '570px',
            transition: {
              type: 'spring',
              stiffness: 200,
              damping: 20,
            },
          }}
          className="space-y-10 overflow-hidden rounded-lg bg-neutral-800 p-10"
        >
          <div className="flex space-x-6 ">
            <div className="rounded-xl bg-neutral-700 p-3">
              <ThunderStormIcon />
            </div>

            <div className="space-y-1">
              <h1 className="font-medium text-neutral-100">Blazing fast</h1>
              <p className="text-sm text-neutral-400">
                Synchronized across all users
              </p>
            </div>
          </div>
          <div className="flex  space-x-6">
            <div className="rounded-xl bg-neutral-700 p-3">
              <CuttingScissorIcon />
            </div>
            <div className="space-y-1">
              <h1 className="font-medium text-neutral-100">
                Keyboard first design
              </h1>
              <p className="text-sm text-neutral-400">
                Optimized with keyboard shortcuts
              </p>
            </div>
          </div>
          <div className="flex  space-x-6">
            <div className="rounded-xl bg-neutral-700 p-3">
              <SuitCaseIcon />
            </div>
            <div className="space-y-1">
              <h1 className="font-medium text-neutral-100">For Job seekers</h1>
              <p className="text-sm text-neutral-400">
                Created for Job seekers.
              </p>
            </div>
          </div>
          <div className="flex  space-x-6">
            <div className="rounded-xl bg-neutral-700 p-3">
              <WifiOffIcon />
            </div>
            <div className="space-y-1">
              <h1 className="font-medium text-neutral-100">Works offline</h1>
              <p className="text-sm text-neutral-400">
                Access and make changes offline
              </p>
            </div>
          </div>
          <div className="flex  space-x-6">
            <div className="rounded-xl bg-neutral-700 p-3">
              <HalfMoonIcon />
            </div>

            <div className="space-y-1">
              <h1 className="font-medium text-neutral-100">Dark by default</h1>
              <p className="text-sm text-neutral-400">
                We don’t have light theme at trace
              </p>
            </div>
          </div>
          <div className="flex  space-x-6">
            <div className="rounded-xl bg-neutral-700 p-3">
              <GroupIcon />
            </div>
            <div className="space-y-1">
              <h1 className="font-medium text-neutral-100">Multiple teams</h1>
              <p className="text-sm text-neutral-400">
                Have all your teams in one workspace.
              </p>
            </div>
          </div>
        </motion.div>
      </Popover.Panel>
    </Popover>
  )
}

export default NavPopover
