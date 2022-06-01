import * as React from 'react'
import { StepperProps } from '@/types/step'
import { StepperProgress } from './StepperProgress'

export const Stepper: React.FC<StepperProps> = ({ steps }) => {
  const [currentStep, setCurrentStep] = React.useState(1)
  const stepperSelector = React.useRef<HTMLDivElement>(null)
  React.useEffect(() => {
    moveStepper()
  }, [currentStep])

  const goNextStep = () => {
    const nextStep = currentStep + 1
    if (nextStep <= steps.length) {
      setCurrentStep(nextStep)
    }
  }

  const goPreviousStep = () => {
    const previousStep = currentStep - 1
    if (previousStep >= 1) {
      setCurrentStep(previousStep)
    }
  }

  const moveStepper = () => {
    if (stepperSelector.current) {
      const stepper = stepperSelector.current
      const stepWidth = stepper.offsetWidth / steps.length
      stepper.style.transform = `translateX(-${
        stepWidth * (currentStep - 1)
      }px)`
    }
  }

  return (
    <div className="relative w-3/6 overflow-hidden">
      <StepperProgress
        stepTitles={steps.map((step) => step.title)}
        currentStep={currentStep}
      />
      <div className="stepper-selector" ref={stepperSelector}>
        {steps.map((step, i) => (
          <div className="step-wrapper">
            <step.element
              step={i + 1}
              goNextStep={goNextStep}
              goPreviousStep={goPreviousStep}
              currentStep={currentStep}
              isFirst={i === 0}
              isLast={i === steps.length - 1}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
