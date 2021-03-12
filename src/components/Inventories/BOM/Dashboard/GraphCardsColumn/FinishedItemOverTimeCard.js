import React, { PureComponent } from "react";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import styled from "styled-components";
import { motion } from "framer-motion";

const FinishedItemOverTimeCard = () => {
  const data = [
    {
      name: "JAN",
      bikes: 400,
    },
    {
      name: "FEB",
      bikes: 800,
    },
    {
      name: "MAR",
      bikes: 550,
    },
    {
      name: "APR",
      bikes: 900,
    },
    {
      name: "MAY",
      bikes: 100,
    },
    {
      name: "JUN",
      bikes: 300,
    },
    {
      name: "JUL",
      bikes: 10,
    },
    {
      name: "AUG",
      bikes: 70,
    },
    {
      name: "SEP",
      bikes: 800,
    },
    {
      name: "OCT",
      bikes: 100,
    },
    {
      name: "NOV",
      bikes: 550,
    },
    {
      name: "DEC",
      bikes: 350,
    },
  ];

  return (
    <div>
      <ResponsiveContainer width="100%" height="100%">
        <CardBody className="card-border">
          <CardHeaderRow className="card-header-row">
            <CardTitle className="card-title">
              <h3>FINISHED BIKES OVER TIME</h3>
            </CardTitle>
            <CardLabels className="card-labels">
              <CardLabel className="card-label">
                <h3>1,546</h3>
                <p>BIKES</p>
              </CardLabel>
              <CardLabel className="card-label">
                <h3>11%</h3>
                <p>Growth</p>
              </CardLabel>
              <CardLabel className="card-label">
                <h3>0.717%</h3>
                <p>Growth Rate</p>
              </CardLabel>
            </CardLabels>
          </CardHeaderRow>
          <LineChart
            width={500}
            height={300}
            data={data}
            style={{ background: "white" }}
          >
            <XAxis
              tick={{ fontSize: "14px" }}
              interval={0}
              axisLine={false}
              tickLine={false}
              style={{ color: "#8C8C8C" }}
              dataKey="name"
              padding={{ left: 30, right: 30 }}
            />
            <Tooltip
              contentStyle={{ color: "black" }}
              itemStyle={{}}
              cursor={{ fill: "transparent" }}
            />
            <Line
              type="monotone"
              dataKey="bikes"
              stroke="#E14ECA"
              activeDot={{ r: 8 }}
              strokeWidth={2}
              dot={{ stroke: "#E14ECA", strokeWidth: 4, r: 2, fill: "#E14ECA" }}
            />
          </LineChart>
        </CardBody>
      </ResponsiveContainer>
    </div>
  );
};

const CardBody = styled(motion.div)`
  box-sizing: border-box;
  margin-left: 20px;
  box-shadow: 1px 1px 8px #c9c9c9;
  border-radius: 10px;
  overflow: hidden;
  font-family: "Poppins", sans-serif;
`;

const CardHeaderRow = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  background: white;
`;

const CardTitle = styled(motion.div)`
  margin: 15px 0;
  align-self: flex-start;
  h3 {
    color: #262626;
    font-weight: 600;
    font-size: 14px;
  }
`;

const CardLabels = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CardLabel = styled(motion.div)`
  margin: 15px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h3 {
    color: #1d253b;
    font-weight: bold;
    font-size: 20px;
    margin: 0;
    padding: 0;
  }
  p {
    color: #9a9a9a;
  }
`;

export default FinishedItemOverTimeCard;
