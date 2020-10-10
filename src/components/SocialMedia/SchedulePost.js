import React from "react";
import {Col, Form, Row, Upload, Button, TimePicker, DatePicker, message, Input, Modal} from "antd";
import {NotificationContainer, NotificationManager} from "react-notifications";
import {LoadingOutlined,PlusOutlined} from "@ant-design/icons";

const FormItem = Form.Item;
const {TextArea} = Input;

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJPG = file.type === 'image/jpeg';
  if (!isJPG) {
    message.error('You can only upload JPG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJPG && isLt2M;
}

class SchedulePost extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    loading: false,
  };
  handleChange = (info) => {
    if (info.file.status === 'uploading') {
      this.setState({loading: true});
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl => this.setState({
        imageUrl,
        loading: false,
      }));
    }
  };


  render() {
    const {open, onClose} = this.props;
    const uploadButton = (
      <div>
        {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const imageUrl = this.state.imageUrl;

    return (
      <Modal
        // style={{backgroundColor: '#6236FF'}}
        title={
            <h2>@username</h2>
        }
        visible={open}
        onCancel={onClose}
        onOk={onClose}
        footer={[
          <div>
          <Button>Discard</Button>
          <DatePicker className="gx-mb-3"/>
          <TimePicker value={this.state.value} onChange={this.onChange} style={{marginLeft: '5px'}}/>
          <Button type="primary" style={{marginLeft: '5px'}}>Schedule Post</Button>
            </div>
        ]}
        >
        {/*<Modal.Header>Connect Bank</Modal.Header>*/}
        <div className="gx-modal-box-row">
          <div className="gx-modal-box-form-item">
            <Row>
              <Col md={6}>
              <div className="gx-form-group">
                <Upload
                  name="avatar"
                  listType="picture-card"
                  className="avatar-uploader"
                  showUploadList={false}
                  action="//jsonplaceholder.typicode.com/posts/"
                  beforeUpload={beforeUpload}
                  onChange={this.handleChange}
                >
                  {imageUrl ? <img src={imageUrl} alt=""/> : uploadButton}
                </Upload>
              </div>
              </Col>
              <Col md={18}>
                <TextArea className="ant-card" placeholder="Write Captions here..." rows={3}/>
                <TextArea className="ant-card" placeholder="Hashtags" rows={2}/>
                <Input placeholder="Location"/>
              </Col>
            </Row>
          </div>
        </div>
        <NotificationContainer/>
      </Modal>
    );
  }
}

export default SchedulePost;
