import React from "react";
import { Col, Row, Avatar, Tabs } from "antd";
import Widget from "components/Widget";
import { RadialBarChart, RadialBar, Legend } from 'recharts';
import AddAccount from "../../../components/SocialMedia/AddAccount";
const TabPane = Tabs.TabPane;

// import {recentActivity, taskList, trafficData} from "./data";
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
const quick_settings = ['Likes', 'Comments', 'Follows', 'Unfollows', 'Watch Stories']
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

const style = {
    top: 10,
    left: 500,
    lineHeight: '64px',
};
const Panel = () => {
    return (
        <>
            <Row>
                <Col span={24}>
                    <div className="gx-card">
                        <div className="gx-card-body">
                            <Row>
                                <Col xl={6} lg={12} md={12} sm={12} xs={24}>
                                    <h1>Suggested Followers</h1>
                                </Col>

                                <Col xl={4} lg={4} md={12} sm={12} xs={24} className="gx-audi-col">
                                    <a href="">Load More</a>
                                </Col>
                                <Col xl={14} lg={12} md={6} sm={12} xs={24}>

                                    <ul className="gx-list-inline gx-customers-list gx-mr-2">
                                        {userImageList.map((user, index) =>
                                            <li key={index}>
                                                <Avatar className="gx-mr-2" size="large" />
                                            </li>
                                        )
                                        }
                                    </ul>
                                </Col>

                            </Row>
                        </div>
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
                                    {quick_settings.map((p) =>
                                        <li key={p}>
                                            <p>{p}</p>
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
                                            <AddAccount title="Hashtags" />
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
                                            <AddAccount title="Locations" />
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
                                            <AddAccount title="Keywords" />
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
                                            <AddAccount title="Organization" />
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
                                            <p>{p}</p>
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
                                    {automation_settings.map((p) =>
                                        <li key={p}>
                                            <p>{p}</p>
                                        </li>
                                    )
                                    }
                                </TabPane>

                            </Tabs>
                        </Widget>


                    </div>
                </Col>
            </Row>
        </>
    );
};

export default Panel;
