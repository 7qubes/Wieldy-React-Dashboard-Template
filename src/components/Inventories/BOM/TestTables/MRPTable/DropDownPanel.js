import React from "react";
import { Menu, Dropdown, Button, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

const DropDownPanel = ({ setTable, table }) => {
  // event handlers
  const menuClickHandler = (event) => {
    if (event.item.node.classList.contains("first")) {
      setTable({ ...table, first: event.key });
    }
    if (event.item.node.classList.contains("second")) {
      setTable({ ...table, second: event.key });
    }
  };

  const menuOne = (
    <Menu className="menu-first" onClick={menuClickHandler}>
      <Menu.Item className="first" key="0">
        1st menu item
      </Menu.Item>
      <Menu.Item className="first" key="1">
        2nd menu item
      </Menu.Item>
      <Menu.Item className="first" key="2">
        3rd menu item
      </Menu.Item>
    </Menu>
  );
  const menuTwo = (
    <Menu onClick={menuClickHandler}>
      <Menu.Item className="second" key="0">
        1st menu item
      </Menu.Item>
      <Menu.Item className="second" key="1">
        2nd menu item
      </Menu.Item>
      <Menu.Item className="second" key="2">
        3rd menu item
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <Space wrap style={{ marginLeft: "2.5rem" }}>
        <Dropdown
          key="1"
          overlay={menuOne}
          trigger={["click"]}
          className="first first-dropdown"
        >
          <Button className="first first-button">
            <span className="first first-span">Table One</span>{" "}
            <DownOutlined className="first first-down-arrow" />
          </Button>
        </Dropdown>
        <Dropdown
          key="2"
          overlay={menuTwo}
          trigger={["click"]}
          className="second second-dropdown"
        >
          <Button className="second second-button">
            <span className="second second-span">Table Two</span>{" "}
            <DownOutlined className="second second-down-arrow" />
          </Button>
        </Dropdown>
      </Space>
    </div>
  );
};

export default DropDownPanel;
