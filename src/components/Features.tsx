import * as React from 'react'
import CuttingScissorIcon from './icons/CuttingScissorIcon'
import GroupIcon from './icons/GroupIcon'
import HalfMoonIcon from './icons/HalfMoonIcon'
import SuitCaseIcon from './icons/SuitCaseIcon'
import ThunderStormIcon from './icons/ThunderStormIcon'
import WifiOffIcon from './icons/WifiOffIcon'

const Features: React.FunctionComponent = () => {
  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto px-5 md:py-24">
        <div className="mx-auto max-w-3xl text-center md:mt-40">
          <p className=" text-xl text-neutral-400 ">WHO IS THIS APP FOR ?</p>
          <h1 className="mx-4 mt-8 mb-12 text-3xl font-bold leading-snug text-white sm:text-4xl md:text-5xl">
            Trace is suitable for Job seekers who want to land a job
          </h1>
        </div>
        <div className=" flex flex-wrap justify-center lg:space-x-6">
          <div className="p-4 sm:w-[400px] md:w-[400px]">
            <div className="h-full overflow-hidden rounded-xl bg-neutral-800">
              <div className="p-10">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-neutral-700">
                  <ThunderStormIcon />
                </div>
                <h1 className=" mb-4 text-2xl font-bold text-neutral-100">
                  Built for speed
                </h1>
                <p className="mb-3 text-neutral-400">
                  Synchronized in realtime across all users. No spinners or
                  waiting.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 sm:w-[400px] md:w-[400px] ">
            <div className="h-full overflow-hidden rounded-xl bg-neutral-800">
              <div className="p-10">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-neutral-700">
                  <CuttingScissorIcon />
                </div>
                <h1 className=" mb-4 text-2xl font-bold text-neutral-100">
                  Keyboard first design
                </h1>
                <p className="mb-3 text-neutral-400">
                  Optimized for efficiency with extensive keyboard shortcuts.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 sm:w-[400px] md:w-[400px]">
            <div className="h-full overflow-hidden rounded-xl bg-neutral-800">
              <div className="p-10">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-neutral-700">
                  <SuitCaseIcon />
                </div>
                <h1 className=" mb-4 text-2xl font-bold text-neutral-100">
                  For Job seekers
                </h1>
                <p className="mb-3 text-neutral-400">
                  Created by software people for Job seekers from entry level to
                  seniors.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-wrap justify-center lg:mt-6 lg:space-x-6">
          <div className="p-4 sm:w-[400px] md:w-[400px]">
            <div className="h-full overflow-hidden rounded-xl bg-neutral-800">
              <div className="p-10">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-neutral-700">
                  <WifiOffIcon />
                </div>
                <h1 className=" mb-4 text-2xl font-bold text-neutral-100">
                  Works offline
                </h1>
                <p className="mb-3 text-neutral-400">
                  Access and make changes with or without internet access.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 sm:w-[400px] md:w-[400px]">
            <div className="h-full overflow-hidden rounded-xl bg-neutral-800">
              <div className="p-10">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-neutral-700">
                  <HalfMoonIcon />
                </div>
                <h1 className=" mb-4 text-2xl font-bold text-neutral-100">
                  Dark theme by default
                </h1>
                <p className="mb-3 text-neutral-400">
                  We don’t have light theme at trace because we care about your
                  eyes
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 sm:w-[400px] md:w-[400px]">
            <div className="h-full overflow-hidden rounded-xl bg-neutral-800">
              <div className="p-10">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-neutral-700">
                  <GroupIcon />
                </div>
                <h1 className=" mb-4 text-2xl font-bold text-neutral-100">
                  Multiple teams
                </h1>
                <p className="mb-3 text-neutral-400">
                  Have all your teams in one shared workspace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
