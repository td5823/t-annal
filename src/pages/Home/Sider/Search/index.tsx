import React from "react";
import { Layout, AutoComplete, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import styled from "styled-components";

const StyledHeader = styled(Layout.Header)`
  padding: 0px;
  height: 42px;
  line-height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-inline: 5px;
  .t-search {
    border: 0;
    border-radius: 15px;
    background-color: #343b4a;
    color: #6a737c;
    font-size: 12px;
    input {
      background-color: #343b4a;
      color: #fff;
    }
    input::placeholder {
      color: #6a737c;
      background-color: #343b4a;
      font-size: 12px;
    }
  }
`;

const Search = (): any => {
  return (
    <StyledHeader>
      <AutoComplete
        options={[]}
        // onSelect={onSelect}
        // onSearch={(text) => setOptions(getPanelValue(text))}
      >
        <Input
          className="t-search"
          placeholder="搜索"
          prefix={<SearchOutlined />}
        />
      </AutoComplete>
    </StyledHeader>
  );
};

export default Search;
