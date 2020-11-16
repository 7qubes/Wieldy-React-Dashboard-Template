import React from "react";
import { FacebookFilled,InstagramFilled,TwitterOutlined,LinkedinOutlined } from "@ant-design/icons";

const SocialMediaIcon=(medium)=>{
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

export default SocialMediaIcon