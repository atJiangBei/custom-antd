import React from 'react'
import './layout.less'
import logo from '@/assets/imgs/logo.svg'
import ContentRouter from '@/routers'
import { sliderList } from '@/routers/map'
import Layout from 'antd/es/layout'
import Menu from 'antd/es/menu'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import 'antd/es/layout/style'
import 'antd/es/menu/style'
import 'antd/es/icon/style'

const { SubMenu } = Menu
const { Header, Sider, Content } = Layout

class LayoutContainer extends React.Component {
  state = {
    collapsed: false
  }
  componentDidMount() {}
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  goTo = path => {
    this.props.history.push(path)
  }
  render() {
    const { collapsed } = this.state
    return (
      <div className="admin-container">
        <Layout>
          <Sider theme="light" trigger={null} collapsible collapsed={collapsed}>
            <div className="admin-menu-logo">
              <img
                src={logo}
                alt="logo"
                style={{ width: '32px', height: '32px' }}
              />
              {!collapsed && <span className="admin-menu-text">Antd</span>}
            </div>

            <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
              {sliderList.map(subm => {
                return (
                  <SubMenu
                    key={subm.title}
                    title={
                      <span>
                        {subm.icon}
                        {subm.title}
                      </span>
                    }
                  >
                    {subm.children.map(slider => {
                      return (
                        <Menu.Item
                          key={slider.label}
                          onClick={() => {
                            this.goTo(slider.path)
                          }}
                        >
                          <span>{slider.label}</span>
                        </Menu.Item>
                      )
                    })}
                  </SubMenu>
                )
              })}
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              <div className="admin-header-container" onClick={this.toggle}>
                {!collapsed && (
                  <MenuFoldOutlined style={{ fontSize: '20px' }} />
                )}

                {collapsed && (
                  <MenuUnfoldOutlined style={{ fontSize: '20px' }} />
                )}
              </div>
            </Header>
            <Content
              style={{
                margin: '12px',
                padding: 24,
                background: '#fff',
                minHeight: 280
              }}
            >
              <div className="admin-content">
                <ContentRouter></ContentRouter>
              </div>
            </Content>
          </Layout>
        </Layout>
      </div>
    )
  }
}

export default LayoutContainer
