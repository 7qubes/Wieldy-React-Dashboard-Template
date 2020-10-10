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
          <h2>Payee Today</h2>
          <p>July 25, 2020</p>
        </div>
        <button className="gx-btn gx-btn-primary gx-text-white gx-mb-1">Pay</button>
      </div>
      {/*<EditModal open={showEdit} onClose={this.closeEdit}/>*/}
    </Widget>
  );
  }
}

export default Index;
