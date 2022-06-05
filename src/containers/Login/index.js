/*
 * @Author: Tian Zhengdong
 * @Date: 2022-06-03 23:17:07
 * @Description:
 */
import React, { useRef } from "react";
import { Button, Space, Row, Col, Input, Form } from "antd";

const Login = () => {
  const formRef = useRef();

  const handleLogin = () => {
    console.log(formRef.current.getFieldsValue());
    debugger;
  };
  return (
    <Col span={12} push={3}>
      <Form ref={formRef}>
        <Row align="middle" gutter={[0, 12]}>
          <Col span={24}>
            <Form.Item label="账号" name="useName">
              <Input />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="密码" name="passWord">
              <Input />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Space>
              <Button type="primary" onClick={handleLogin}>
                登录
              </Button>
            </Space>
          </Col>
        </Row>
      </Form>
    </Col>
  );
};

export default Login;
