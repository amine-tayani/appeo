import { IconProps } from '@/types/step'
import * as React from 'react'

const ChevronRightIcon: React.FunctionComponent<IconProps> = ({ sw, h, w }) => {
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
        d="M9 6L15 12L9 18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ChevronRightIcon
