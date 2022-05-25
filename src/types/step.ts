export enum StepStatus {
  PASSED = 'PASSED',
  FAILED = 'FAILED',
  WAITING = 'WAITING',
}

export interface IconProps {
  sw: number
  w: string
  h: string
  color?: string
}

export interface ApplicationProps {
  title: string
  company: string
  location: string
  icon: React.ReactElement
}

export interface StepProps {
  icon: React.ReactElement
  status: StepStatus
  isFirst?: boolean
  label: string
  day: string
}
