import React, { useMemo } from "react";
import { Tabs } from "antd";
import { shallow } from "zustand/shallow";
import { storeHome } from "store/Home";

interface IframeProps {
  id: string;
  name: string;
  url: string;
  height: string;
}

const formatUrl = (str: string) => {
  const _str =
    str && !str.startsWith("/") && !str.startsWith("http")
      ? `/${str}`
      : `${str}`;
  return `/t-annal${_str}`;
};

const _Iframe: React.FC<IframeProps> = ({ id, name, url, height = "0px" }) => (
  <div id={"tab" + id}>
    <iframe
      id={"page_" + id}
      title={name}
      src={formatUrl(url)}
      key={url}
      style={{
        width: "100%",
        height: `calc(100vh - 98px - ${height})`,
        border: "0 none",
      }}
    />
  </div>
);

const Iframe: React.FC<IframeProps> = (props) => {
  const { menus } = storeHome(
    (s: any) => ({
      menus: s.menus,
    }),
    shallow
  );

  const __menus = menus.filter((item: any) => item.parentId === props.id);

  const _menus = useMemo(() => {
    return __menus.map((item: any) => ({
      key: item.id,
      label: item.name,
      children: (
        <_Iframe {...item} height={`${menus?.length ? "38px" : "0px"}`} />
      ),
    }));
  }, [props.id]); // eslint-disable-line

  return _menus.length > 0 ? (
    <Tabs
      destroyInactiveTabPane={true}
      animated={{ inkBar: false, tabPane: false }}
      size="small"
      items={_menus}
    />
  ) : (
    <_Iframe {...props} />
  ); // 传递 menus 属性
};

export default Iframe;
