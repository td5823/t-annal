import React, { useMemo, memo } from "react";
import { Layout, Tree } from "antd";
import { shallow } from "zustand/shallow";

import { storeHome } from "store/Home";

const SubMenu = (): any => {
  const { menus, fmKey, openTab } = storeHome(
    (props: any) => ({
      menus: props.menus,
      fmKey: props.fmKey,
      openTab: props.openTab,
    }),
    shallow
  );

  // 处理树形数据
  const _treeData = useMemo(() => {
    if (menus.length > 0 && fmKey) {
      return customFlattenDepth(
        generateLevelData(fmKey, menus, 1).map((item) => {
          const { isGrouping, children = [], ...others } = item;
          return isGrouping
            ? [
                {
                  ...others,
                  selectable: false,
                  disabled: true,
                },
                ...children.map((child) => ({
                  ...child,
                })),
              ]
            : {
                ...item,
              };
        })
      );
    }
    return [];
  }, [menus, fmKey]); // eslint-disable-line

  // 点击树节点触发
  const handleSelect = (selectedKeys: any, { node }: any) => {
    if (!node?.children?.length) {
      // 打开新tab页签
      if (node?.openType === "2") {
        window.open(node.url);
      } else {
        openTab({
          id: node.id,
          title: node.name,
          url: node.url,
          closable: true,
        });
      }
    }
  };

  return (
    <Layout.Sider style={{ height: "100%", backgroundColor: "#ffffff" }}>
      <Tree.DirectoryTree
        // mode={"inline" as any}
        blockNode
        showIcon={false}
        treeData={_treeData as any}
        fieldNames={{ title: "name", key: "id" }}
        // titleRender={handleTitleRender}
        onSelect={handleSelect}
      />
    </Layout.Sider>
  );
};

export default memo(SubMenu);

function customFlattenDepth<T>(arr: T[], depth: number = 1): T[] {
  if (depth === 0) {
    return arr.slice(); // 如果深度为 0，返回原数组的副本
  }

  const result: T[] = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      // 递归展平内部数组，并减小深度
      result.push(...customFlattenDepth(item, depth - 1));
    } else {
      result.push(item);
    }
  }

  return result;
}

interface Item {
  id: number;
  parentId: number;
  isGrouping: boolean;
  children?: Item[];
}

const generateLevelData = (
  parentId: number,
  list: Item[],
  level: number
): Item[] => {
  const res: Item[] = [];
  for (const item of list) {
    if (item.parentId === parentId) {
      if (level > 0) {
        const children = generateLevelData(
          item.id,
          list,
          item.isGrouping ? level : level - 1
        );
        if (children.length) {
          item.children = children;
        }
      }
      res.push(item);
    }
  }
  return res;
};
