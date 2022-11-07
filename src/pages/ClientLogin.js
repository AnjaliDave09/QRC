import React from "react";
import 'antd/dist/antd.css';
import '../../static/scss/CssQrc.css';
import WSLogo from "../../static/WSLogo.png";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';

const ClientLogin = () => {
    return (
        <div className="login login-background">
            <h2 className="h2">
                <img className="login-box-img" src={WSLogo} alt='WSlogo'></img>
            </h2>
            <label className="login-text-color login-label">Login to your account</label>
            <Form 
                name="normal_login"
                className="login-form login"
                initialValues={{ remember: true }}

            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item  className="login-text-color forget-link" name="remember">
                    Register/Forgot Password
                    </Form.Item>

                    <a className="login-form-forgot" href="">
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    </a>
                </Form.Item>
            </Form>
        </div>
    )
}
export default ClientLogin