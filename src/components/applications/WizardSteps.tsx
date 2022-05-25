import * as React from 'react'
import moment from 'moment'
import { StepStatus } from '@/types/step'
import CancelIcon from '../icons/CancelIcon'
import CheckIcon from '../icons/CheckIcon'
import Step from './Step'

const WizardSteps: React.FunctionComponent = () => {
  return (
    <div className="w-[68%] py-6">
      <div className="flex">
        <Step
          day={moment().subtract(20, 'days').format('D MMM, YYYY')}
          label="Application sent"
          isFirst={true}
          status={StepStatus.PASSED}
          icon={<CheckIcon w="14" h="14" sw={3} color="white" />}
        />
        <Step
          day={moment().subtract(13, 'days').format('D MMM, YYYY')}
          label="Rejected"
          status={StepStatus.FAILED}
          icon={<CancelIcon w="16" h="16" sw={3} color="white" />}
        />
        <Step
          day={moment().subtract(8, 'days').format('D MMM, YYYY')}
          label="Interview process"
          status={StepStatus.PASSED}
          icon={<CheckIcon w="14" h="14" sw={3} color="white" />}
        />
        <Step
          day={moment().format('D MMM, YYYY')}
          label="Offer"
          status={StepStatus.WAITING}
          icon={<CheckIcon w="14" h="14" sw={3} color="white" />}
        />
      </div>
    </div>
  )
}

export default WizardSteps
