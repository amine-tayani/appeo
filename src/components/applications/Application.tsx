import * as React from 'react'
import { ApplicationProps } from '@/types/step'

const Application: React.FunctionComponent<ApplicationProps> = ({
  company,
  location,
  icon,
  title,
}) => {
  return (
    <div className="flex items-center space-x-8">
      <div className="rounded-xl bg-neutral-600 p-4">{icon}</div>
      <div>
        <h1 className="text-lg font-medium text-neutral-200">{title}</h1>
        <p className="text-sm text-neutral-300">{company}</p>
        <span className="text-xs text-neutral-400">{location}</span>
      </div>
    </div>
  )
}

export default Application
