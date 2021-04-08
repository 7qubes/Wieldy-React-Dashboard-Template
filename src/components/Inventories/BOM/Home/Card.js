import React, { useState } from "react";
// style and animation
import styled from "styled-components";
import { motion } from "framer-motion";
// menu option icon
import menuImg from "./images/menu-icon.svg";
// components
import MenuOptionOne from "./MenuOptionOne";

const Card = ({ data, bomData, setBOMData }) => {
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

  // document.addEventListener("click", (event) => {
  //   event.stopPropagation();
  //   if (!event.target.classList.contains("card-body")) {
  //     setIsMenuOpen({ first: false, second: false });
  //   }
  // });

  return (
    <CardBody className="card-body">
      <CardBlock color={data.color} className="card-block">
        <img src={menuImg} alt="" onClick={menuOneToggle} />
        <i className={`icon ${data.icon}`} />
      </CardBlock>
      <CardLabel className="card-label">
        <h5>{data.title}</h5>
        <p>{data.description}</p>
      </CardLabel>
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
  img {
    position: absolute;
    top: 2px;
    right: 7px;
    margin: 0;
    padding: 0;
    cursor: pointer;
  }
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
  z-index: 5;
`;

export default Card;
