import React from 'react'
import Input from 'components/input'
import 'components/input/style/less'

const { Search, TextArea } = Input
function DemoInput() {
  return (
    <>
      <Input placeholder="Basic usage" />
      <br />
      <br />
      <div>
        <Search
          placeholder="input search text"
          onSearch={value => console.log(value)}
          style={{ width: 200 }}
        />
        <br />
        <br />
        <Search
          placeholder="input search text"
          onSearch={value => console.log(value)}
          enterButton
        />
        <br />
        <br />
        <Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
          onSearch={value => console.log(value)}
        />
        <br />
        <br />
        <TextArea rows={4} />
      </div>
      ,
    </>
  )
}

DemoInput.tag = {
  tag: 'writeFile',
  path: '/input',
  label: 'Input 输入框'
}

export default DemoInput
