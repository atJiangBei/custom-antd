import React from 'react'
import DatePicker from 'antd/es/date-picker'

class CustomDatePicker extends React.Component {
  render() {
    return (
      <>
        <DatePicker></DatePicker>
      </>
    )
  }
}
const proto = Object.create(DatePicker)
for (let k in proto) {
  CustomDatePicker[k] = proto[k]
}
export default CustomDatePicker
