import React from 'react'
import Checkbox from 'antd/es/checkbox'
import { customExtend } from 'components/utils'

const CustomInput = (props = {}) => {
  return (
    <>
      <Checkbox {...props}></Checkbox>
    </>
  )
}
customExtend(CustomInput, Checkbox)

export default CustomInput
