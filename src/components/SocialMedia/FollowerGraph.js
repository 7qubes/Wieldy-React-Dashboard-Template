import React, { useEffect, useState } from "react";
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis,Pie,PieChart,Cell,Bar,BarChart} from "recharts";
import { Card, Row,Col } from "antd";
import LineIndicator from "../dashboard/LineIndicator";
import girl from "./girl.svg";
import boy from "./boy.svg";

import download2 from "../SocialMedia/Twitter_Images/download2.png";

const months =['Jan', 'Feb', 'Mar', 'Apr', 'Jun','Jul','Aug', 'Sep', 'Oct','Nov','Dec' ]


const COLORS = ['#4A00E0', '#F50B9A'];
const COLORS_A = ["red","cyan","indigo","orange","purple","teal"]
const RADIAN = Math.PI / 180;

const per_style ={
	marginTop: 15,
	paddingLeft:40
}

const FollowerGraph = (props) => {
	const [pieData_G,setPieData_G]=useState([])
	const [boyPer,setBoyPer]=useState(0)
	const [girlPer,setGirlPer]=useState(0)
	const [pieData_A,setPieData_A]=useState([])

	const renderCustomizedLabel = ({ percent, index,
	}) => {
	switch(index){
		case 0:
			setBoyPer((percent * 100).toFixed(0));
			break;
		case 1:
			setGirlPer((percent * 100).toFixed(0));
			break;
	}
	};

	useEffect(()=>{
		var gen=['M','F']
		var data={'M':0,'F':0}
		var pieData_A=[]
		var pieData_G=[]
		if (props.page_age.data)
		props.page_age.data.map(e=>{
			var total = 0
			gen.map(g =>{
				data[g] += e[g]?e[g]:0
				total += e[g]?e[g]:0
				})
				pieData_A.push({Age:e.name,percent:(total/props.page_age.total)*100})
		})
		
		Object.keys(data).map(e => pieData_G.push({name:e,value:data[e]}))
			setPieData_G(pieData_G)
			setPieData_A(pieData_A)

	},[props.page_age])
return (
	<div>
		<Row>
			<Col xl={12} lg={24} md={12} sm={24} xs={24}>
			<Card className="gx-card" title="Age Group">
			<ul className="gx-line-indicator gx-fs-sm gx-pb-1 gx-pb-sm-0">
		{
			pieData_A.map((e,index) =>

		<li>
			<LineIndicator mode="sm" width={e.percent.toFixed(0)} title={e.Age} color={COLORS_A[index % COLORS_A.length]} value={e.percent.toFixed(0)+"%"}/>
		</li>

			)
		}

		</ul>
		</Card>

			</Col>
			<Col xl={12} lg={24} md={12} sm={24} xs={24}>
			<Card className="gx-card" title="Gender">
				<Row>

				<Col md={8} style={{padding:0}}>

		<img src={boy} style={{width:'100%',height:100}}/>
		<h3 style={{...per_style,color:'#4A00E0'}}>{boyPer}%</h3>
			</Col>
				<Col md={8} style={{padding:0}}>
		<ResponsiveContainer width="100%" height="100%">
			<PieChart width={100} height={100}>
		<Pie 
			dataKey="value" 
			labelLine={false}
			isAnimationActive={false}
			label={renderCustomizedLabel}
			data={pieData_G} 
			cx={60} 
			cy={55} 
			outerRadius={60} 
		>
		{
			pieData_G.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
		}
	</Pie>
<Tooltip />
</PieChart>
</ResponsiveContainer>
</Col>
<Col md={8} style={{padding:0}} >

<img src={girl} style={{width:100,height:100}}/>
<h3 style={{...per_style,color:'#F50B9A'}}>{girlPer}%</h3>
</Col>
</Row>
</Card>

</Col>
	</Row>
	<Row>
<Col xl={12} lg={24} md={12} sm={24} xs={24}>

<Card className="gx-card" title="Top Cities">
	<ul className="gx-line-indicator gx-fs-sm gx-pb-1 gx-pb-sm-0">
		
		{
			props.page_city.reverse().slice(0,8).map((e,index) =>

		<li>
			<LineIndicator mode="sm" width={e.percent} title={e.City.toUpperCase()} color={COLORS_A[index % COLORS_A.length]} value={e.percent.toFixed(2)+"%"}/>
		</li>

			)
		}

		</ul>
		</Card>

</Col>
	</Row>

</div>

)};

export default FollowerGraph
