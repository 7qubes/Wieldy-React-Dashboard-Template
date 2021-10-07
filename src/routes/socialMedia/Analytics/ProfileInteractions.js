import React from 'react';
import { Card } from "antd";
import BarCharts from "../../../components/SocialMedia/BarCharts";

const ProfileInteractions = (props) => (
    <div>
          <Card className="gx-card" title="Page Views">
            <BarCharts data={props.bar_data} />
        </Card>
        <Card className="gx-card" title="Page Likes">
            <BarCharts data={props.page_likes} />
        </Card>
    </div>
)

export default ProfileInteractions
