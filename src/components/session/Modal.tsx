import { Dialog, Transition } from '@headlessui/react'
import * as React from 'react'
import ArrowLeftIcon from '../icons/ArrowLeftIcon'
import LaptopIcon from '../icons/LaptopIcon'

interface Props {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  data: any
}

const Modal: React.FC<Props> = ({ isOpen, setIsOpen, data }) => {
  return (
    <Transition appear show={isOpen} as={React.Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setIsOpen(false)}
      >
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-neutral-800 px-8 py-6 text-left align-middle shadow-xl transition-all">
                <button
                  type="button"
                  className=" mb-8 transform text-neutral-400 hover:scale-110 hover:text-neutral-200 focus:outline-none"
                  onClick={() => setIsOpen(false)}
                >
                  <ArrowLeftIcon h="24" w="24" sw={1.5} />
                </button>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-4">
                    <div className="flex items-center rounded-full bg-neutral-600 p-3 text-neutral-300">
                      <LaptopIcon />
                    </div>
                    <div>
                      <span className="text-neutral-300">
                        {data.deviceOS?.replace(/"/g, '')}
                      </span>
                      <p className=" text-sm text-neutral-400">
                        {data.ua.name}{' '}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col ">
                    <p className=" text-neutral-300">IP Address</p>
                    <p className="text-sm text-neutral-400">{data.ip}</p>
                    <div />
                  </div>
                  <button className="h-9 rounded-xl px-4 text-sm text-neutral-300 ring-1 ring-red-500 hover:bg-red-600 hover:text-neutral-200 focus:outline-none">
                    Log out
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default Modal
