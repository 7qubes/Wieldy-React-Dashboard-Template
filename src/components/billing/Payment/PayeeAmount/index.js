import React from "react";

import Widget from "components/Widget/index";
import {Form, Input, Col, Row, Checkbox, Button} from "antd";
import EditModal from './EditModal'

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
    <Widget styleName="gx-card-full">
      <div className="gx-text-center gx-px-3 gx-pt-3">
        <div className="gx-mb-3">
          <h2>Choose Amount</h2>
          <h1>$0.00</h1>
          <p>Pay From</p>
          <p>Checking Account(123456789)</p>
        </div>
      </div>
      {/*<EditModal open={showEdit} onClose={this.closeEdit}/>*/}
    </Widget>
  );
  }
}

export default Index;
