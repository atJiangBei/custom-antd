import React, { useState } from 'react'
import Rate from 'components/rate'
import 'components/rate/style/less'
import { HeartOutlined } from '@ant-design/icons'

class DemoRate extends React.Component {
  render() {
    return (
      <>
        <p>基本的</p>
        <Rate></Rate>
        <p>基本的</p>
        <div>
          <Rate character={<HeartOutlined />} allowHalf />
          <br />
          <Rate character="A" allowHalf style={{ fontSize: 36 }} />
          <br />
          <Rate character="好" allowHalf />
        </div>
      </>
    )
  }
}

DemoRate.tag = {
  tag: 'writeFile',
  path: '/rate',
  label: 'Rate 评分'
}

export default DemoRate
