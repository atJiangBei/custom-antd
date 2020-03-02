import React, { useState } from 'react'
import Radio from 'components/radio'
import 'components/radio/style/less'
import Button from 'components/button'
import 'components/button/style/less'

const DemoRadio = () => {
  const [disabled, setDisabled] = useState(true)
  const toggleDisabled = () => {
    setDisabled(!disabled)
  }
  const [value, setValue] = useState(1)

  const onChange = e => {
    console.log('radio checked', e.target.value)
    setValue(e.target.value)
  }
  return (
    <>
      <div>
        <Radio defaultChecked={false} disabled={disabled}>
          Disabled
        </Radio>
        <br />
        <Radio defaultChecked disabled={disabled}>
          Disabled
        </Radio>
        <div style={{ marginTop: 20 }}>
          <Button type="primary" onClick={toggleDisabled}>
            Toggle disabled
          </Button>
        </div>
      </div>
      <br />
      <br />
      <Radio.Group onChange={onChange} value={value}>
        <Radio value={1}>A</Radio>
        <Radio value={2}>B</Radio>
        <Radio value={3}>C</Radio>
        <Radio value={4}>D</Radio>
      </Radio.Group>
    </>
  )
}

DemoRadio.tag = {
  tag: 'writeFile',
  path: '/radio',
  label: 'Radio 单选框'
}

export default DemoRadio
