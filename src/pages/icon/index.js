import React from 'react'
import Icon from 'lib/icon'
import 'lib/icon/style'
import './index.less'

const DemoIcon = () => {
  return (
    <div className="demo-icon">
      <Icon></Icon>
    </div>
  )
}

DemoIcon.tag = {
  tag: 'basic',
  path: '/icon',
  label: 'Icon 图标'
}

export default DemoIcon
