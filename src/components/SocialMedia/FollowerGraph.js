import React from "react";
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

const data = [
  {name: 'Jan', price: 240, amt: 2400},
  {name: 'Feb', price: 139, amt: 2210},
  {name: 'Mar', price: 980, amt: 2290},
  {name: 'Apr', price: 390, amt: 2000},
  {name: 'May', price: 480, amt: 2181},
  {name: 'Jun', price: 380, amt: 2500},
  {name: 'Jul', price: 430, amt: 2100},
  {name: 'Aug', price: 430, amt: 2100},
  {name: 'Sep', price: 430, amt: 2100},
  {name: 'Oct', price: 430, amt: 2100},
  {name: 'Nov', price: 430, amt: 2100},
  {name: 'Dec', price: 430, amt: 2100},
];

const FollowerGraph = () => (
  <ResponsiveContainer width="100%" height={200}>
    <LineChart data={data}
               margin={{top: 10, right: 0, left: -15, bottom: 0}}>
      <XAxis dataKey="name"/>
      <YAxis/>
      <CartesianGrid strokeDasharray="3 3"/>
      <Tooltip/>
      <Line type='monotone' dataKey='price' stroke='#003366' fill='#003366'/>
    </LineChart>
  </ResponsiveContainer>
);

export default FollowerGraph
