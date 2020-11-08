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
        <Card className="gx-card" title="Demographics">
        <ResponsiveContainer width="100%" height={200}>
                <BarChart
                    width={500}
                    height={300}
                    data={props.page_age}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />

                    <Bar dataKey="M" fill="#8884d8" />
                    <Bar dataKey="F" fill="#82ca9d" />
                    <Bar dataKey="U" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

        </Card>
    </div>
)

export default ProfileGrowth