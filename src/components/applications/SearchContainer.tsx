import * as React from 'react'
import { Listbox, Transition } from '@headlessui/react'
import CheckIcon from '../icons/CheckIcon'

const criterias = [
  { id: 1, name: 'Company' },
  { id: 2, name: 'Date' },
  { id: 3, name: 'Location' },
]

const SearchContainer = () => {
  const [selected, setSelected] = React.useState(criterias[0])

  return (
    <div className="container mx-auto flex flex-wrap px-8 py-12 ">
      <div className=" flex w-full flex-wrap justify-between space-x-4">
        <div className="flex space-x-3">
          <span className="mt-[4px] text-neutral-300">Sort by :</span>
          <div className="w-40 ">
            <Listbox value={selected} onChange={setSelected}>
              <div className="relative mt-1">
                <Listbox.Button className="relative flex items-center space-x-2 text-neutral-400">
                  <span>{selected.name}</span>
                  <svg
                    className="w-2 "
                    viewBox="0 0 9 7"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4.49976 7.00024L0.602641 0.250244L8.39687 0.250244L4.49976 7.00024Z" />
                  </svg>
                </Listbox.Button>
                <Transition
                  as={React.Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute mt-2 max-h-60 w-full overflow-auto rounded-lg bg-neutral-700 py-2 text-sm focus:outline-none">
                    {criterias.map((person, personIdx) => (
                      <Listbox.Option
                        key={personIdx}
                        className={({ active }) =>
                          `relative cursor-default select-none py-3 pl-8 ${
                            active
                              ? 'bg-neutral-600 text-neutral-200'
                              : 'text-neutral-200'
                          }`
                        }
                        value={person}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? 'font-medium' : 'font-normal'
                              }`}
                            >
                              {person.name}
                            </span>
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
        </div>
        <div className="inline-flex">
          <input
            className="block rounded-lg bg-neutral-700 py-2.5 pr-10 pl-6 text-sm text-neutral-200 placeholder:text-neutral-400 focus:outline-none focus:ring-blue-500"
            placeholder="Search by title or company"
          />
          <button className="ml-4 rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-neutral-200 hover:bg-blue-500 focus:outline-none">
            Search
          </button>
        </div>
      </div>
    </div>
  )
}

export default SearchContainer
