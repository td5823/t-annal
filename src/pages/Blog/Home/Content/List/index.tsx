import React from "react";
import { Card, Flex } from "antd";

const List: React.FC = () => {
  const cardItems = Array.from(new Array(20)).map((item) => (
    <Card
      style={{
        backgroundColor: "unset",
        overflow: "auto",
        scrollbarWidth: "thin",
        scrollbarColor: "transparent transparent",
      }}
    >
      {item + "333"}
    </Card>
  ));

  return (
    <Flex vertical gap={20}>
      {cardItems}
    </Flex>
  );
};

export default List;
