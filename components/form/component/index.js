import React from 'react'
import Form from 'antd/es/form'
import { customExtendFunComponent } from 'components/utils'

function CustomForm(props = {}) {
  return <Form {...props}></Form>
}

customExtendFunComponent(CustomForm, Form)

export default CustomForm
