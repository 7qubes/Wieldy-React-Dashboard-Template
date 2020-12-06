import React from "react";
import { Col, Row, Avatar, Tabs, Menu, Dropdown, Button, Select } from "antd";
import Widget from "components/Widget";
import { RadialBarChart, RadialBar, Legend } from 'recharts';
import AddTags from "../../../components/SocialMedia/AddTags";
import AddComment1 from "../../../components/SocialMedia/AddComment1";
import { DownOutlined } from '@ant-design/icons';
import axios from "axios"
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
const style = { top: 10, left: 500, lineHeight: '64px' };
class Panel extends React.Component {
    constructor() {
        super();
        this.state = {
            tags: ['Leave your work', 'Wow!'],// this is not there
            days: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],//for schedular 
            categories: "Art",//not done
            similar_accounts: [],//related to  list of followers,following
            hashtags: ['#worklifebalance', '#weekendgateway'],// this is for recommendation
            locations: ['Chicago', 'Boston', 'NY'],//following people based on location
            keywords: ['#work', '#play', '#sleep', '#exercise'],// following people based on tags  follow tag
            organization: ['#UIC', '#IIT', '#UIUC'],// not done
            preset_comments: [],//like and comment
            quick_settings: { 'Likes': 'NO', 'Comments': 'NO', 'Follows': 'NO', 'Unfollows': 'NO', 'Watch Stories': 'NO' },
            automation_settings: { 'Activity Speed': 'Slow', 'Days': '', 'Time': 'Fast', 'Unfollow': 'Fast' },
            new_followers: {}

        }

    }
    onChangeSetting = (e, option) => {
        console.log(e, option)
        switch (option) {
            case 'Likes':
            case 'Comments':
            case 'Follows':
            case 'Unfollows':
            case 'Watch Stories':
                {
                    var qs = { ...this.state.quick_settings, [option]: e == 1 ? 'Yes' : 'No' }
                    this.setState({ quick_settings: qs }, () => { console.log(this.state) })
                    break;
                }

            case 'Categories': {
                this.setState({ categories: e }, () => { console.log(this.state) })
                break;
            }

            case 'locations':
            case 'hastags':
            case 'keywords':
            case 'organization': {
                this.setState({ [option]: '#'.concat(e) }, () => { console.log(this.state) })
                break;
            }


            case 'Days':
            case 'Activity Speed':
            case 'Time':
            case 'Unfollow': {
                var as = { ...this.state.automation_settings, [option]: e }
                this.setState({ automation_settings: as }, () => { console.log(this.state) })
                break;
            }
        }
    }
    opt = (option) => (
        <Menu onClick={(e) => this.onChangeSetting(e.key, option)}>
            <Menu.Item key="1" >
                Yes
          </Menu.Item>
            <Menu.Item key="2" >
                NO
          </Menu.Item>
        </Menu>
    );
    speed = (option) => (
        <Menu onClick={(e) => this.onChangeSetting(e.key, option)}>
            <Menu.Item key="Slow" >
                Slow
          </Menu.Item>
            <Menu.Item key="Medium" >
                Medium
          </Menu.Item>
            <Menu.Item key="Fast" >
                Fast
          </Menu.Item>
        </Menu>
    );

    automation_settings(option, value) {
        return (
            option != "Days" ?
                <div style={{ float: "right" }}>
                    <Dropdown overlay={() => this.speed(option)} >
                        <Button >
                            {value} <DownOutlined />
                        </Button>
                    </Dropdown>
                </div> :
                <div style={{ clear: "both" }}>
                    <div >
                        <Row style={{ margin: " 0px 40px" }} >
                            {this.state.days.map(e =>
                                <Col>
                                    <Button text="large" style={{ padding: 5, backgroundcolor: "white", border: "2px solid #555555" }} onClick={() => this.onChangeSetting(e, 'Days')}>{e}</Button>
                                </Col>)}
                        </Row>
                    </div>
                </div>
        )
    }

    save_settings = () => {
        
        var params = {
            "categories": this.state.categories,
            "similar_accounts":this.state.similar_accounts,
            "hashtags":this.state.hashtags,
            "locations":this.state.locations,
            "keywords":this.state.keywords,
            "organization":this.state.organization,
            "preset_comments":this.state.preset_comments,
            "quick_settings":this.state.quick_settings,
            "automation_settings":this.state.automation_settings
        }
        console.log(params)
        axios.post('http://localhost:5000/automation_settings', params)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
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
                                <div className="gx-module-box-topbar">
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
                                                    <Dropdown overlay={() => this.opt(option)} >
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
                                                onChange={(e) => this.onChangeSetting(e, 'Categories')}
                                            >
                                                {categories.map((p) => {
                                                    return <Option value={p} key={p} >{p}</Option>
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
                                            <AddTags title="hashtags" onChangeSetting={this.onChangeSetting} data={this.state.hashtags} />
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
                                            <AddTags title="locations" onChangeSetting={this.onChangeSetting} data={this.state.locations} />
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
                                            <AddTags title="keywords" onChangeSetting={this.onChangeSetting} data={this.state.keywords} />
                                        </TabPane>

                                    </Tabs>
                                </Widget>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className="gx-card">
                                <Widget title="" >
                                    <Tabs defaultActiveKey="1">
                                        <TabPane tab="organization" key="1">
                                            <AddTags title="Organization" onChangeSetting={this.onChangeSetting} data={this.state.organization} />
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
                                    {Object.entries(this.state.automation_settings).map(([option, value]) =>
                                        <li key={option}>
                                            {option}
                                            {this.automation_settings(option, value)}
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
                                    <AddComment1 onChangeSetting={this.onChangeSetting} tags={this.state.tags} />
                                </TabPane>

                            </Tabs>
                        </Widget>

                    </div>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <div style={{ float: "right" }}>
                        <Button class="ant-btn ant-btn-lg gx-btn-secondary" onClick={this.save_settings}>Save</Button>
                    </div>
                </Col>
            </Row>
        </>
    );
}
};

export default Panel;
