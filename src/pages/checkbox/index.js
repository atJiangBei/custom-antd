import React from 'react'
import Checkbox from 'components/checkbox'
import 'components/checkbox/style/less'

function onChange(checkedValues) {
  console.log('checked = ', checkedValues)
}
const plainOptions = ['Apple', 'Pear', 'Orange']
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' }
]
const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: false }
]

const DemoCheckbox = () => {
  return (
    <>
      <Checkbox></Checkbox>
      <br />
      <div>
        <Checkbox.Group
          options={plainOptions}
          defaultValue={['Apple']}
          onChange={onChange}
        />
        <br />
        <br />
        <Checkbox.Group
          options={options}
          defaultValue={['Pear']}
          onChange={onChange}
        />
        <br />
        <br />
        <Checkbox.Group
          options={optionsWithDisabled}
          disabled
          defaultValue={['Apple']}
          onChange={onChange}
        />
      </div>
    </>
  )
}

DemoCheckbox.tag = {
  tag: 'writeFile',
  path: '/checkbox',
  label: 'Checkbox 数字输入框'
}

export default DemoCheckbox
