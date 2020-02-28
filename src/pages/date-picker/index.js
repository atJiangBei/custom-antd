import React from 'react'
import DatePicker from 'components/date-picker'
import 'components/date-picker/style/less'

const { RangePicker } = DatePicker

function onChange(date, dateString) {
  console.log(date, dateString)
}
function onOk(value) {
  console.log('onOk: ', value)
}
const DemoDatePicker = () => {
  return (
    <>
      <div>
        <DatePicker onChange={onChange} />
        <br />
        <br />
        <DatePicker onChange={onChange} picker="week" />
        <br />
        <br />
        <DatePicker onChange={onChange} picker="month" />
        <br />
        <br />
        <DatePicker onChange={onChange} picker="year" />
        <br />
        <br />
        <DatePicker showTime onChange={onChange} onOk={onOk} />
        <br />
        <br />
        <RangePicker
          showTime={{ format: 'HH:mm' }}
          format="YYYY-MM-DD HH:mm"
          onChange={onChange}
          onOk={onOk}
        />
        <br />
        <br />
        <DatePicker bordered={false} />
        <br />
        <br />
        <br />
        <DatePicker picker="week" bordered={false} />
        <br />
        <br />
        <br />
        <DatePicker picker="month" bordered={false} />
        <br />
        <br />
        <br />
        <DatePicker picker="year" bordered={false} />
        <br />
        <br />
        <br />
        <RangePicker bordered={false} />
        <br />
        <br />
        <br />
        <RangePicker picker="week" bordered={false} />
        <br />
        <br />
        <br />
        <RangePicker picker="month" bordered={false} />
        <br />
        <br />
        <br />
        <RangePicker picker="year" bordered={false} />
      </div>
    </>
  )
}

DemoDatePicker.tag = {
  tag: 'writeFile',
  path: '/DatePicker',
  label: 'DatePicker 日期选择器'
}

export default DemoDatePicker
