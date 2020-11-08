import React from 'react';
import { Card } from "antd";
import FollowerGraph from "../../../components/SocialMedia/FollowerGraph";
const ProfileInteractions = (props) => (
    <div>
        <Card className="gx-card" title="Followers">
            <FollowerGraph />
        </Card>
        <Card className="gx-card" title="Followers">
            <FollowerGraph />
        </Card>
    </div>
)

export default ProfileInteractions
