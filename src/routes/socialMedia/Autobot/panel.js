import React from "react";
import { Col, Row, Avatar, Tabs, Menu, Dropdown, Button, Select } from "antd";
import Widget from "components/Widget";
import { RadialBarChart, RadialBar, Legend } from 'recharts';
import AddTags from "../../../components/SocialMedia/AddTags";
import AddComment1 from "../../../components/SocialMedia/AddComment1";
import { DownOutlined } from '@ant-design/icons';
const { Option } = Select;
const TabPane = Tabs.TabPane;

const userImageList = [
    {
        id: 1,
        image: "/src/assets/images/customer_1.jpg",
    },
    {
        id: 2,
        image: "assets/images/customer_2.jpg",
    },
    {
        id: 3,
        image: "assets/images/customer_3.jpg",

    },
    {
        id: 4,
        image: "/src/assets/images/customer_1.jpg",
    },
    {
        id: 5,
        image: "assets/images/customer_2.jpg",
    },
    {
        id: 6,
        image: "assets/images/customer_3.jpg",

    },
    {
        id: 7,
        image: "assets/images/customer_3.jpg",

    }
]
const automation_settings = ['Activity Speed', 'Days', 'Time', 'Unfollow']
const data = [
    {
        name: 'Categories', uv: 31.47, fill: '#933CCC',
    },
    {
        name: 'Similar Accounts', uv: 26.69, fill: '#038FDE',
    },
    {
        name: 'Hastags', uv: 15.69, fill: '#00BF9A',
    },
    {
        name: 'Location', uv: 8.22, fill: '#14F4C9',
    }
];

const categories = ['Art', 'Entertainment', 'Fashion', 'Food', 'Health & Fitness', 'Inspiration', 'Lifestyle', 'Music', 'Photography', 'Sports', 'Travel', 'Business'];
const style = {
    top: 10,
    left: 500,
    lineHeight: '64px',
};
class Panel extends React.Component {
    constructor() {
        super();
        this.state = {
            tags: ['Leave your work', 'Wow!'],
            quick_settings: { 'Likes': 'NO', 'Comments': 'NO', 'Follows': 'NO', 'Unfollows': 'NO', 'Watch Stories': 'NO' },
            days: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
            save_settings:{
                categories:"",
                similar_accounts:[],
                hashtags:[],
                locations:[],
                keywords:[],
                organization:[],
                preset_comments:[],
                quick_settings: { 'Likes': 'NO', 'Comments': 'NO', 'Follows': 'NO', 'Unfollows': 'NO', 'Watch Stories': 'NO' },
                automation_settings:{'activity_speed':'Slow','days':[],'Time':'Fast','Unfollow':'Fast'},
                new_followers:{}
            }
        }

    }
    onChangeSetting=(e,option)=>{
        console.log(e,option)
        // this.state({save_settings:{...opttion:e}})
        // console.log(this.state.save_settings)
    }
    opt=(option) => (
        <Menu onClick={(e)=>this.onChangeSetting(e,option)}>
            <Menu.Item key="1" >
                Yes
          </Menu.Item>
            <Menu.Item key="2" >
                NO
          </Menu.Item>
        </Menu>
    );
    speed=(opt) => (
        <Menu onClick={(e)=>this.onChangeSetting(e.key,opt)}>
            <Menu.Item key="1" >
                Slow
          </Menu.Item>
            <Menu.Item key="2" >
                Medium
          </Menu.Item>
            <Menu.Item key="3" >
                Fast
          </Menu.Item>
        </Menu>
    );
   
    activity_speed(setting) {
        return (
            setting != "Days"?
            <div style={{ float: "right" }}>
                <Dropdown overlay={()=>this.speed("save_settings.automation_settings.activity_speed")} >
                    <Button id="save_settings.automation_settings.activity_speed" onChange={this.onChangeSetting}>
                        {this.state.save_settings.automation_settings.activity_speed} <DownOutlined />
                    </Button>
                </Dropdown>
            </div>:<div>
                <Row style={{paddingLeft:24}} >
                {this.state.days.map(e=>
                    <Col>
                    <Button type="text" size="small" style={{padding:5}} onChange={this.onChangeSetting}>{e}</Button>
                    </Col>)}
                    </Row>
            </div>
        )
    }
    
    activity_days() {
        return (
            <div style={{ float: "right" }}>

            </div>
        )
    }
    save_settings(){
        console.log(this.state);
    }
    render() {
        return (
            <>
                <Row>
                    <Col span={24}>
                        <div className="gx-card ">
                            
                            <Row>
                                <Col xl={6} lg={12} md={12} sm={12} xs={24}>
                                    <div className="gx-module-box-topbar">
                                        <h3 >New Followers</h3>
                                    </div>

                                </Col>

                                <Col xl={4} lg={4} md={12} sm={12} xs={24} className="gx-audi-col">
                                    <div className="gx-module-box-topbar">
                                        <a href="">Load More</a>
                                    </div>

                                </Col>
                                <Col xl={14} lg={12} md={6} sm={12} xs={24}>
                                    <div  className="gx-module-box-topbar"> 
                                        <ul className="gx-list-inline" style={{ margin: 0 }}>
                                            {userImageList.map((user, index) =>
                                                <li key={index}>
                                                    <Avatar style={{ width: 50, height: 50 }} />
                                                </li>
                                            )
                                            }
                                        </ul>
                                    </div>
                                </Col>

                            </Row>
                            
                        </div>

                    </Col>
                    <Col span={18}>
                        <div className="gx-card">
                            <div className="gx-card-body">
                                <p className="gx-fs-sm ">Create a custom audience of your own ! utilize our automation tools to find your own niche and focus on being a content creater</p>
                            </div>
                        </div>
                        <div className="gx-card">

                            <Widget title="" >
                                <Tabs defaultActiveKey="1">
                                    <TabPane tab="Your Target Audience" key="1">
                                        <RadialBarChart width={400} height={300} cx={150} cy={150} innerRadius={20} outerRadius={140} barSize={10} data={data}>
                                            <RadialBar minAngle={0} background clockWise dataKey="uv" />
                                            <Legend iconSize={15} width={250} height={250} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
                                        </RadialBarChart>
                                    </TabPane>
                                </Tabs>
                            </Widget>


                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="gx-card">

                            <Widget title="" >
                                <Tabs defaultActiveKey="1">
                                    <TabPane tab="Quick Settings" key="1">
                                        {
                                            Object.entries(this.state.quick_settings).map(([option, value]) =>
                                                <li key={option}>
                                                    {option}
                                                    <div style={{ float: "right" }}>
                                                        <Dropdown  overlay={()=>this.opt(option+value)} >
                                                            <Button>
                                                                {value} <DownOutlined />
                                                            </Button>
                                                        </Dropdown>
                                                    </div>
                                                    <div style={{ clear: "both" }}></div>
                                                </li>
                                            )
                                        }
                                    </TabPane>
                                    <TabPane key="2">
                                        {userImageList.map((user, index) =>
                                            <li key={index}>
                                                <Avatar className="gx-mr-2" size="large" />
                                            </li>
                                        )
                                        }
                                    </TabPane>
                                </Tabs>
                            </Widget>


                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col span={18}>
                        <Row>
                            <Col span={12}>
                                <div className="gx-card">
                                    <Widget title="" >
                                        <Tabs defaultActiveKey="1">
                                            <TabPane tab="Categories" key="1">
                                                <p>Choose the category that best describes the type of content you usually share.</p>
                                                <Select
                                                    showSearch
                                                    style={{ width: '100%' }}
                                                    placeholder="Art"
                                                    onChange={(e)=>this.onChangeSetting(e,"categories")}
                                                >
                                                    {categories.map((p) => {
                                                        return <Option value={p} >{p}</Option>
                                                    })}
                                                </Select>
                                            </TabPane>

                                        </Tabs>
                                    </Widget>
                                </div>
                            </Col>
                            <Col span={12}>
                                <div className="gx-card">
                                    <Widget title="" >
                                        <Tabs defaultActiveKey="1">
                                            <TabPane tab="Similar Accounts" key="1">
                                                <p>Add at least 3 users that have similar content to your or whose audience you wish to attract</p>
                                            </TabPane>

                                        </Tabs>
                                    </Widget>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col span={12}>
                                <div className="gx-card">
                                    <Widget title="" >
                                        <Tabs defaultActiveKey="1">
                                            <TabPane tab="Hastags" key="1">
                                                <p>Add at least 4 hashtags that are relevant to your account and commonly used by the audience you wish to attract</p>
                                                <AddTags title="Hashtags" />
                                            </TabPane>

                                        </Tabs>
                                    </Widget>
                                </div>
                            </Col>
                            <Col span={12}>
                                <div className="gx-card">
                                    <Widget title="" >
                                        <Tabs defaultActiveKey="1">
                                            <TabPane tab="Locations" key="1">
                                                <AddTags title="Locations" />
                                            </TabPane>

                                        </Tabs>
                                    </Widget>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col span={12}>
                                <div className="gx-card">
                                    <Widget title="" >
                                        <Tabs defaultActiveKey="1">
                                            <TabPane tab="Keywords" key="1">
                                                <AddTags title="Keywords" />
                                            </TabPane>

                                        </Tabs>
                                    </Widget>
                                </div>
                            </Col>
                            <Col span={12}>
                                <div className="gx-card">
                                    <Widget title="" >
                                        <Tabs defaultActiveKey="1">
                                            <TabPane tab="Organization" key="1">
                                                <AddTags title="Organization" />
                                            </TabPane>

                                        </Tabs>
                                    </Widget>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={6}>
                        <div className="gx-card">

                            <Widget title="" >
                                <Tabs defaultActiveKey="1">
                                    <TabPane tab="Automation Settings" key="1">
                                        {automation_settings.map((p) =>
                                            <li key={p}>
                                                {p}
                                                {this.activity_speed(p)}
                                                <div style={{ clear: "both" }}></div>
                                            </li>
                                        )
                                        }
                                    </TabPane>
                                    <TabPane key="2">
                                        {userImageList.map((user, index) =>
                                            <li key={index}>
                                                <Avatar className="gx-mr-2" size="large" />
                                            </li>
                                        )
                                        }
                                    </TabPane>
                                </Tabs>
                            </Widget>


                        </div>
                        <div className="gx-card">

                            <Widget title="" >
                                <Tabs defaultActiveKey="1">
                                    <TabPane tab="Preset Comments" key="1">
                                        <AddComment1 onChangeSetting={this.onChangeSetting} tags={this.state.tags}/>
                                    </TabPane>

                                </Tabs>
                            </Widget>

                        </div>
                    </Col>
                </Row>
            </>
        );
    }
};

export default Panel;
