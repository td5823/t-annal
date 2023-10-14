import React, { useMemo } from "react";
import { shallow } from "zustand/shallow";

import { storeHome } from "store/Home";

const Iframe: React.FC<any> = ({ id, name, url }) => {
  function formatUrl(str: any) {
    const _str =
      str && !str.startsWith("/") && !str.startsWith("http")
        ? `/${str}`
        : `${str}`;
    return `/t-annal${_str}`;
  }

  return (
    <div id={"tab" + id}>
      <iframe
        id={"page_" + id}
        title={name}
        src={formatUrl(url)}
        key={url}
        style={{
          width: "100%",
          height: `calc(100vh - 120px)`,
          border: "0 none",
        }}
      />
    </div>
  );
};

export default React.memo((props: any) => {
  const { menus } = storeHome(
    (s: any) => ({
      menus: s.menus,
    }),
    shallow
  );

  const _menus = useMemo(() => {
    return menus
      .filter((item: any) => item.parentId === props?.id)
      .map((item: any) => ({
        key: item.id,
        label: item.name,
        children: <Iframe {...item} />,
      }));
  }, [props?.id]); // eslint-disable-line

  return _menus.length > 0 ? null : <Iframe {...props} />;
});
