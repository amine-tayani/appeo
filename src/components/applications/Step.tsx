import * as React from 'react'
import clsx from 'clsx'
import { StepProps, StepStatus } from '@/types/step'

const Step: React.FunctionComponent<StepProps> = ({
  icon,
  status,
  isFirst,
  label,
  day,
}) => {
  return (
    <div className="w-1/4">
      <div className="relative mb-2">
        <div
          className={clsx('mx-auto flex h-6 w-6 items-center rounded-full', {
            'bg-blue-600': status === StepStatus.PASSED,
            'bg-neutral-600': status === StepStatus.WAITING,
            'bg-red-600': status === StepStatus.FAILED,
          })}
        >
          <span className="flex w-full justify-center text-white">{icon}</span>
        </div>
        <div className="absolute top-1/2 flex -translate-x-1/2  items-center ">
          <div
            className={clsx('w-[200px] rounded py-[1.3px]', {
              'bg-blue-600': status === StepStatus.PASSED,
              'bg-neutral-600':
                status === StepStatus.WAITING || status === StepStatus.FAILED,
              hidden: isFirst,
            })}
          />
        </div>
      </div>
      <div className="text-center">
        <p className="text-sm text-neutral-200">{label}</p>
        <span className="text-xs text-neutral-400">{day}</span>
      </div>
    </div>
  )
}
export default Step
