import React from "react";

import Widget from "components/Widget/index";
import {Form, Input, Col, Row, Checkbox, DatePicker, Button} from "antd";
import EditModal from './EditModal'

const {RangePicker} = DatePicker;

class Index extends React.Component{
  constructor() {
    super();
    this.state = {
      showEdit: false
    }
  }
  showEdit = () => {
    this.setState({showEdit: true});
  };
  closeEdit = () => {
    this.setState({showEdit: false});
  };
  render() {
    const {showEdit, closeEdit} = this.state;
    return (
    <Widget styleName="gx-card-full" extra={
      <Button className="gx-btn-block ant-btn" type="primary" onClick={this.showEdit}>
        <i className="icon icon-edit gx-mr-1"/>
        <span>Edit</span>
      </Button>
      }>
      <div className="gx-px-3 gx-pt-3">
        <h2 className="gx-mb-3">AllState Payments</h2>
        <p className="gx-mb-3">2012 Corporate Lane Suite 108 Naperville, IL 60563</p>
        <p className="gx-text-grey gx-fs-sm">Last Paid $300.00 on July 20, 2020</p>
        <Row>
          <Col md={12}>
          <Checkbox>
            <span>Set up Repeating Payment</span>
            <RangePicker className="gx-mb-3 gx-w-100"/>
          </Checkbox>
            </Col>
          <Col md={12}>
          <Checkbox>
            <span>Make Payment</span>
          </Checkbox>
          </Col>
        </Row>

      </div>
      {/*<EditModal open={showEdit} onClose={this.closeEdit}/>*/}
    </Widget>
  );
  }
}

export default Index;
