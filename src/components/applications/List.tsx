import * as React from 'react'
import CheckIcon from '../icons/CheckIcon'
import Application from './Application'
import { ApplicationProps } from '@/types/step'
import { formatRelative, subDays } from 'date-fns'

const List: React.FunctionComponent<ApplicationProps> = (props) => {
  return (
    <div className=" flex items-center justify-between overflow-hidden border-t border-[#383838] py-6">
      <Application {...props} />
      <div className="inline-flex text-white ">
        <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600">
          <CheckIcon sw={3} h="18" w="18" color="white" />
        </div>
        <span> Application Accepted</span>
      </div>
      <div className="text-sm text-neutral-300">
        Applied {formatRelative(subDays(new Date(), 0), new Date())}
      </div>
    </div>
  )
}

export default List
