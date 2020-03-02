import React from 'react'
import Checkbox from 'antd/es/checkbox'
import { customExtendClassComponent } from 'components/utils'

class CustomCheckbox extends React.Component {
  render() {
    const props = this.props
    return (
      <>
        <Checkbox {...props}></Checkbox>
      </>
    )
  }
}

customExtendClassComponent(CustomCheckbox, Checkbox)
export default CustomCheckbox
