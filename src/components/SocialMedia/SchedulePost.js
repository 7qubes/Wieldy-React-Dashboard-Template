import React from "react";
import {Col, Form, Row, Upload, Button, TimePicker, DatePicker, message, Input, Modal} from "antd";
import {NotificationContainer, NotificationManager} from "react-notifications";
import {LoadingOutlined,PlusOutlined,FacebookFilled,InstagramFilled,TwitterOutlined,LinkedinOutlined } from "@ant-design/icons";
import moment from 'moment'
import 'moment-timezone';

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
    timezone: moment.tz.guess(true),
    selectedTime : this.props.selectedTime?this.props.selectedTime:new Date().toISOString(),
    account:this.props.mode =="edit"?this.props.selectedEvent:(this.props.name?this.props.name:{'name':'','medium':''}),
    mode:this.props.mode

  };
  getSocialMediaIcon=(medium)=>{
    switch(parseInt(medium)){
      case 1:
        return <FacebookFilled style={{fontSize:'32px',color:'#1877f2'}} />
      case 2:
        return <InstagramFilled style={{fontSize:'32px',}} />
      case 3:
        return <TwitterOutlined style={{fontSize:'32px',color:'rgba(29,161,242,1.00)'}} />
      case 4:
        return <LinkedinOutlined style={{fontSize:'32px',color:'#0073b1'}} />
    }
  }
  onChange=(e,type)=>{
    var selectedTime = moment(this.state.selectedTime)
    if(type === 'date')
    {
      selectedTime.set('year',e.get('year'))
      selectedTime.set('month',e.get('month'))
      selectedTime.set('date',e.get('date'))
    }
    if(type === 'time')
    {
      selectedTime.set('hour',e.get('hour'))
      selectedTime.set('minute',e.get('minute'))
    }

    this.setState({selectedTime:selectedTime.toISOString()})

  }
  handleChange = (info) => {
    // if (info.file.status === 'uploading') {
    //   this.setState({loading: true});
    //   return;
    // }
    // if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl => this.setState({
        imageUrl,
        filename:info.file.originFileObj.name,
        loading: false,
      }));
    // }
  };
  onSubmit=()=>{
    // if( !this.state.text && !this.state.file)
    //   return 
    this.props.onOk({
      'file':this.state.imageUrl?this.state.imageUrl.split(',')[1]:"",
      'filename':this.state.filename?this.state.filename:"",
      'name':this.state.account['name'],
      'user_id':123,
      'text':this.state.text+" "+(this.state.hashtag ?this.state.hashtag:"") ,
      'medium':[this.state.account['medium']],
      'sch_dt':this.state.selectedTime
  })
  }

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
          
        <h2>{this.getSocialMediaIcon(this.state.account['medium'])}{<span>&emsp;</span>}{ this.state.account['name'] }</h2>
        }
        maskClosable={false}
        visible={open}
        onCancel={onClose}
        footer={[
          <div>
          <Button  onClick={onClose} >Discard</Button>
          <DatePicker allowClear={false} value={moment(this.state.selectedTime)} onChange={(e)=>this.onChange(e,'date')} className="gx-mb-3"/>
          <TimePicker allowClear={false} value={moment(this.state.selectedTime)} onChange={(e)=>this.onChange(e,'time')} style={{marginLeft: '5px'}}
           format={'HH:mm'}
          />
          <Button onClick={this.onSubmit} type="primary" style={{marginLeft: '5px'}}>{this.state.mode =="edit"?"Edit Post":"Schedule Post"}</Button>
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
                  customRequest={()=>console.log('')}
                  showUploadList={false}
                  beforeUpload={beforeUpload}
                  onChange={this.handleChange}
                >
                  {imageUrl ? <img src={imageUrl} alt=""/> : uploadButton}
                </Upload>
              </div>
              </Col>
              <Col md={18}>
                <TextArea className="ant-card"  onChange={(e)=>{this.setState({'text':e.target.value})} } placeholder="Write Captions here..." rows={3}/>
                <TextArea className="ant-card"  onChange={(e)=>{this.setState({'hashtag':e.target.value})}} placeholder="Add Hashtags separated by a space" rows={2}/>
                <Input placeholder="Location"/>
              </Col>
            </Row>
            <Row style={{paddingTop:20,paddingLeft:20}}>
                <h5> This will be posted on {moment.tz(moment(this.state.selectedTime), this.state.timezone).format("dddd, MMMM Do YYYY, h:mm a zz")}</h5>
            </Row>
          </div>
        </div>
        <NotificationContainer/>
      </Modal>
    );
  }
}

export default SchedulePost;
