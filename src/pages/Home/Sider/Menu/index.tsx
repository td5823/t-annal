import React, { useMemo } from "react";
import { shallow } from "zustand/shallow";
import { storeHome } from "store/Home";
import { Menu, Layout } from "antd";
import { AlibabaOutlined } from "@ant-design/icons";

const FirstLevelMenu = (): any => {
  const { menus } = storeHome(
    (props: any) => ({
      menus: props.menus,
    }),
    shallow
  );

  // 处理菜单
  const _items = useMemo(() => {
    return menus
      .filter((item: any) => item.parentId === "-1")
      .map((item: any) => ({
        key: item.id,
        label: item.name,
        icon: <AlibabaOutlined />,
      }));
  }, [menus]); // eslint-disable-line

  return (
    <Layout.Content>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        inlineIndent={10}
        theme="dark"
        items={_items}
      />
    </Layout.Content>
  );
};

export default FirstLevelMenu;
