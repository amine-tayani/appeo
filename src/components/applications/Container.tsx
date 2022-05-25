import { ApplicationProps } from '@/types/step'
import * as React from 'react'
import Application from './Application'
import WizardSteps from './WizardSteps'

const Container: React.FunctionComponent<ApplicationProps> = (props) => {
  return (
    <div>
      <div className="mx-20 flex justify-between overflow-hidden border-t border-[#383838] py-3">
        <Application {...props} />
        <WizardSteps />
      </div>
    </div>
  )
}

export default Container
