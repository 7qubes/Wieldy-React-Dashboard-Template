import React, { useEffect, useState } from "react";
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis,Pie,PieChart,Cell,Bar,BarChart} from "recharts";
import { Card, Row,Col } from "antd";
import download1 from "../SocialMedia/Twitter_Images/download1.png";
import download2 from "../SocialMedia/Twitter_Images/download2.png";

const months =['Jan', 'Feb', 'Mar', 'Apr', 'Jun','Jul','Aug', 'Sep', 'Oct','Nov','Dec' ]


const COLORS = ['#4A00E0', '#F50B9A'];
const COLORS_A = ["#003f5c","#2f4b7c","#665191","#a05195","#d45087","#f95d6a","#ff7c43","#ffa600"]
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
	cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
	const x = cx + radius * Math.cos(-midAngle * RADIAN);
	const y = cy + radius * Math.sin(-midAngle * RADIAN);

	return (
		<text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
			{`${(percent * 100).toFixed(2)}%`}
		</text>
	);
};

const FollowerGraph = (props) => {
	const [pieData_G,setPieData_G]=useState([])
	const [pieData_A,setPieData_A]=useState([])

	useEffect(()=>{
		var gen=['M','F']
			var data={'M':0,'F':0}
			var pieData_A=[]
		props.page_age.map(e=>{
			var total = 0
			gen.map(g =>{
				data[g] += e[g]?e[g]:0
				total += e[g]?e[g]:0
				})
				pieData_A.push({name:e.name,value:total})
		})
		var pieData_G=[]
		Object.keys(data).map(e => pieData_G.push({name:e,value:data[e]}))
			setPieData_G(pieData_G)
			setPieData_A(pieData_A)
			console.log(pieData_A)

	},[])
	return (
	<div>
		<Card className="gx-card" title="Age Group">
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
					<Bar dataKey="U" fill="#FF8042" />
				</BarChart>
				</ResponsiveContainer>

		</Card>
			<Card className="gx-card" title="Distribution">
<ResponsiveContainer width="100%" height={300}>
	<PieChart width={400} height={300}>
<Pie 
dataKey="value" 
labelLine={false}
isAnimationActive={false}
label={renderCustomizedLabel}
data={pieData_G} 
cx={200} 
cy={200} 
outerRadius={90} 
>
{
	pieData_G.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
	}
	</Pie>
<Legend verticalAlign="middle" layout="vertical" height={36}/>
<Tooltip />
</PieChart>
</ResponsiveContainer>


<ResponsiveContainer width="100%" height={300}>
<PieChart width={400} height={300}>
<Pie 
dataKey="value" 
labelLine={false}
isAnimationActive={false}
label={renderCustomizedLabel}
data={pieData_A} 
cx={200} 
cy={200} 
outerRadius={90} 
>
{
	pieData_A.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS_A[index % COLORS_A.length]} />)
}
	</Pie>
		<Legend verticalAlign="middle" layout="vertical" height={36}/>
<Tooltip />
</PieChart>
</ResponsiveContainer>

</Card>

<Card className="gx-card" title="Top 50 Cities">
	<ResponsiveContainer width="100%" height={200}>
		<BarChart
			width={500}
			height={300}
			data={props.page_city}
			margin={{
				top: 5, right: 30, left: 20, bottom: 5,
			}}
		>
			<CartesianGrid strokeDasharray="3 3" />
			<XAxis dataKey="City" />
			<YAxis />
			<Tooltip />

			<Bar dataKey="Count" fill="#8884d8" />
		</BarChart>
		</ResponsiveContainer>

	</Card>

	{/* <Card className="gx-card" title="Followers">

	<ResponsiveContainer width="100%" height={200}>

		<LineChart
			width={500}
			height={300}
			data={data}
			margin={{
				top: 5, right: 30, left: 20, bottom: 5,
			}}
			>
			<CartesianGrid strokeDasharray="3 3" />
			<XAxis dataKey="name" />
			<YAxis />
			<Tooltip />
			<Legend />
			<Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
			<Line type="monotone" dataKey="uv" stroke="#82ca9d" />
			</LineChart>
				</ResponsiveContainer>
</Card> */}

</div>

)};

export default FollowerGraph
