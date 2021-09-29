import React from "react";
import {Avatar, Input, Modal, Rate} from "antd";
import {NotificationContainer, NotificationManager} from "react-notifications";

import IntlMessages from "util/IntlMessages";

const {TextArea} = Input;

class AddDocument extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   name: this.props.name,
    //   nickName: this.props.nickName
    // }
  }

  render() {
    const {open, onClose} = this.props;
    // const {name, nickName} = this.state;

    return (
      <Modal
        title='Add Document'
        visible={open}
        onCancel={onClose}
        onOk={onClose}
        >

        <div className="gx-modal-box-row">
          <div className="gx-modal-box-form-item">
            <div className="gx-form-group">
              <span>ID#</span>
              <Input
                required
                placeholder="Client Service Skills"
                margin="none"/>
            </div>
            <div className="gx-form-group">
              <span>Contractor</span>
              <Input
                required
                placeholder="Contractor"
                margin="none"/>
            </div>
            <div className="gx-form-group">
              <span>Type</span>
              <Input
                required
                placeholder="Type"
                margin="none"/>
            </div>
            <div className="gx-form-group">
              <span>Judgement and Decision Making: <Rate defaultValue={4}/></span>
              <TextArea
                required
                placeholder="Judgement and Decision Making"
                rows={3}
                margin="none"/>
            </div>
          </div>
        </div>
        <NotificationContainer/>
      </Modal>
    );
  }
}

export default AddDocument;
