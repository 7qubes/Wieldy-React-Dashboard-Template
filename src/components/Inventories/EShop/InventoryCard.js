import React from "react";
// style and animation
import styled from "styled-components";
import { motion } from "framer-motion";
// image
import dummyImg from "./image/dummy.svg";
import candyImg from "./image/candy.svg";
// checkbox
import { Checkbox } from "antd";
import { firestore } from "firebase";

const InventoryCard = ({ data }) => {
  // event handler
  const checkboxHandler = (event) => {
    const card =
      event.nativeEvent.target.parentElement.parentElement.parentElement
        .parentElement;
    card.classList.toggle("checked-card");
    if (event.target.checked) {
      card.style.background = "#DCF8FF";
      data.checked = "true";
    } else {
      card.style.background = "none";
      data.checked = "false";
    }
  };

  const ratingImageRender = (rating) => {
    const randomArray = [];
    for (let i = 0; i < rating; i++) {
      randomArray.push(<img src={candyImg} alt="" />);
    }
    return randomArray;
  };

  return (
    <CardBody className="card-body">
      <CheckMark>
        <Checkbox className="checkbox" onChange={checkboxHandler}></Checkbox>
      </CheckMark>
      <CardImage className="card-image">
        <img src={dummyImg} alt="" />
      </CardImage>
      <CardDetails className="card-details">
        <CardColumnOne className="col-1">
          <h4>{data.blocks[0].headline}</h4>
          <p>{data.blocks[0].description}</p>
          <div className="candy-icons">
            {ratingImageRender(data.blocks[0].rating).map((item) => item)}
          </div>
          <h4>${data.blocks[0].price}</h4>
        </CardColumnOne>
        <CardColumnTwo className="col-2">
          <p>Quantity: {data.blocks[0].quantity}</p>
          <p>Size: {data.blocks[0].size}</p>
          <p>Last Update: {data.blocks[0].lastUpdate}</p>
        </CardColumnTwo>
      </CardDetails>
    </CardBody>
  );
};

const CardBody = styled(motion.div)`
  width: 90%;
  margin: 2rem auto 0;
  display: grid;
  grid-template-columns: 1fr 4fr;
  background: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.14);
  position: relative;
  transition: background-color 0.5s ease-in;
`;

const CheckMark = styled(motion.div)`
  position: absolute;
  left: 5px;
  top: 5px;
`;

const CardImage = styled(motion.div)`
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardDetails = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1rem 3rem;
  color: #535353;
  h4 {
    color: #535353;
  }
`;
const CardColumnOne = styled(motion.div)`
  div {
    margin-bottom: 10px;
  }
`;
const CardColumnTwo = styled(motion.div)`
  margin-top: 1rem;
  p {
    margin: 0;
    padding: 8px;
    box-sizing: border-box;
  }
`;

export default InventoryCard;
