import React from "react";
import {Col, Row} from "antd";

import TaskList from "components/dashboard/TaskList";
import SiteVisit from "components/dashboard/SiteVisit";
import RecentActivity from "components/dashboard/RecentActivity";
import WelComeCard from "components/dashboard/WelComeCard";
import SiteAudience from "components/dashboard/SiteAudience";
import SendMoney from "components/dashboard/SendMoney";
import RewardCard from "components/dashboard/RewardCard";
import Auxiliary from "util/Auxiliary";
import TotalRevenueCard from "components/dashboard/TotalRevenueCard";
import NewCustomers from "components/dashboard/NewCustomers";
import GrowthCard from "components/dashboard/GrowthCard";
import Widget from "components/Widget/index";
import CurrentPlan from "components/dashboard/CurrentPlan";
import BalanceHistory from "components/dashboard/BalanceHistory";
import {recentActivity, taskList, trafficData} from "./data";

const Dashboard = () => {
  return (
    <Auxiliary>
      <Row>
        <Col span={24}>
          <div className="gx-card">
            <div className="gx-card-body">
              <Row>
                <Col xl={6} lg={12} md={12} sm={12} xs={24}>
                  <WelComeCard/>
                </Col>

                <Col xl={6} lg={12} md={12} sm={12} xs={24} className="gx-audi-col">
                  <SiteAudience/>
                </Col>

                <Col xl={12} lg={24} md={24} sm={24} xs={24} className="gx-visit-col">
                  <SiteVisit/>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
        <Col xl={8} lg={24} md={8} sm={24} xs={24}>
          <TotalRevenueCard/>
        </Col>
        <Col xl={8} lg={12} md={8} sm={24} xs={24}>
          <NewCustomers/>
        </Col>
        <Col xl={8} lg={12} md={8} sm={24} xs={24}>
          <GrowthCard trafficData={trafficData}/>
        </Col>

        <Col xl={8} lg={24} md={24} sm={24} xs={24} className="gx-order-sm-2">
          <Widget>
            <RecentActivity recentList={recentActivity} shape="circle"/>
          </Widget>
          <CurrentPlan/>
        </Col>

        <Col xl={16} lg={24} md={24} sm={24} xs={24} className="gx-order-sm-1">
          <Row>
            <Col xl={24} lg={24} md={12} sm={24} xs={24}>
              <BalanceHistory/>
            </Col>
            <Col xl={24} lg={24} md={24} sm={24} xs={24}>
              <TaskList taskList={taskList}/>
            </Col>
            <Col xl={16} lg={24} md={24} sm={24} xs={24}>
              <SendMoney/>
            </Col>
            <Col xl={8} lg={12} md={12} sm={24} xs={24}>
              <RewardCard/>
            </Col>
          </Row>
        </Col>
      </Row>
    </Auxiliary>
  );
};

export default Dashboard;
