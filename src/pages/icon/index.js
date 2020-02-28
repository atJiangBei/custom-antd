import React, { Fragment } from 'react'
import Icon from 'components/icon'
import 'components/icon/style/less'
import './index.less'

const iconTypes = [
  'down',
  'up',
  'left',
  'right',
  'scan',
  'search',
  'tag',
  'save',
  'skin',
  'usb',
  'block',
  'border'
]
const DemoIcon = () => {
  return (
    <div>
      {iconTypes.map(type => {
        return (
          <div
            className="margin-b1 margin-r1 inline-block padding-all"
            key={type}
          >
            <Icon type={type} style={{ fontSize: '24px' }}></Icon>
          </div>
        )
      })}
    </div>
  )
}

DemoIcon.tag = {
  tag: 'basic',
  path: '/icon',
  label: 'Icon 图标'
}

export default DemoIcon
