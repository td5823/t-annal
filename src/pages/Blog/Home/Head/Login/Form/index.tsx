import React from "react";
import { Checkbox, Form, Input, FormInstance } from "antd";

const onFinish = (values: any) => {};

const onFinishFailed = (errorInfo: any) => {};

type FieldType = {
  user_name?: string;
  password?: string;
  remember?: string;
};

type LoginFormType = {
  form?: FormInstance<any>;
};

const LoginForm: React.FC<LoginFormType> = (props) => {
  const { form } = props;
  return (
    <Form
      form={form}
      name="basic"
      labelCol={{ span: 5 }}
      wrapperCol={{ span: 19 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="账号"
        name="user_name"
        rules={[{ required: true, message: "请输入账号!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="密码"
        name="password"
        rules={[{ required: true, message: "请输入密码!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item<FieldType>
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 5, span: 19 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
    </Form>
  );
};
export default LoginForm;
