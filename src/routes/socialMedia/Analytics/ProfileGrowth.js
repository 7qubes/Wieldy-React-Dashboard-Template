import React  from 'react';
import { Card } from "antd";
import {AreaChart, Area, Cell, XAxis, YAxis, CartesianGrid, Tooltip,ResponsiveContainer, Legend,} from 'recharts';
const data=[]
const ProfileGrowth = (props) => (
	<div>
		<Card className="gx-card" title="Followers">
        <ResponsiveContainer width="100%" height={200}>
		<AreaChart width={730} height={250} data={props.page_fans}
	        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
	<defs>
		<linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
			<stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
			<stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
		</linearGradient>
	</defs>
	<XAxis dataKey="name" />
	<YAxis domain={['auto', 'auto']} />
	<CartesianGrid horizontal={false} />
	<Tooltip />
	<Area type="monotone" dataKey="value" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
</AreaChart>
</ResponsiveContainer>
	</Card>
	<Card className="gx-card" title="Page Likes">

	</Card>
	</div>
)

export default ProfileGrowth
