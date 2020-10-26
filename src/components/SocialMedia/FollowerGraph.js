import React from "react";
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import download1 from "../SocialMedia/Twitter_Images/download1.png";
import download2 from "../SocialMedia/Twitter_Images/download2.png";

const months =['Jan', 'Feb', 'Mar', 'Apr', 'Jun','Jul','Aug', 'Sep', 'Oct','Nov','Dec' ]


const data = [
  {name: months[0], price: 240, amt: 2400},
  {name: months[1], price: 139, amt: 2210},
  {name: months[2], price: 980, amt: 2290},
  {name: months[3], price: 390, amt: 2000},
  {name: months[4], price: 480, amt: 2181},
  {name: months[5], price: 380, amt: 2500},
  {name: months[6], price: 430, amt: 2100},
  {name: months[7], price: 430, amt: 2100},
  {name: months[8], price: 430, amt: 2100},
  {name: months[9], price: 430, amt: 2100},
  {name: months[10], price: 430, amt: 2100},
  {name: months[11], price: 430, amt: 2100},
];

const FollowerGraph = () => (

  <div>

  <img src={download1} alt="this is car image" />
  <img src={download2} alt="this is car image2" />

</div>
 
);

export default FollowerGraph
