import React from 'react'
import Radio from 'antd/es/radio'
import { customExtendClassComponent } from 'components/utils'
class CustomRadio extends React.Component {
  render() {
    const props = this.props
    return (
      <>
        <Radio {...props}></Radio>
      </>
    )
  }
}

customExtendClassComponent(CustomRadio, Radio)
export default CustomRadio
