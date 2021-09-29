import React from "react";
import {
  Menu,
  Input,
  Dropdown,
  message,
  Checkbox,
  Row,
  Col,
  Button,
  Image,
} from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";

// styling
import styled from "styled-components";

const AddInventory = ({ isAddNew }) => {
  // toggle logic
  const addContainer = document.querySelector(".add-inventory-container");
  if (addContainer) {
    if (isAddNew) {
      addContainer.style.left = "75%";
      addContainer.style.pointerEvents = "auto";
    } else {
      addContainer.style.left = "100%";
      addContainer.style.pointerEvents = "none";
    }
  }

  const addInventoryCloseHandler = (event) => {
    if (addContainer) {
      addContainer.style.left = "100%";
      addContainer.style.pointerEvents = "none";
    }
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" icon={<UserOutlined />}>
        1st menu item
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        2nd menu item
      </Menu.Item>
      <Menu.Item key="3" icon={<UserOutlined />}>
        3rd menu item
      </Menu.Item>
    </Menu>
  );

  function onChange(checkedValues) {
    console.log("checked = ", checkedValues);
  }

  function handleMenuClick(e) {
    message.info("Click on menu item.");
    console.log("click", e);
  }

  return (
    <div style={{ width: "100%", position: "relative", color: "lightblue" }}>
      <StyledAddInventory className="add-inventory-container">
        <StyledHeader className="add-header">
          <h2>Add Inventory</h2>
        </StyledHeader>
        <StyledBody className="add-body">
          <StyledForm action="">
            <ImageContainer className="img-container">
              <Image
                width={100}
                height={100}
                src="error"
                fallback="data:image/png;base64,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"
              />
            </ImageContainer>
            <Input style={{ marginTop: "10px" }} placeholder="Item Name" />
            <Input style={{ marginTop: "10px" }} placeholder="Description" />
            <StyledDiv>
              <Input placeholder="Price" />
              <Dropdown overlay={menu} trigger={["click"]} className="dropdown">
                <Button>
                  Category <DownOutlined />
                </Button>
              </Dropdown>
            </StyledDiv>
            <Input style={{ marginTop: "10px" }} placeholder="Add Field" />
            <Input
              style={{ marginTop: "10px" }}
              placeholder="Add Colors with comma as separator"
            />
            <Checkbox.Group style={{ marginTop: "10px" }} onChange={onChange}>
              <Row>
                <Col span={12}>
                  <Checkbox value="XS">XS</Checkbox>
                </Col>
                <Col span={12}>
                  <Checkbox value="S">S</Checkbox>
                </Col>
                <Col span={12}>
                  <Checkbox value="M">M</Checkbox>
                </Col>
                <Col span={12}>
                  <Checkbox value="L">L</Checkbox>
                </Col>
                <Col span={12}>
                  <Checkbox value="XL">XL</Checkbox>
                </Col>
                <Col span={12}>
                  <Checkbox value="XXL">XXL</Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>
          </StyledForm>
        </StyledBody>
        <BtnGroup className="btn-group">
          <Button onClick={addInventoryCloseHandler} size={"large"}>
            Cancel
          </Button>
          <Button
            onClick={addInventoryCloseHandler}
            size={"large"}
            type="primary"
          >
            Done
          </Button>
        </BtnGroup>
      </StyledAddInventory>
    </div>
  );
};

const StyledAddInventory = styled.div`
  background: white;
  /* padding-bottom: 1rem; */
  position: absolute;
  left: 100%;
  width: 25%;
  pointer-events: none;
  z-index: 10;
  transition: all 0.5s ease-in;
  border: 1px solid #d9d9d9;
`;

const StyledHeader = styled.div`
  border-bottom: 1px solid #d9d9d9;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    color: #535353;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledForm = styled.form``;
const StyledBody = styled.form`
  padding: 1rem;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  .dropdown {
    align-self: flex-end;
    margin-bottom: 0;
    margin-left: 10px;
  }
`;

const BtnGroup = styled.div`
  border-top: 1px solid #d9d9d9;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 10px;
  padding-top: 10px;
`;

export default AddInventory;
