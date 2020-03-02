import React, { useState } from 'react'
import Switch from 'components/switch'
import 'components/switch/style/less'
import { CloseOutlined, CheckOutlined } from '@ant-design/icons'

class DemoSwitch extends React.Component {
  render() {
    return (
      <>
        <div>
          <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked />
          <br />
          <Switch checkedChildren="1" unCheckedChildren="0" />
          <br />
          <Switch
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            defaultChecked
          />
          <br />
          <Switch size="small" defaultChecked />
        </div>
      </>
    )
  }
}

DemoSwitch.tag = {
  tag: 'writeFile',
  path: '/switch',
  label: 'Switch 开关'
}

export default DemoSwitch
