import React, { useState} from "react";
import { FacebookFilled,InstagramFilled,TwitterOutlined,LinkedinOutlined } from "@ant-design/icons";
import CustomScrollbars from "util/CustomScrollbars";
import IntlMessages from "util/IntlMessages";
import {Button, Checkbox, Avatar } from "antd";

const SideBarSM = (props) => {
    const [selectedSectionId,setSelectedSectionId] = useState('')
    const getSocialMediaIcon=(medium)=>{
      switch(parseInt(medium)){
        case 1:
          return <FacebookFilled style={{color:'#1877f2'}} />
        case 2:
          return <InstagramFilled  />
        case 3:
          return <TwitterOutlined style={{color:'rgba(29,161,242,1.00)'}} />
        case 4:
          return <LinkedinOutlined  style={{color:'#0073b1'}} />
      }
    }
    return (<div className="gx-module-side">
      <div className="gx-module-side-header">
        <div className="gx-module-logo">
          <i className="icon icon-compose gx-mr-4"/>
          <span><IntlMessages id="chat.media"/></span>
        </div>
      </div>

      <div className="gx-module-side-content">
        <CustomScrollbars className="gx-module-side-scroll">
          {props.onShowSchedulePost ?<div className="gx-module-add-task">
            <Button className="gx-btn-block ant-btn" type="primary" aria-label="add"
                    onClick={props.onShowSchedulePost}>
              <i className="icon icon-add-circle gx-mr-1"/>
              <span>Schedule a Post</span>
            </Button>
          </div>:""}
          <div className="gx-module-side-nav">
            <ul className="gx-module-nav">
              {props.status.map((option,index) => <li key={option.id} className="gx-nav-item">
                  <span
                    className={`gx-link ${option.id === selectedSectionId ? 'active' : ''}`} 
                    // onClick={ this.onFilterOptionSelect.bind(this, option)}
                    >
                    <Checkbox className="gx-icon-btn" onChange={(e)=>props.select(index,e.target.checked)}/>
                    <Avatar className="gx-mr-2" shape="square" size="small" icon={getSocialMediaIcon(option.medium)}/>
                    <span className="gx-contact-name">{option.name}</span>
                  </span>
                </li>
              )}
            </ul>
          </div>
          <div className="gx-module-add-task">
            <Button className="gx-btn-block ant-btn" aria-label="add"
                    onClick={props.onAddAccount}>
              <i className="icon icon-add-circle gx-mr-1"/>
              <span>Add account</span>
            </Button>
          </div>
        </CustomScrollbars>
      </div>
    </div>)

  };

  export default SideBarSM;