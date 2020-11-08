import React from 'react';
import { Card } from "antd";
import FollowerGraph from "../../../components/SocialMedia/FollowerGraph";
const AudienceDemographics = (props) => (
    <div>
        <Card className="gx-card" title="Followers">
            <FollowerGraph />
        </Card>
    </div>
)

export default AudienceDemographics
