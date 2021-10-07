import React from "react";
import {Avatar, Input, Modal, Rate} from "antd";
import {NotificationContainer, NotificationManager} from "react-notifications";

import IntlMessages from "util/IntlMessages";

const {TextArea} = Input;

class AddPerformance extends React.Component {
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
        title='Add Review'
        visible={open}
        onCancel={onClose}
        onOk={onClose}
        >

        <div className="gx-modal-box-row">
          <div className="gx-modal-box-form-item">
            <div className="gx-form-group">
              <span>Client Service Skills: <Rate defaultValue={4}/></span>
              <TextArea
                required
                placeholder="Client Service Skills"
                rows={3}
                // onChange={(event) => this.setState({name: event.target.value})}
                // defaultValue={name}
                margin="none"/>
            </div>
            <div className="gx-form-group">
              <span>Team Work Skills: <Rate defaultValue={4}/></span>
              <TextArea
                required
                placeholder="Team Work Skills"
                rows={3}
                margin="none"/>
            </div>
            <div className="gx-form-group">
              <span>Quality of Work: <Rate defaultValue={4}/></span>
              <TextArea
                required
                placeholder="Quality of Work"
                rows={3}
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

export default AddPerformance;
