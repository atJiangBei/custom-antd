import React from 'react'
import Input from 'antd/es/input'

class CustomInput extends React.Component {
  render() {
    return (
      <>
        <Input></Input>
      </>
    )
  }
}

const proto = Object.create(Input)
for (let k in proto) {
  CustomInput[k] = proto[k]
}
export default CustomInput
