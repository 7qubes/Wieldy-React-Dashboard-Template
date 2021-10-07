import React, { PureComponent } from 'react';
import {BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip,ResponsiveContainer, Legend,} from 'recharts';

const data = [
  {
    name: 'Page A', uv: 4000
  },
  {
    name: 'Page B', uv: 3000
  },
  {
    name: 'Page C', uv: 2000
  }
];

const BarCharts = (props) => (
  <ResponsiveContainer width="100%" height={200}>
    <BarChart
        width={500}
        height={300}
        data={props.data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />

        <Bar dataKey="value" fill="#82ca9d" />
      </BarChart>
  </ResponsiveContainer>
);

export default BarCharts
