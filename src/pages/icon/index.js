import React, { Fragment } from 'react'
import Icon from 'components/icon'
import 'components/icon/style/less'
import './index.less'

const {
  AccountBookFilled,
  AccountBookOutlined,
  AccountBookTwoTone,
  AimOutlined,
  AlertFilled,
  AlertOutlined,
  AlertTwoTone,
  AlibabaOutlined,
  AlignCenterOutlined,
  AlignLeftOutlined,
  AlignRightOutlined,
  AlipayCircleFilled,
  AlipayCircleOutlined,
  AlipayOutlined,
  AlipaySquareFilled,
  AliwangwangFilled,
  AliwangwangOutlined,
  AliyunOutlined,
  AmazonCircleFilled,
  AmazonOutlined,
  AmazonSquareFilled,
  AndroidFilled,
  AndroidOutlined,
  AntCloudOutlined
} = Icon
const icons = [
  'AccountBookFilled',
  'AccountBookOutlined',
  'AccountBookTwoTone',
  'AimOutlined',
  'AlertFilled',
  'AlertOutlined',
  'AlertTwoTone',
  'AlibabaOutlined',
  'AlignCenterOutlined',
  'AlignLeftOutlined',
  'AlignRightOutlined',
  'AlipayCircleFilled',
  'AlipayCircleOutlined',
  'AlipayOutlined',
  'AlipaySquareFilled',
  'AliwangwangFilled',
  'AliwangwangOutlined',
  'AliyunOutlined',
  'AmazonCircleFilled',
  'AmazonOutlined',
  'AmazonSquareFilled',
  'AndroidFilled',
  'AndroidOutlined',
  'AntCloudOutlined'
]
class DemoIcon extends React.Component {
  render() {
    return (
      <>
        {icons.map(icon => {
          return React.createElement(Icon[icon], {
            key: icon,
            style: { fontSize: '24px', color: '#08c', marginRight: '10px' }
          })
        })}
      </>
    )
  }
}

DemoIcon.tag = {
  tag: 'basic',
  path: '/icon',
  label: 'Icon 图标'
}

export default DemoIcon
