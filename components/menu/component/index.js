import React from 'react'
import Menu from 'antd/es/menu'
import { customExtend } from 'components/utils'

function CustomMenu(props = {}) {
  return <Menu {...props}></Menu>
}

customExtend(CustomMenu, Menu)

export default CustomMenu
