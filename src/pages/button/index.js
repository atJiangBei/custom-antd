import React from 'react'
import Button from 'components/button'
import 'components/button/style/less'
import './index.less'

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
        <Button type="primary" shape="circle" icon="search" />
        <Button type="primary" shape="circle">
          A
        </Button>
        <Button type="primary" icon="search">
          Search
        </Button>
        <Button shape="circle" icon="search" />
        <Button icon="search">Search</Button>
        <br />
        <Button shape="circle" icon="search" />
        <Button icon="search">Search</Button>
        <Button type="dashed" shape="circle" icon="search" />
        <Button type="dashed" icon="search">
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
