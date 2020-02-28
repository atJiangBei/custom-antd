import React from 'react'

import Steps from 'components/steps'
import 'components/steps/style/less'
const { Step } = Steps

function CustomSteps() {
  return (
    <>
      <Steps direction="vertical" current={1}>
        <Step title="Finished" description="This is a description." />
        <Step title="In Progress" description="This is a description." />
        <Step title="Waiting" description="This is a description." />
      </Steps>
      ,
    </>
  )
}

CustomSteps.tag = {
  tag: 'nav',
  path: '/steps',
  label: 'steps 步骤条'
}

export default CustomSteps
