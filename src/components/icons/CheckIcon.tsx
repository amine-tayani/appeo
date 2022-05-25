import { IconProps } from '@/types/step'
import * as React from 'react'

const CheckIcon: React.FunctionComponent<IconProps> = ({ sw, h, w, color }) => {
  return (
    <svg
      width={w}
      height={h}
      strokeWidth={sw}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 13L9 17L19 7"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default CheckIcon
