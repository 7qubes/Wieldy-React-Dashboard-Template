import React, {Component} from "react";
import {Button, Checkbox, Drawer, message, Card, Col, Select, Row, Avatar,DatePicker,Spin} from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import CustomScrollbars from "util/CustomScrollbars";
import AppModuleHeader from "components/AppModuleHeader/index";
import AddSocialAccount from "components/SocialMedia/AddSocialAccount"
import UserOutlined from "@ant-design/icons/lib/icons/UserOutlined";
// import AddPayment from "components/billing/Payment/AddPayment";
import IntlMessages from "util/IntlMessages";
import SchedulePost from "../../../components/SocialMedia/SchedulePost";
import ProfileGrowth from "./ProfileGrowth";
import ProfileInteractions from "./ProfileInteractions";
import AudienceDemographics from "./AudienceDemographics";
import moment from 'moment'

const { RangePicker } = DatePicker;

let contactId = 723812738;
const Option = Select.Option;

const filterOptions = [
  {
    id: 1,
    name: '@username',
  }, {
    id: 2,
    name: '@username',
  }, {
    id: 3,
    name: '@username',
  }
];

class SocialMedia extends Component {

  ContactSideBar = (user) => {
    return <div className="gx-module-side">
      <div className="gx-module-side-header">
        <div className="gx-module-logo">
          <i className="icon icon-compose gx-mr-4"/>
          <span><IntlMessages id="chat.media"/></span>
        </div>
      </div>

      <div className="gx-module-side-content">
        <CustomScrollbars className="gx-module-side-scroll">
          <div className="gx-module-add-task">
            <Button className="gx-btn-block ant-btn" type="primary" aria-label="add"
                    onClick={this.onShowSchedulePost}>
              <i className="icon icon-add-circle gx-mr-1"/>
              <span>Schedule a Post</span>
            </Button>
          </div>
          <div className="gx-module-side-nav">
            <ul className="gx-module-nav">
              {filterOptions.map(option => <li key={option.id} className="gx-nav-item">
                  <span
                    className={`gx-link ${option.id === this.state.selectedSectionId ? 'active' : ''}`} onClick={
                    this.onFilterOptionSelect.bind(this, option)
                  }>
                    <Checkbox className="gx-icon-btn"/>
                    <Avatar className="gx-mr-2" shape="square" size="small" icon={<UserOutlined />}/>
                    <span className="gx-contact-name">{option.name}</span>
                  </span>
                </li>
              )}
            </ul>
          </div>
          <div className="gx-module-add-task">
            <Button className="gx-btn-block ant-btn" aria-label="add"
                    onClick={this.onAddAccount}>
              <i className="icon icon-add-circle gx-mr-1"/>
              <span>Add account</span>
            </Button>
          </div>
        </CustomScrollbars>
      </div>
    </div>

  };

  onAddAccount = () => {
    this.setState({addAccount: true});
  };
  onClose = () => {
    this.setState({addAccount: false});
  };

  onShowSchedulePost = () => {
    this.setState({schedulePost: true});
  };
  onCloseSchedulePost = () => {
    this.setState({schedulePost: false});
  };

  handleChange=(e)=>{
    this.setState({selectPane:e},()=>console.log(this.state));
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
      loading:false,
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
      schedulePost: false,
      bar_data:{},
      page_likes:{},
      selectPane:'interaction',
      buckets:{ 7:'7 days',30:'1 Month',90:'3 Months' },
      selectedBucket:7
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
  async getData(until,since){
    this.setState({loading:true})
    until = parseInt(until/1000)
    since = parseInt(since/1000)
    var user_id=123
    var name="Plutus"
    await fetch("http://localhost:5000/fb_stats/page_views?user_id="+user_id+"&name="+name+"&since="+since+"&until="+until)
     .then(res => res.json())
      .then(result => {
        result.map(e => e.name = moment.unix(e.name).format('MM-DD')
          )
        this.setState({bar_data:result})
        fetch("http://localhost:5000/fb_stats/page_likes?user_id="+user_id+"&name="+name+"&since="+since+"&until="+until)
        .then(res => res.json())
         .then(result => {
          
          result.map(e => e.name = moment.unix(e.name).format('MM-DD')
          )
           this.setState({page_likes:result})
           fetch("http://localhost:5000/fb_stats/page_fans_age?user_id="+user_id+"&name="+name)
          .then(res => res.json())
            .then(result => {
              fetch("http://localhost:5000/fb_stats/page_fans_city?user_id="+user_id+"&name="+name)
          .then(res => res.json())
            .then(result => {
              console.log(result)
              this.setState({page_city:result,loading:false})
            })
              console.log(result)
              this.setState({page_age:result})
            })
         })
      })
     
  }

  async componentDidMount(){
    this.getData(moment().valueOf(),moment().subtract(7, 'days').valueOf())
    this.setState({selectedBucket:7})
    //  fetch("http://localhost:5000/fb_stats/page_views")
    //  .then(res => res.json())
    //   .then(result => {
    //     console.log(result)
    //     this.setState({bar_data:result,loading:false})
    //   })
    //   fetch("http://localhost:5000/fb_stats/page_likes")
    //   .then(res => res.json())
    //    .then(result => {
    //      console.log(result)
    //      this.setState({page_likes:result,loading:false})
    //    })
			
	}
  renderComponentDisplay = () => {
    if (this.state.selectPane === "discovery") {
        return <ProfileGrowth {...this.state}></ProfileGrowth>;
    } else if (this.state.selectPane === "interaction") {
        return <ProfileInteractions props={this.state}></ProfileInteractions>;
    } else if (this.state.selectPane === "audience") {
        return <AudienceDemographics {...this.state} ></AudienceDemographics>;
    }
};
  render() {
    const {
      user,
      drawerState,
      addAccount,
      schedulePost,
      selectedBucket,
      loading
    } = this.state;
    console.log(this.state.selectPane)
    return (
      <div>
      
      <div className="gx-main-content">
        <div className="gx-app-module">
          <div className="gx-d-block gx-d-lg-none">
            <Drawer
              placement="left"
              closable={false}
              visible={drawerState}
              onClose={this.onToggleDrawer.bind(this)}>
              {this.ContactSideBar()}
            </Drawer>
          </div>
          <div className="gx-module-sidenav gx-d-none gx-d-lg-flex">
            {this.ContactSideBar(user)}
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
                <Col md={8}>
                  <Select id="options_views" onChange={this.handleChange}  className="gx-mr-3 gx-mb-3" defaultValue={this.state.selectPane} style={{width: 300}}>
                    <Option value="discovery">Profile Growth & Discovery</Option>
                    <Option value="interaction">Profile Interactions</Option>
                    <Option value="audience">Audience Demographics</Option>
                  </Select>
                </Col>
                <Col md={16}>
                {
                    Object.keys(this.state.buckets).map(e=>
                      <Button style={{margin:"8px"}} size="small" className={selectedBucket == e ?"btn-primary":"gx-btn-outline-primary"} 
                      onClick={()=>{
                        this.getData(moment().valueOf(),moment().subtract(e, 'days').valueOf())
                        this.setState({selectedBucket:e})
                      }}>
                        {this.state.buckets[e]}
                        </Button>
                      )
                  }
                  <RangePicker onChange={(e)=>{
                    this.getData(e[1].valueOf(),e[0].valueOf())
                    this.setState({selectedBucket:'user'})
                    
                    }} size="small"   />
                </Col>
              </Row>
              { this.state.loading ? <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />:
              <Row>
                <Col md={24}>
                {this.renderComponentDisplay()}
                </Col>
              </Row>

}
            </div>
          </div>
        </div>

        <AddSocialAccount open={addAccount} onClose={this.onClose}/>
        <SchedulePost open={schedulePost} onClose={this.onCloseSchedulePost}/>
      </div>
      </div>
    )
  }
}

export default SocialMedia;
