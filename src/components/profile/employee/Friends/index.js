import React from "react";
import {Badge} from "antd";
import Widget from "../../../Widget";


function Status(props) {
  const isType = props.isType;
  if (isType === 'online') {
    return <Badge status="success"/>;
  } else if (isType === 'away') {
    return <Badge status="warning"/>;
  } else {
    return <Badge count={0} status="error"/>;
  }
}

const Friends = ({friendList}) => {
  const url = '/contacts/employee';
  return (
    <Widget styleName="gx-card-profile-sm"
            title={<span>Supervisors</span>}>
      <div className="gx-pt-2">
        <ul className="gx-fnd-list gx-mb-0">
          {friendList.map((user, index) =>
            <li className="gx-mb-2" key={index}>
              <div className="gx-user-fnd">
                <a href={url}>
                  <img alt="..." src={user.image}/>
                  <div className="gx-user-fnd-content">
                    <Status isType={user.status}/>
                    <h6>{user.name}</h6>
                  </div>
                </a>
              </div>
            </li>
          )
          }
        </ul>
      </div>
    </Widget>
  )
};
export default Friends;
