import React from 'react'
import Form from 'components/form'
import Button from 'components/button'
import 'components/button/style/less'
import Checkbox from 'components/checkbox'
import 'components/checkbox/style/less'
import Input from 'components/input'
import 'components/input/style/less'
import Icon from 'components/icon'

class DemoForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
      </Form>
    )
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(DemoForm)

WrappedNormalLoginForm.tag = {
  tag: 'writeFile',
  path: '/form',
  label: 'Form 表单'
}

export default WrappedNormalLoginForm
