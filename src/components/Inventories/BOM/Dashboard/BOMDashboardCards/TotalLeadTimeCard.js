import React from "react";
import { Area, AreaChart, ResponsiveContainer, Tooltip } from "recharts";
import { Col, Row } from "antd";
import { CaretUpFilled } from "@ant-design/icons";

// import Metrics from "components/Metrics";
import Metrics from "../../../../Metrics";

const trafficData = [
  { name: "Page A", value: 0 },
  { name: "Page B", value: 2000 },
  { name: "Page C", value: 600 },
  { name: "Page D", value: 4400 },
  { name: "Page E", value: 900 },
  { name: "Page F", value: 4860 },
  { name: "Page G", value: 900 },
  { name: "Page H", value: 4860 },
];

const TotalLeadTimeCard = () => {
  return (
    <Metrics styleName={`gx-card-full`} title="">
      <Row>
        <Col lg={10} md={24} sm={9} xs={9}>
          <div className=" gx-pl-2 gx-pt-1">
            <h2
              className="gx-fs-xxl "
              style={{ marginBottom: 0, fontSize: "17px" }}
            >
              3 MONTHS
            </h2>
            <p className="gx-mb-0 gx-text-grey" style={{ fontSize: "11px" }}>
              TOTAL LEAD TIME
            </p>
          </div>
        </Col>
        <Col lg={9} md={24} sm={9} xs={9}>
          <div className=" gx-pl-4 gx-pt-2">
            <h2
              style={{ paddingRight: 0, paddingLeft: 0, fontSize: "15px" }}
              className="gx-fs-xl gx-chart-up"
            >
              07%
              <CaretUpFilled />
            </h2>
          </div>
        </Col>
        <Col lg={5} md={24} sm={9} xs={9}>
          <div className=" gx-pl-2 gx-pt-2 gx-pr-4">
            <i className="icon icon-report" style={{ color: "#038FDE" }}></i>
          </div>
        </Col>
        {/* <Col lg={15} md={24} sm={15} xs={15}></Col> */}
      </Row>
      <Row>
        <ResponsiveContainer width="100%" height={103}>
          <AreaChart
            data={trafficData}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          >
            <Tooltip />
            <defs>
              <linearGradient id="color1" x1="0" y1="0" x2="1" y2="0">
                <stop offset="5%" stopColor="#4ECDE4" stopOpacity={0.9} />
                <stop offset="95%" stopColor="#06BB8A" stopOpacity={0.9} />
              </linearGradient>
            </defs>
            <Area
              dataKey="value"
              type="monotone"
              stackId="2"
              stroke="#867AE5"
              fill="url(#color1)"
              fillOpacity={1}
            />
          </AreaChart>
        </ResponsiveContainer>
      </Row>
    </Metrics>
  );
};

export default TotalLeadTimeCard;
