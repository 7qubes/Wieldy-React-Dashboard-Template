import React, {Component} from "react";
import {Button, Checkbox, Drawer, message, Card, Col, Select, Row, Avatar, notification } from "antd";

import AppModuleHeader from "components/AppModuleHeader/index";
import AddSocialAccount from "components/SocialMedia/AddSocialAccount"
import UserOutlined from "@ant-design/icons/lib/icons/UserOutlined";
// import AddPayment from "components/billing/Payment/AddPayment";

import SchedulePost from "../../../components/SocialMedia/SchedulePost";
import {Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import axios from "axios"
import SideBarSM from '../components/Sidebar'
import events from "./events";
import SocialMediaIcon from  '../components/SocialMediaIcon'

const localizer = momentLocalizer(moment);

let contactId = 723812738;
const Option = Select.Option;


class PostSchedule extends Component {

  

  onAddAccount = () => {
    this.setState({addAccount: true});
  };
  onClose = () => {
    this.setState({addAccount: false});
    this.getStatus()
  };

onShowSchedulePost = () => {
    if (this.state.selection.length == 1)
      this.setState({schedulePost: true});
    else
      notification['info']({
      message: 'Please select an account'
      });
  };
  onCloseSchedulePost = (params) => {
    
    this.setState({schedulePost: false});
  };
  onSchedulePost =(params)=>{
    var self= this
    axios.post('http://localhost:5000/addEvent', params)
		  .then(function (response) {
      console.log(response);
      notification['success']({
        message:"Post Scheduled Succesfully"
      })
		  })
		  .catch(function (error) {
			console.log(error);
		  });
  }

  onFilterOptionSelect = (option) => {
    switch (option.name) {
      case 'All Payees': {
        this.setState({
          selectedSectionId: option.id,
          filterOption: option.name,
          paymentList: this.state.allContact
        });
        break;
      }
      case 'Frequently contacted': {
        this.setState({
          selectedSectionId: option.id,
          filterOption: option.name,
          paymentList: this.state.allContact.filter((contact) => contact.frequently)
        });
        break;
      }
      default:
        break;
    }
  };

  onSaveContact = (data) => {
    let isNew = true;
    const paymentList = this.state.allContact.map((contact) => {
      if (contact.id === data.id) {
        isNew = false;
        return data
      } else {
        return contact
      }
    });
    if (isNew) {
      paymentList.push(data);
    }
    this.setState({
      alertMessage: isNew ? 'Payment Added Successfully' : 'Payment Updated Successfully',
      showMessage: true,
      paymentList: paymentList,
      allContact: paymentList
    });
    // this.onFilterOptionSelect(this.state.filterOption);
  };
  onDeleteContact = (data) => {
    this.setState({
      alertMessage: 'Contact Deleted Successfully',
      showMessage: true,
      allContact: this.state.allContact.filter((contact) => contact.id !== data.id),
      paymentList: this.state.allContact.filter((contact) => contact.id !== data.id)
    })
  };
  filterContact = (userName) => {
    const {filterOption} = this.state;
    if (userName === '') {
      this.setState({paymentList: this.state.allContact});
    } else {
      const filterContact = this.state.allContact.filter((contact) =>
        contact.name.toLowerCase().indexOf(userName.toLowerCase()) > -1);
      if (filterOption === 'All contacts') {
        this.setState({paymentList: filterContact});
      } else if (filterOption === 'Frequently contacted') {
        this.setState({paymentList: filterContact.filter((contact) => contact.frequently)});
      } else if (filterOption === 'Starred contacts') {
        this.setState({paymentList: filterContact.filter((contact) => contact.starred)});
      } else if (filterOption === 'Employee') {
        this.setState({paymentList: filterContact.filter((contact) => contact.employee)});
      } else if (filterOption === 'Vendors') {
        this.setState({paymentList: filterContact.filter((contact) => contact.vendors)});
      } else if (filterOption === 'Customers') {
        this.setState({paymentList: filterContact.filter((contact) => contact.customers)});
      }

    }
  };
  handleRequestClose = () => {
    this.setState({
      showMessage: false,
    });
  };

  constructor() {
    super();
    this.state = {
      status:[],
      selection:[],
      events:[],
      noPaymentFoundMessage: 'No Payment found in selected folder',
      alertMessage: '',
      showMessage: false,
      selectedSectionId: 1,
      drawerState: false,
      user: {
        name: 'Robert Johnson',
        email: 'robert.johnson@example.com',
        avatar: "https://via.placeholder.com/150"
      },
      searchUser: '',
      filterOption: 'All contacts',
      selectedContact: null,
      selectedContacts: 0,
      addAccount: false,
      schedulePost: false
    }
  }

  updateContactUser(evt) {
    this.setState({
      searchUser: evt.target.value,
    });
    this.filterContact(evt.target.value)
  }

  onToggleDrawer() {
    this.setState({
      drawerState: !this.state.drawerState
    });
  }
  getStatus=()=>{
    var self = this
    axios.post('http://localhost:5000/getStatus', {
			user_id: '123',
		  })
		  .then(function (response) {
			console.log(response);
			self.setState({status:response.data})
		  })
		  .catch(function (error) {
			console.log(error);
		  });
  }
  getEvents=()=>{
    var self = this
    axios.post('http://localhost:5000/getEvents', {
			user_id: '123',
		  })
		  .then(function (response) {
      console.log(response);
      var events = []
      response.data.map(e =>{
        events.push({
          'title': e.text,
          'start': new Date(e.sch_dt),
          'end': new Date(e.sch_dt),
        })
      })
			self.setState({events:events})
		  })
		  .catch(function (error) {
			console.log(error);
		  });
  }
  select=(index,checked)=>{
    var selection = this.state.selection
    var status = this.state.status
    if(checked)
      selection.push(status[index])
    else
    {
      var i = selection.indexOf(status[index])
      selection.splice(i,1)
    }
    this.setState({selection})
  }
  getSocialMediaIcon(medium){
    return SocialMediaIcon(medium)
  }
  componentDidMount(){
    this.getStatus()
    this.getEvents()
  }
  render() {
    const {
      user,
      drawerState,
      addAccount,
      schedulePost,
      status
    } = this.state;
    const SideBar = <SideBarSM 
      status={status}      
      select={this.select}
      getStatus={this.getStatus}
      onShowSchedulePost={this.onShowSchedulePost}
      onAddAccount={this.onAddAccount} 
      getSocialMediaIcon={this.getSocialMediaIcon}    />
    return (
      <div className="gx-main-content">
        <div className="gx-app-module">
          <div className="gx-d-block gx-d-lg-none">
            <Drawer
              placement="left"
              closable={false}
              visible={drawerState}
              onClose={this.onToggleDrawer.bind(this)}>
              {SideBar}
            </Drawer>
          </div>
          <div className="gx-module-sidenav gx-d-none gx-d-lg-flex">
            {SideBar}
          </div>

          <div className="gx-module-box">
            <div className="gx-module-box-header">
              <span className="gx-drawer-btn gx-d-flex gx-d-lg-none">
                  <i className="icon icon-menu gx-icon-btn" aria-label="Menu"
                     onClick={this.onToggleDrawer.bind(this)}/>
              </span>

              <AppModuleHeader placeholder="Search Social Media" notification={false} apps={false}
                               user={this.state.user}
                               onChange={this.updateContactUser.bind(this)}
                               value={this.state.searchUser}/>
            </div>
            <div className="gx-module-box-content">
              <div className="gx-module-box-topbar" style={{backgroundColor: '#6236FF'}}>
                <Avatar className="gx-mr-2" size="large" icon={<UserOutlined />}/>
                <span className="gx-contact-name" style={{color: '#ffffff'}}> @username</span>
              </div>
              <Row>
                <Col md={24}>
                  <Card className="gx-card">
                    <div className="gx-main-content">
                      <div className="gx-rbc-calendar">
                        <Calendar
                          localizer={localizer}
                          selectable
                          events={this.state.events}
                          defaultView='week'
                          scrollToTime={new Date(1970, 1, 1, 6)}
                          defaultDate={new Date()}
                          titleAccessor={(event)=>'String'}
                          onSelectEvent={event => alert(event.title)}
                          onSelectSlot={(slotInfo) => {
                            if (slotInfo.start > new Date())
                                this.setState({'startTime' :slotInfo.start.toISOString()},()=>this.onShowSchedulePost())
                          }
                        }
                        />
                      </div>
                    </div>
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
        </div>

        <AddSocialAccount open={addAccount} onClose={this.onClose}/>
        {schedulePost?
        <SchedulePost 
        open={true}
        name={this.state.selection[0]}
        selectedTime={this.state.startTime} 
        onOk = { this.onSchedulePost}
        onClose={this.onCloseSchedulePost}/>
        :""} 
      </div>
    )
  }
}

export default PostSchedule;
