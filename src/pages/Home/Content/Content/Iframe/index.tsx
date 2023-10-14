import React from "react";
import { Layout } from "antd";
import { shallow } from "zustand/shallow";

import { storeHome } from "store/Home";

const Content = (): any => {
  const { tabPanes, activePanelKey } = storeHome(
    (props: any) => ({
      activePanelKey: props.activePanelKey,
      tabPanes: props.tabPanes,
    }),
    shallow
  );
  return (
    <Layout.Content>
      <iframe
        id={"page_" + activePanelKey}
        title={"123123"}
        src={`/t-annal${
          tabPanes.find((o: any) => o.id === activePanelKey)?.url
        }`}
        // "/t-annal/sysapp/react/web/sfa.html#/dataReport/salesReport/salesSummary?menuId=9197064890220340900&logMenuId=9197064890220340900"
        key={
          "sysapp/react/web/apaas.html#/aPaas/objectView/list?objectId=6040279448745203726&objectKey=sales_competitor_info&title=竞争对手&objectType=1&menuId=6221829571426507753&logMenuId=6221829571426507753"
        }
        style={{ width: "100%", height: "100%", border: "0 none" }}
      />
    </Layout.Content>
  );
};

export default Content;
