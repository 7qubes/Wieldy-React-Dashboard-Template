import React from "react";
import { Menu, Input, Dropdown, message, Button, Image } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
// styling
import styled from "styled-components";

const AddBOM = ({ onAddNewHandler }) => {
  console.log(onAddNewHandler);

  const onChange = (e) => {
    console.log(e);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" icon={<UserOutlined />}>
        Template 1
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        Template 2
      </Menu.Item>
      <Menu.Item key="3" icon={<UserOutlined />}>
        Template 3
      </Menu.Item>
    </Menu>
  );

  function handleMenuClick(e) {
    message.info("Click on menu item.");
    console.log("click", e);
  }

  const { TextArea } = Input;
  return (
    <div>
      <AddNewSection className="add-new-section">
        <AddTitle className="add-new-title">
          <h2>Add New</h2>
        </AddTitle>
        <AddContent className="AddContent">
          <RowData className="add-row">
            <div className="img-containter">
              <Image
                width={140}
                height={140}
                src="error"
                fallback="data:image/png;base64,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"
              />
            </div>
            <div>
              <h4>Name:</h4>
              <Input placeholder="Name" allowClear onChange={onChange} />
            </div>
            <div>
              <h4>Part Number:</h4>
              <Input placeholder="Part Number" allowClear onChange={onChange} />
            </div>
            <div>
              <h4>Template</h4>
              <Dropdown
                style={{ marginBottom: 0, alignSelf: "flex-end" }}
                overlay={menu}
                trigger={["click"]}
                className="dropdown"
              >
                <Button style={{ marginBottom: 0 }}>
                  Template <DownOutlined />
                </Button>
              </Dropdown>
            </div>
          </RowData>
          <RowData className="add-row">
            <div>
              <h4>Quantity</h4>
              <Input placeholder="Quantity" allowClear onChange={onChange} />
            </div>
            <div>
              <h4>Total Cost:</h4>
              <Input placeholder="Total Cost" allowClear onChange={onChange} />
            </div>
            <div>
              <h4>Vendor</h4>

              <Input placeholder="Vendor" allowClear onChange={onChange} />
            </div>
            <div>
              <h4>Description</h4>
              <Input placeholder="Description" allowClear onChange={onChange} />
            </div>
          </RowData>
          <RowData className="add-row">
            <div>
              <h4>Cost:</h4>
              <Input placeholder="Cost" allowClear onChange={onChange} />
            </div>
            <div>
              <h4>Quantity On Hand</h4>
              <Input
                placeholder="Quantity on Hand"
                allowClear
                onChange={onChange}
              />
            </div>
            <div>
              <h4>Unit</h4>
              <Input placeholder="Unit" allowClear onChange={onChange} />
            </div>
            <div>
              <h4>Inventory Cost</h4>
              <Input
                placeholder="Inventory Cost"
                allowClear
                onChange={onChange}
              />
            </div>
          </RowData>
          <RowData className="add-row">
            <div>
              <h4>Date Created</h4>

              <Input
                placeholder="Date Created"
                allowClear
                onChange={onChange}
              />
            </div>
            <div>
              <h4>Date Saved</h4>

              <Input placeholder="Date Saved" allowClear onChange={onChange} />
            </div>
            <div>
              <h4>Drawing File Link</h4>
              <Input
                placeholder="Drawing File Link"
                allowClear
                onChange={onChange}
              />
            </div>
            <div>
              <h4>File Name</h4>
              <Input placeholder="File Name" allowClear onChange={onChange} />
            </div>
          </RowData>
          <RowData className="add-row">
            <div>
              <h4>Saved By</h4>
              <Input placeholder="Saved By" allowClear onChange={onChange} />
            </div>
            <div>
              <h4>Configuration Name</h4>
              <Input
                placeholder="Configuration Name"
                allowClear
                onChange={onChange}
              />
            </div>
            <div>
              <h4>CAD File in Google Drive</h4>

              <Input
                placeholder="CAD File in Google Drive"
                allowClear
                onChange={onChange}
              />
            </div>
            <div>
              <h4>3D View File</h4>
              <Input
                placeholder="3D View File"
                allowClear
                onChange={onChange}
              />
            </div>
          </RowData>
          <RowData className="add-row">
            <div>
              <h4>Type</h4>
              <Input placeholder="Type" allowClear onChange={onChange} />
            </div>
            <div>
              <h4>2D File Link</h4>
              <Input
                placeholder="2D File Link"
                allowClear
                onChange={onChange}
              />
            </div>
            <div>
              <h4>Components</h4>
              <Input placeholder="Components" allowClear onChange={onChange} />
            </div>
            <div>
              <h4>Part State</h4>
              <Input placeholder="Part State" allowClear onChange={onChange} />
            </div>
          </RowData>
        </AddContent>
        <BtnGroup className="btn-group">
          <Button
            style={{ marginBottom: "15px" }}
            onClick={onAddNewHandler}
            size={"large"}
          >
            Cancel
          </Button>
          <Button
            style={{ marginBottom: "15px" }}
            onClick={onAddNewHandler}
            size={"large"}
            type="primary"
          >
            Add
          </Button>
        </BtnGroup>
      </AddNewSection>
    </div>
  );
};

const AddNewSection = styled.div`
  width: 100%;
`;

const AddTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;
const AddContent = styled.div``;

const RowData = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 1.4rem 1rem;
  div {
    margin: 0 1rem;
    flex-grow: 1;
    width: 50%;
  }
  div h4 {
    margin: 0;
    padding: 0 0.8rem 0;
  }
`;

const BtnGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 28px;
`;

export default AddBOM;
