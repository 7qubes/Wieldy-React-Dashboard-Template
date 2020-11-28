import React from "react";
import { Card, Row,Col } from "antd";
import LineIndicator from "../../../components/dashboard/LineIndicator";

const months =['Jan', 'Feb', 'Mar', 'Apr', 'Jun','Jul','Aug', 'Sep', 'Oct','Nov','Dec' ]
const days =['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'  ]


const COLORS_A = ["red","cyan","indigo","orange","purple","teal"]

const per_style ={
	marginTop: 15,
	paddingLeft:40
}

const InstagramCharts = (props) => {

return (
	<div style={{paddingLeft:10,paddingTop:10}}>

	<Row>
	<Col xl={12} lg={24} md={12} sm={24} xs={24}>

<Card className="gx-card" title="Most Likes From">
	<ul className="gx-line-indicator gx-fs-sm gx-pb-1 gx-pb-sm-0">

		{
			props.insta_data.likes.data.map((e,index) =>{

				var width = (e.counts/props.insta_data.likes.max) * 25
		return <li>
			<LineIndicator mode="in" width={width} src={e.profile_pic_url} title={e.username} color={COLORS_A[index % COLORS_A.length]} value={e.counts}/>
		</li>

			})
		}

		</ul>
		</Card>

</Col>

<Col xl={12} lg={24} md={12} sm={24} xs={24}>

<Card className="gx-card" title="Most Comments From">
	<ul className="gx-line-indicator gx-fs-sm gx-pb-1 gx-pb-sm-0">

		{
			props.insta_data.comments.users.data.map((e,index) =>{

				var width = (e.counts/props.insta_data.comments.users.max) * 25
		return <li>
			<LineIndicator mode="in" width={width} src={e['user.profile_pic_url']} title={e.username} color={COLORS_A[index % COLORS_A.length]} value={e.counts}/>
		</li>

			})
		}
		</ul>
		</Card>
</Col>
</Row>
<Row>
<Col xl={12} lg={24} md={12} sm={24} xs={24}>
<Card className="gx-card" title="Most Comments From">
	<ul className="gx-line-indicator gx-fs-sm gx-pb-1 gx-pb-sm-0">

		{
			days.map((e,index) =>{
				console.log(props.insta_data.comments.days[index]?props.insta_data.comments.days[index]:0,props.insta_data.comments.days[index])
				var count = props.insta_data.comments.days.data[index]?props.insta_data.comments.days.data[index]:0
				var width = (count/props.insta_data.comments.days.max) * 25
		return <li>
			<LineIndicator mode="sm" width={width}  title={e} color={COLORS_A[index % COLORS_A.length]} value={e.counts}/>
		</li>
			})
		}
		</ul>
		</Card>
</Col>
</Row>
</div>

)};

export default InstagramCharts
