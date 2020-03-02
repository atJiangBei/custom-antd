import React from 'react'
import Button from 'components/button'
import 'components/button/style/less'
import './index.less'
import { SearchOutlined } from '@ant-design/icons'

const DemoButton = () => {
  return (
    <div className="demo-button">
      <div>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
        <Button type="link">Link</Button>
      </div>
      <div>
        <Button type="primary" shape="circle" icon={<SearchOutlined />} />
        <Button type="primary" shape="circle">
          A
        </Button>
        <Button type="primary" icon={<SearchOutlined />}>
          Search
        </Button>
        <Button shape="circle" icon={<SearchOutlined />} />
        <Button icon={<SearchOutlined />}>Search</Button>
        <br />
        <Button shape="circle" icon={<SearchOutlined />} />
        <Button icon={<SearchOutlined />}>Search</Button>
        <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
        <Button type="dashed" icon={<SearchOutlined />}>
          Search
        </Button>
      </div>
    </div>
  )
}

DemoButton.tag = {
  tag: 'basic',
  path: '/button',
  label: 'Button 按钮'
}

export default DemoButton
