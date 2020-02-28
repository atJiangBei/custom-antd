import React from 'react'
import InputNumber from 'components/input-number'
import 'components/input-number/style/less'

function onChange(value) {
  console.log('changed', value)
}

function DemoInputNumber() {
  return (
    <>
      <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
      <br />
      <br />
      <div>
        <InputNumber
          size="large"
          min={1}
          max={100000}
          defaultValue={3}
          onChange={onChange}
        />
        <br />
        <br />
        <InputNumber
          min={1}
          max={100000}
          defaultValue={3}
          onChange={onChange}
        />
        <br />
        <br />
        <InputNumber
          size="small"
          min={1}
          max={100000}
          defaultValue={3}
          onChange={onChange}
        />
      </div>
      <div>
        <InputNumber
          defaultValue={1000}
          formatter={value =>
            `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
          }
          parser={value => value.replace(/\$\s?|(,*)/g, '')}
          onChange={onChange}
        />
        <br />
        <br />
        <InputNumber
          defaultValue={100}
          min={0}
          max={100}
          formatter={value => `${value}%`}
          parser={value => value.replace('%', '')}
          onChange={onChange}
        />
      </div>
    </>
  )
}

DemoInputNumber.tag = {
  tag: 'writeFile',
  path: '/InputNumber',
  label: 'InputNumber 数字输入框'
}

export default DemoInputNumber
