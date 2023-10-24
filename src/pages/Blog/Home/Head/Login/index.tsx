import React from "react";
import { Button, Modal, Form } from "antd";

import BaseTrigger from "components/BaseTrigger";
import { postJson } from "utils/request";

import LoginForm from "./Form";

import JSEncrypt from "jsencrypt";

const Login: React.FC = () => {
  const [form] = Form.useForm();

  const handleOk = (onVisible: (visible: boolean) => void) => async () => {
    const res = await postJson("/users/getPublicKey");
    if (res.code === "1") {
      form.validateFields().then((formRes) => {
        // 加密敏感数据
        const crypt = new JSEncrypt();
        crypt.setPublicKey(res.data);
        // 加密数据
        const encryptedData = crypt.encrypt(formRes.password);
        postJson("/users/register", {
          ...formRes,
          password: encryptedData,
        }).then((res) => {
        });
      });
    }
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
