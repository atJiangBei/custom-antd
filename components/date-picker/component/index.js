import React from 'react'
import DatePicker from 'antd/es/date-picker'
import { customExtendClassComponent } from 'components/utils'
class CustomDatePicker extends React.Component {
  render() {
    return (
      <>
        <DatePicker></DatePicker>
      </>
    )
  }
}

customExtendClassComponent(CustomDatePicker, DatePicker)
export default CustomDatePicker
