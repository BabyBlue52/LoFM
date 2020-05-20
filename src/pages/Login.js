import React, { useState } from 'react';
import { Row, Col, Input, Form, Checkbox, Button } from 'antd';
import { MdClose } from 'react-icons/md'

export function LoginPage(props) {
    const [state, setState ] = useState();
    const onFinish = values => {
        console.log('Received values of form: ', values);
      };
    return (
        <div className="support-container">
            <Row type="flex">
                <button className="back-btn" onClick={props.onCloseLogin}>
                    <MdClose style={{'fill':'red'}}/>
                </button>
                <Col span={24}>
                    <h3>Login</h3>
                </Col>
            </Row>
            <Row>
            <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
            </Row>
        </div>
    )
}
