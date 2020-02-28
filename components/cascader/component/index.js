import React from 'react'
import Cascader from 'antd/es/cascader'
import { customExtend } from 'components/utils'

const CustomCascader = (props = {}) => {
  return (
    <>
      <Cascader {...props}></Cascader>
    </>
  )
}

export default CustomCascader
