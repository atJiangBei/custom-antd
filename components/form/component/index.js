import React from 'react'
import Form from 'antd/es/form'
import { customExtend } from 'components/utils'

function CustomForm(props = {}) {
  return <Form {...props}></Form>
}

customExtend(CustomForm, Form)

export default CustomForm
