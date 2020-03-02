import React from 'react'
import Input from 'antd/es/input'
import { customExtendClassComponent } from 'components/utils'
class CustomInput extends React.Component {
  render() {
    const props = this.props
    return (
      <>
        <Input></Input>
      </>
    )
  }
}

customExtendClassComponent(CustomInput, Input)
export default CustomInput
