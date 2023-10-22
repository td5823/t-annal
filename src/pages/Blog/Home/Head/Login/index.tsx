import React from "react";
import { Button, Modal } from "antd";

import BaseTrigger from "components/BaseTrigger";

import LoginForm from "./Form";

const Login: React.FC = () => {
  const handleOk = (onVisible: (visible: boolean) => void) => () => {
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
            <LoginForm />
          </Modal>
        );
      }}
    >
      <Button type="primary">登陆111</Button>
    </BaseTrigger>
  );
};

export default Login;
