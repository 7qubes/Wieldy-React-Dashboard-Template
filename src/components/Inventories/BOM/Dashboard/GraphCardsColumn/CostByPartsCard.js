import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import styled from "styled-components";
import { motion } from "framer-motion";

const CostByPartsCard = () => {
  const data = [
    {
      name: "JAN",
      PART: 400,
      LABOR: 250,
    },
    {
      name: "FEB",
      PART: 600,
      LABOR: 200,
    },
    {
      name: "MAR",
      PART: 150,
      LABOR: 1200,
    },
    {
      name: "APR",
      PART: 1000,
      LABOR: 500,
    },
    {
      name: "MAY",
      PART: 700,
      LABOR: 620,
    },
    {
      name: "JUN",
      PART: 800,
      LABOR: 250,
    },
    {
      name: "JUL",
      PART: 750,
      LABOR: 350,
    },
    {
      name: "AUG",
      PART: 450,
      LABOR: 950,
    },
    {
      name: "SEP",
      PART: 800,
      LABOR: 350,
    },
    {
      name: "OCT",
      PART: 900,
      LABOR: 490,
    },
    {
      name: "NOV",
      PART: 445,
      LABOR: 885,
    },
    {
      name: "DEC",
      PART: 896,
      LABOR: 142,
    },
  ];

  return (
    <div>
      <ResponsiveContainer width="100%" height="100%">
        <CardBody className="card-border">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            style={{ background: "white" }}
          >
            <XAxis
              dataKey="name"
              tick={{ fontSize: "14px" }}
              interval={0}
              axisLine={false}
              tickLine={false}
              style={{ color: "#8C8C8C" }}
            />
            <Tooltip
              contentStyle={{ color: "black" }}
              itemStyle={{}}
              cursor={{ fill: "transparent" }}
            />
            <Legend
              layout="horizontal"
              verticalAlign="top"
              align="right"
              iconType="circle"
            />
            <Bar dataKey="LABOR" barSize={10} stackId="a" fill="#038FDE" />
            <Bar
              radius={[3, 3, 0, 0]}
              dataKey="PART"
              barSize={10}
              stackId="a"
              fill="#FE9E15"
            />
          </BarChart>
        </CardBody>
      </ResponsiveContainer>
    </div>
  );
};

const CardBody = styled(motion.div)`
  box-sizing: border-box;
  margin-left: 20px;
  margin-top: 20px;
  box-shadow: 1px 1px 8px #c9c9c9;
  border-radius: 10px;
  overflow: hidden;
`;

export default CostByPartsCard;
