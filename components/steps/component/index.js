import React from 'react'
import Steps from 'antd/es/steps'
import { customExtendFunComponent } from 'components/utils'

function CustomSteps(props = {}) {
  return <Steps {...props}></Steps>
}

customExtendFunComponent(CustomSteps, Steps)

export default CustomSteps
