import React from 'react'
import Steps from 'antd/es/steps'
import { customExtend } from 'components/utils'

function CustomSteps(props = {}) {
  return <Steps {...props}></Steps>
}

customExtend(CustomSteps, Steps)

export default CustomSteps
