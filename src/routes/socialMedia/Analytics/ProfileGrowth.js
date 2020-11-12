import React from 'react';
import { Card } from "antd";
import BarCharts from "../../../components/SocialMedia/BarCharts";
import {BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip,ResponsiveContainer, Legend,} from 'recharts';
const ProfileGrowth = (props) => (
    <div>
        <Card className="gx-card" title="Page Views">
            <BarCharts data={props.bar_data} />
        </Card>
        <Card className="gx-card" title="Page Likes">
            <BarCharts data={props.page_likes} />
        </Card>
    </div>
)

export default ProfileGrowth