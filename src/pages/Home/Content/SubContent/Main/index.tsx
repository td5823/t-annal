import React from "react";
import { Layout, Tabs, Dropdown, Menu } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { shallow } from "zustand/shallow";

import Iframe from "./Iframe";

import { storeHome } from "store/Home";

type TargetKey = React.MouseEvent | React.KeyboardEvent | string;

const Main: React.FC = () => {
  const { tabPanes, smKey } = storeHome(
    (props: any) => ({
      tabPanes: props.tabPanes,
      smKey: props.smKey,
    }),
    shallow
  );

  const hanldeTabPanes = (targetKey: TargetKey, action: "add" | "remove") => {
    if (targetKey && action) return;
  };

  // tab页签集合
  const _items = tabPanes.map((item: any) => ({
    key: item.id,
    label: (
      <Dropdown
        dropdownRender={() => (
          <Menu
            data-target={item.id}
            // items={_contextMenus}
            // onClick={handleContextMenuClick}
          />
        )}
        placement="bottomLeft"
        trigger={["contextMenu"]}
      >
        <div>
          <span onContextMenu={(e) => e.preventDefault()}>
            {item.title || "&nbsp;"}
          </span>
        </div>
      </Dropdown>
    ),
    children: (
      // <Suspense key={item.id} fallback={<Loading />}>
      <Iframe {...item} />
      // </Suspense>
    ),
    closeIcon: <CloseOutlined />,
    closable: item.closable,
  }));

  return (
    <Layout.Content>
      <Tabs
        hideAdd
        // onChange={onChange}
        // renderTabBar={(props: any, DefaultTabBar: any) => DefaultTabBar}
        activeKey={smKey}
        size="small"
        type="editable-card"
        onEdit={hanldeTabPanes}
        style={{ height: "100%" }}
        items={_items}
      />
    </Layout.Content>
  );
};

export default Main;
