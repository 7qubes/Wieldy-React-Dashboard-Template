import React from "react";
import {PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer} from "recharts";

import data from "./data";
import {Card} from "antd";

const Performance = () => (
  <Card className="gx-card" title="Performance">
    <ResponsiveContainer width="100%" height={400}>
      <RadarChart outerRadius={150} data={data}>
        <Radar name="Mike" dataKey="A" stroke="#003366" fill="#003366" fillOpacity={0.6}/>
        <PolarGrid/>
        <PolarAngleAxis dataKey="subject"/>
        <PolarRadiusAxis/>
      </RadarChart>
    </ResponsiveContainer>
    <ResponsiveContainer width="100%" height={400}>
      <RadarChart outerRadius={150} data={data}>
        <Radar name="Mike" dataKey="A" stroke="#003366" fill="#003366" fillOpacity={0.6}/>
        <PolarGrid/>
        <PolarAngleAxis dataKey="subject"/>
        <PolarRadiusAxis/>
      </RadarChart>
    </ResponsiveContainer>
  </Card>
);

export default Performance;
