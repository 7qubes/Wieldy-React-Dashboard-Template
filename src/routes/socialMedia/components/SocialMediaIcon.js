import React from "react";
import { FacebookFilled,InstagramFilled,TwitterOutlined,LinkedinOutlined } from "@ant-design/icons";

const SocialMediaIcon=(medium,size=16)=>{
    switch(parseInt(medium)){
      case 1:
        return <FacebookFilled style={{fontSize:size,color:'#1877f2'}} />
      case 2:
        return <InstagramFilled style={{fontSize:size}} />
      case 3:
        return <TwitterOutlined style={{fontSize:size,color:'rgba(29,161,242,1.00)'}} />
      case 4:
        return <LinkedinOutlined  style={{fontSize:size,color:'#0073b1'}} />
    }
  }

export default SocialMediaIcon