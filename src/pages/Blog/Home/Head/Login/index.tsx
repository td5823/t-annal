import React from "react";
import { Button, Modal, Form } from "antd";

import BaseTrigger from "components/BaseTrigger";
import { postJson } from "utils/request";

import LoginForm from "./Form";

const Login: React.FC = () => {
  const [form] = Form.useForm();

  const handleOk = (onVisible: (visible: boolean) => void) => () => {
    form.validateFields().then((res) => {
      postJson("/users/login", res).then((res) => {});
    });
    onVisible(false);
  };

  return (
    <BaseTrigger
      content={({
        visible,
        onVisible,
        onCancel,
      }: {
        visible: boolean;
        onVisible: (visible: boolean) => void;
        onCancel: (visible: boolean) => void;
      }) => {
        return (
          <Modal
            title="登陆"
            open={visible}
            onOk={handleOk(onVisible)}
            onCancel={() => onCancel(false)}
          >
            <LoginForm form={form} />
          </Modal>
        );
      }}
    >
      <Button type="primary">登陆</Button>
    </BaseTrigger>
  );
};

export default Login;
