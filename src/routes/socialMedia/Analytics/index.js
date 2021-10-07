import React, {Component} from "react";
import {Button, Checkbox, Drawer, message, Card, Col, Select, Row, Avatar,DatePicker,Spin} from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import AppModuleHeader from "components/AppModuleHeader/index";
import AddSocialAccount from "components/SocialMedia/AddSocialAccount"
import UserOutlined from "@ant-design/icons/lib/icons/UserOutlined";
// import AddPayment from "components/billing/Payment/AddPayment";
import ProfileGrowth from "./ProfileGrowth";
import ProfileInteractions from "./ProfileInteractions";
import AudienceDemographics from "./AudienceDemographics";
import InstagramCharts from "./InstagramCharts";
import moment from 'moment'
import SideBarSM from '../components/Sidebar'
import axios from "axios"
import SocialMediaIcon from  '../components/SocialMediaIcon'
import Metrics from 'components/Metrics'

const { RangePicker } = DatePicker;

let contactId = 723812738;
const Option = Select.Option;

class StandardPane extends Component {

  render(){
    return <Row style={{paddingTop:'15%',paddingLeft:'15%'}}>
       <Col xl={8} lg={24} md={8} sm={24} xs={24}>
         
       <Metrics title="Followers">
      <Row>
        <Col xl={11} lg={12} md={24} sm={12} xs={12}>
          <h1 className="gx-mb-1 gx-revenue-title">2,167</h1>
        </Col>
      </Row>
    </Metrics>
    </Col>
    <Col xl={8} lg={24} md={8} sm={24} xs={24}>

    <Metrics title="Posts">
      <Row>
        <Col xl={11} lg={12} md={24} sm={12} xs={12}>
          <h1 className="gx-mb-1 gx-revenue-title">2,167</h1>
        </Col>
      </Row>
    </Metrics>
    </Col>
    </Row>
  }
}

class SocialMedia extends Component {

  onAddAccount = () => {
    this.setState({addAccount: true});
  };
  onClose = () => {
    this.setState({addAccount: false});
  };

  handleChange=(e)=>{
    this.setState({selectPane:e});
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
    this.setState({selection,selectedBucket:7})
    if(selection.length > 0)
      this.getData(selection[0],moment().valueOf(),moment().subtract(7, 'days').valueOf())

  }
  constructor() {
    super();
    this.state = {
      status:[],
      selection:[],
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
      page_city:[],
      page_age:[],
      selectPane:'',
      buckets:{ 7:'7 days',30:'1 Month',90:'3 Months' },
      selectedBucket:7,
      options:{
        1:{
          "discovery_1":"Profile Growth & Discovery",
          "audience_1":"Audience Demographics",
          "interaction_1":"Profile Interactions"
        },
        2:{
          "instagram":"Comments and Followers"
        },
        3:{
          "twitter":"Profile Interactions"
        },
       4:{
          "":""
        }
      }
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
  async getData(account,until,since){
    this.setState({loading:true})
    until = parseInt(until/1000)
    since = parseInt(since/1000)
    var user_id=123
    console.log(account,account.medium == "1")
    if( account.medium == "1")
      await fetch("http://localhost:5000/fb_stats?user_id="+user_id+"&name="+account.name+"&since="+since+"&until="+until)
      .then(res => res.json())
        .then(result => {
          result['page_views'].map(e => e.name = moment.unix(e.name).format('MM-DD'))
          result['page_likes'].map(e => e.name = moment.unix(e.name).format('MM-DD'))
          result['page_fans'].map(e => e.name = moment.unix(e.name).format('MM-DD'))
          this.setState(
            {
            bar_data:result['page_views'],
            page_fans:result['page_fans'],
            page_likes:result['page_likes'],
            page_age:result['page_age'],
            page_city:result['page_city'],
            loading:false,
            selectPane:"home"

          })
        })
      else if ( account.medium == "2")
      await fetch("http://localhost:5000/insta_stats?user_id="+user_id+"&name="+account.name+"&since="+since+"&until="+until)
      .then(res => res.json())
        .then(result => {
          this.setState(
            {
            insta_data:result,
            loading:false,
            selectPane:"home"
          })
        })
     
  }
  getSocialMediaIcon(medium){
    return SocialMediaIcon(medium)
  }
  async componentDidMount(){
    this.getStatus()
  }
  getStatus=()=>{
    var self = this
    axios.post('http://localhost:5000/getStatus', {
			user_id: '123',
		  })
		  .then(function (response) {
			self.setState({status:response.data})
		  })
		  .catch(function (error) {
			console.log(error);
		  });
  }
  renderComponentDisplay = () => {
    if (this.state.selectPane === "discovery_1") {
        return <ProfileGrowth {...this.state}></ProfileGrowth>;
    } else if (this.state.selectPane === "interaction_1") {
        return <ProfileInteractions {...this.state}></ProfileInteractions>;
    } else if (this.state.selectPane === "audience_1") {
        return <AudienceDemographics {...this.state} ></AudienceDemographics>;
    }
    else if (this.state.selectPane === "instagram") {
      return <InstagramCharts {...this.state} ></InstagramCharts>;
  }
  else return <StandardPane {...this.state} ></StandardPane>;
};
  render() {
    const {
      user,
      status,
      drawerState,
      addAccount,
      schedulePost,
      selectedBucket,
      loading,
      options
    } = this.state;

    const SideBar = <SideBarSM 
    status={status}      
    select={this.select}
    getStatus={this.getStatus}
    onAddAccount={this.onAddAccount}
    getSocialMediaIcon={this.getSocialMediaIcon}
         />

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
                <Avatar className="gx-mr-2" size="large" icon={this.state.selection.length > 0 ?this.getSocialMediaIcon(this.state.selection[0].medium) :<UserOutlined />}/>
    <span className="gx-contact-name" style={{color: '#ffffff'}}>{this.state.selection.length > 0 ?this.state.selection[0].name :"Please Select a Social Media Account"}</span>
              </div>
              
              { this.state.loading ? <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />:
              
              (this.state.selection.length > 0 ?
              <Col>
                <Row>
                  <Col md={8}>
                    <Select id="options_views" onChange={this.handleChange}  className="gx-mr-3 gx-mb-3" defaultValue={"home"} style={{width: 300}}>
                    <Option value={"home"}>Followers and Posts</Option>
                      {
                        Object.entries(options[this.state.selection[0].medium]).map(
                          ([k,v])=> <Option value={k}>{v}</Option>
                        )
                      }
                    </Select>
                  </Col>
                  { ["audience_1","instagram","home"].indexOf(this.state.selectPane) < 0 &&  this.state.selectPane != ""  ?
                  <Col md={16}>
                      {Object.keys(this.state.buckets).map(e=>
                        <Button style={{margin:"8px"}} size="small" className={selectedBucket == e ?"btn-primary":"gx-btn-outline-primary"} 
                        onClick={()=>{
                          this.getData(this.state.selection[0],moment().valueOf(),moment().subtract(e, 'days').valueOf())
                          this.setState({selectedBucket:e})
                        }}>
                          {this.state.buckets[e]}
                          </Button>
                        )
                    }
                    <RangePicker onChange={(e)=>{
                      if(e[1] && e[0])
                      {
                      this.getData(this.state.selection[0],e[1].valueOf(),e[0].valueOf())
                      this.setState({selectedBucket:'user'})
                      }
                      }} size="small"   />
                  </Col>:""}
                </Row>
              <Row>
                <Col md={24}>
                {this.renderComponentDisplay()}
                </Col>
              </Row>
              </Col>:"")

}         
            </div>
          </div>
        </div>

        <AddSocialAccount open={addAccount} onClose={this.onClose}/>
      </div>
      </div>
    )
  }
}

export default SocialMedia;
