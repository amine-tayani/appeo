import { IconProps } from '@/types/step'
import * as React from 'react'

const ArrowLeftIcon: React.FunctionComponent<IconProps> = ({ sw, h, w }) => {
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
        d="M18.5 12H6M6 12L12 6M6 12L12 18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ArrowLeftIcon
