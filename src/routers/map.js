import React from 'react'
import {
  HomeOutlined,
  LayoutOutlined,
  CrownOutlined,
  FolderOutlined,
  FileDoneOutlined,
  SoundOutlined,
  MoreOutlined
} from '@ant-design/icons'
const sliderList = [
  {
    title: '通用',
    icon: <HomeOutlined />,
    tag: 'basic',
    children: []
  },
  {
    title: '布局',
    icon: <LayoutOutlined />,
    tag: 'layout',
    children: []
  },
  {
    title: '导航',
    icon: <CrownOutlined />,
    tag: 'nav',
    children: []
  },
  {
    title: '数据录入',
    tag: 'writeFile',
    icon: <FolderOutlined />,
    children: []
  },
  {
    title: '数据展示',
    tag: 'fileShow',
    icon: <FileDoneOutlined />,
    children: []
  },
  {
    title: '反馈',
    tag: 'notify',
    icon: <SoundOutlined />,
    children: []
  },
  {
    title: '其他',
    tag: 'other',
    icon: <MoreOutlined />,
    children: []
  }
]
const components = []
const context = require.context('./../pages/', true, /.js$/)

context.keys().forEach(path => {
  const v = context(path)
  const component = v.default
  const obj = {
    component: component,
    ...component.tag
  }
  components.push(obj)
  sliderList.forEach(slider => {
    if (slider.tag === component.tag.tag) {
      slider.children.push(obj)
    }
  })
})

const str = [
  '                                                      ',
  '       k    k         y         y          zzzzzzzzz',
  '       k   k           y       y                   z',
  '       k  k             y     y                   z',
  '       k k               y   y                   z',
  '       kk                 y y                   z',
  '       k k                 y                   z',
  '       k  k                y                  z',
  '       k   k               y                 z',
  '       k    k              y                zzzzzzzzz',
  '                                                      ',
  '                Antd@4.x                             '
].join('\n')

console.log(`%c ${str}`, 'color:#1590FF')

export { components, sliderList }
