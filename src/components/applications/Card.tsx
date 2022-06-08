import * as React from 'react'
import { formatDistance, subDays } from 'date-fns'
import { ApplicationProps } from '@/types/step'
import Application from './Application'

const Card: React.FunctionComponent<ApplicationProps> = (props) => {
  return (
    <div className="w-[350px] overflow-hidden rounded-xl bg-neutral-700 p-6">
      <Application {...props} />
      <div className="mx-4 mt-4 flex max-w-sm items-center justify-between">
        <p className="text-xs text-neutral-300">
          Applied{' '}
          {formatDistance(subDays(new Date(), Math.random() * 8), new Date(), {
            addSuffix: true,
          })}
        </p>
        <a
          href="applications/status/"
          className="ml-4 rounded-lg bg-blue-600 px-4 py-2 text-sm text-neutral-200 hover:bg-blue-500 focus:outline-none"
        >
          Proceed
        </a>
      </div>
    </div>
  )
}

export default Card
