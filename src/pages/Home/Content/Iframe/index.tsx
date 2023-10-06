import React from "react";
import { Layout } from "antd";

const Content = (): any => {
  return (
    <Layout.Content>
      <iframe
        id={"page_" + "123"}
        title={"123123"}
        src={
          "/t-annal/sysapp/react/web/sfa.html#/dataReport/salesReport/salesSummary?menuId=9197064890220340900&logMenuId=9197064890220340900"
        }
        key={
          "sysapp/react/web/apaas.html#/aPaas/objectView/list?objectId=6040279448745203726&objectKey=sales_competitor_info&title=竞争对手&objectType=1&menuId=6221829571426507753&logMenuId=6221829571426507753"
        }
        style={{ width: "100%", height: "100%", border: "0 none" }}
      />
    </Layout.Content>
  );
};

export default Content;
