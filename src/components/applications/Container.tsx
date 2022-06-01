import * as React from 'react'
import Application from './Application'
import { ApplicationProps, StepProps } from '@/types/step'
import { Stepper } from '../stepper/Stepper'

const Container: React.FunctionComponent<ApplicationProps> = (props) => {
  return (
    <div>
      <div className="flex justify-around overflow-hidden border-t border-[#383838] py-8">
        <Application {...props} />
        <Stepper
          steps={[
            {
              title: 'Application Sent',
              element: (stepProps) => <Step {...stepProps} />,
            },
            {
              title: 'Accepted',
              element: (stepProps) => <Step {...stepProps} />,
            },
            {
              title: 'Interview process',
              element: (stepProps) => <Step {...stepProps} />,
            },
            {
              title: 'Offer',
              element: (stepProps) => <Step {...stepProps} />,
            },
          ]}
        />
      </div>
    </div>
  )
}

export default Container

const Step: React.FC<StepProps> = ({
  goNextStep,
  isFirst,
  isLast,
  goPreviousStep,
}) => {
  return <></>
}
