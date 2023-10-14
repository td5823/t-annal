import React from "react";
import { Layout, Tabs, Dropdown, Menu } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { shallow } from "zustand/shallow";

import Iframe from "./Iframe";

import { storeHome } from "store/Home";
type TargetKey = React.MouseEvent | React.KeyboardEvent | string;

const App: React.FC = () => {
  const { tabPanes } = storeHome(
    (props: any) => ({
      tabPanes: props.tabPanes,
      firstMenukey: props.firstMenukey,
      openTab: props.openTab,
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
        // activeKey={activeKey}
        type="editable-card"
        onEdit={hanldeTabPanes}
        items={_items}
      />
    </Layout.Content>
  );
};

export default App;
