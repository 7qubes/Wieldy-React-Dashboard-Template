import React, {Component} from "react";
import {Button, Checkbox, Drawer, message, Card, Col, Select, Row, Avatar} from "antd";
import CustomScrollbars from "util/CustomScrollbars";
import AppModuleHeader from "components/AppModuleHeader/index";
import AddSocialAccount from "components/SocialMedia/AddSocialAccount"
import UserOutlined from "@ant-design/icons/lib/icons/UserOutlined";
// import AddPayment from "components/billing/Payment/AddPayment";
import IntlMessages from "util/IntlMessages";
import SchedulePost from "../../../components/SocialMedia/SchedulePost";
import FollowerGraph from "../../../components/SocialMedia/FollowerGraph";
import BarCharts from "../../../components/SocialMedia/BarCharts";
import {BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip,ResponsiveContainer, Legend,} from 'recharts';

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
      loading:true,
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
      page_likes:{}
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

  async componentDidMount(){
     fetch("http://localhost:5000/fb_stats/page_views")
     .then(res => res.json())
      .then(result => {
        console.log(result)
        this.setState({bar_data:result,loading:false})
      })
      fetch("http://localhost:5000/fb_stats/page_likes")
      .then(res => res.json())
       .then(result => {
         console.log(result)
         this.setState({page_likes:result,loading:false})
       })
			fetch("http://localhost:5000/fb_stats/page_fans_age")
			.then(res => res.json())
				.then(result => {
					console.log(result)
					this.setState({page_age:result,loading:false})
				})
	}

  render() {
    const {
      user,
      drawerState,
      addAccount,
      schedulePost
    } = this.state;

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
            { this.state.loading ? <div>Loading...</div>:
            <div className="gx-module-box-content">
              <div className="gx-module-box-topbar" style={{backgroundColor: '#6236FF'}}>
                <Avatar className="gx-mr-2" size="large" icon={<UserOutlined />}/>
                <span className="gx-contact-name" style={{color: '#ffffff'}}> @username</span>
              </div>
              <Row>
                <Col md={12}>
                  <Select className="gx-mr-3 gx-mb-3" defaultValue="Profile Growth & Discovery" style={{width: 300}}>
                    <Option value="discovery">Profile Growth & Discovery</Option>
                    <Option value="interaction">Profile Interactions</Option>
                    <Option value="audience">Audience Demographics</Option>
                  </Select>
                </Col>
                <Col md={12}>
                  <Button size="small" className="gx-btn-outline-primary">7 Days</Button>
                  <Button size="small" className="gx-btn-outline-primary">1 Month</Button>
                  <Button size="small" className="gx-btn-outline-primary">3 Months</Button>
                </Col>
              </Row>
              <Row>
                <Col md={24}>
                  <Card className="gx-card" title="Page Views">
                    <BarCharts data={this.state.bar_data}/>
                  </Card>
                  <Card className="gx-card" title="Page Likes">
                    <BarCharts data={this.state.page_likes}/>
									</Card>
									<Card className="gx-card" title="Demographics">
									<ResponsiveContainer width="100%" height={200}>
		<BarChart
			width={500}
			height={300}
			data={this.state.page_age}
			margin={{
				top: 5, right: 30, left: 20, bottom: 5,
			}}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="name" />
				<YAxis />
				<Tooltip />
				<Legend />

				<Bar dataKey="M" fill="#8884d8" />
					<Bar dataKey="F" fill="#82ca9d" />
					<Bar dataKey="U" fill="#82ca9d" />
			</BarChart>
	</ResponsiveContainer>

                  </Card>
                  <Card className="gx-card" title="Followers">
                    <FollowerGraph/>
                  </Card>
                  <Card className="gx-card" title="Followers">
                    <FollowerGraph/>
                  </Card>
                </Col>
              </Row>

            </div>
          }
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
