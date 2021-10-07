import React, { useState } from "react";
// style and animation
import styled from "styled-components";
import { motion } from "framer-motion";
// menu option icon
import menuImg from "./images/menu-icon.svg";
// components
import MenuOptionOne from "./MenuOptionOne";
// router
import { Link, useLocation } from "react-router-dom";

const Card = ({ data, bomData, setBOMData, index }) => {
  // Menu open/close State
  const [isMenuOpen, setIsMenuOpen] = useState({
    first: false,
    second: false,
  });

  // event Handlers
  const menuOneToggle = (event) => {
    if (!isMenuOpen.first) {
      setIsMenuOpen({ ...isMenuOpen, first: !isMenuOpen.first });
    } else {
      setIsMenuOpen({ first: false, second: false });
    }
  };

  const location = useLocation();

  // const myCard = document.querySelector(".card-body");
  // console.log("My Card", myCard.children[2]);
  // console.log("index - ", index);
  // if ((index + 1) % 5 == 0) {
  //   document.querySelector(".menu-option-one-container").style.left = "-100%";
  // }

  return (
    <CardBody className="card-body">
      <img
        className="three-dots"
        src={menuImg}
        alt=""
        onClick={menuOneToggle}
      />
      <Link to={`${location.pathname}/testtable`}>
        <CardBlock color={data.color} className="card-block">
          <i className={`icon ${data.icon}`} />
        </CardBlock>
        <CardLabel className="card-label">
          <h5>{data.title}</h5>
          <p>{data.description}</p>
        </CardLabel>
      </Link>
      {isMenuOpen.first && (
        <MenuOptionOneContainer className="menu-option-one-container">
          <MenuOptionOne
            data={data}
            bomData={bomData}
            setBOMData={setBOMData}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
        </MenuOptionOneContainer>
      )}
    </CardBody>
  );
};

const CardBody = styled(motion.div)`
  position: relative;
  margin: 0 5rem 2rem 0;
  .three-dots {
    position: absolute;
    top: 2px;
    right: 7px;
    margin: 0;
    padding: 0;
    cursor: pointer;
    z-index: 10;
  }
`;

const CardBlock = styled(motion.div)`
  position: relative;
  width: 5rem;
  height: 5rem;
  border: none;
  border-radius: 10px;
  background: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px 0 rgba(43, 43, 43, 0.2),
    0 6px 20px 0 rgba(135, 135, 135, 0.19);

  i {
    font-size: 40px;
    color: white;
  }
`;

const CardLabel = styled(motion.div)`
  margin-top: 10px;
  text-align: center;
  color: #9a9a9a;
  h5 {
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    padding: 0;
    margin-bottom: 5px;
  }
  p {
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    font-size: 10px;
    padding: 0;
    margin: 0;
  }
`;

const MenuOptionOneContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 100%;
  z-index: 15;
`;

export default Card;
