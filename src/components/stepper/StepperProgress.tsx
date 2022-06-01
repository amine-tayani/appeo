import * as React from 'react'
import { StepperProgressProps } from '@/types/step'

export const StepperProgress: React.FC<StepperProgressProps> = ({
  stepTitles,
  currentStep,
}) => {
  const progressPerStep = 100 / (stepTitles.length - 1)
  const progress = (currentStep - 1) * progressPerStep
  return (
    <div className="stepper-progress">
      <div className="stepper-progress-wrapper">
        <div
          className="stepper-progress-bar"
          style={{ width: progress + '%' }}
        />
        {stepTitles.map((title, i) => (
          <div className="step-title">
            <div className="step-title-number" key={i}>
              {i + 1}
            </div>
            {title}
          </div>
        ))}
      </div>
    </div>
  )
}
