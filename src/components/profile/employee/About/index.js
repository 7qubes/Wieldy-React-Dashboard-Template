import React from "react";
import {Card, Col, Row, Tabs} from "antd";
import Widget from "components/Widget";
import {equipmentList, overviewList, workList} from './data'
import AboutItem from "./AboutItem";


const TabPane = Tabs.TabPane;

const About = () => {
    return (
      <Card className="gx-card" title="About">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Overview" key="1">
            <div className="gx-mb-2">
              <Row>
                {overviewList.map((about, index) =>
                  <Col key={index} xl={8} lg={12} md={12} sm={12} xs={24}>
                    <AboutItem data={about}/>
                  </Col>
                )}
              </Row>
            </div>
          </TabPane>
          <TabPane tab="Work" key="2">
            <div className="gx-mb-2">
              <Row>{workList.map((about, index) =>
                <Col key={index} xl={8} lg={12} md={12} sm={12} xs={24}>
                  <AboutItem data={about}/>
                </Col>
              )}
              </Row>
            </div>
          </TabPane>
          <TabPane tab="Equipment" key="3">
            <div className="gx-mb-2">
              <Row>
                {equipmentList.map((about, index) =>
                  <Col key={index} xl={8} lg={12} md={12} sm={12} xs={24}>
                    <AboutItem data={about}/>
                  </Col>
                )}
              </Row>
            </div>
          </TabPane>
        </Tabs>
      </Card>
    );
}


export default About;
