import React from 'react'
import Menu from 'antd/es/menu'
import { customExtendFunComponent } from 'components/utils'

function CustomMenu(props = {}) {
  return <Menu {...props}></Menu>
}

customExtendFunComponent(CustomMenu, Menu)

export default CustomMenu
