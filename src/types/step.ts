import * as React from 'react'

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
export interface StepperProps {
  steps: Step[]
}

export interface Step {
  title: string
  element: (stepProps: StepProps) => JSX.Element
}

export interface StepProps {
  goNextStep: () => void
  goPreviousStep: () => void
  currentStep: number
  isLast: boolean
  isFirst: boolean
  step: number
}

export interface StepperProgressProps {
  stepTitles: string[]
  currentStep: number
}
