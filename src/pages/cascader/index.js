import React from 'react'
import Cascader from 'components/cascader'
import 'components/cascader/style/less'

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake'
          }
        ]
      }
    ]
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    disabled: true,
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men'
          }
        ]
      }
    ]
  }
]

function onChange(value) {
  console.log(value)
}

function DemoCascader() {
  return (
    <>
      <Cascader options={options} onChange={onChange} />
    </>
  )
}

DemoCascader.tag = {
  tag: 'writeFile',
  path: '/cascader',
  label: 'Cascader 级联选择'
}

export default DemoCascader
