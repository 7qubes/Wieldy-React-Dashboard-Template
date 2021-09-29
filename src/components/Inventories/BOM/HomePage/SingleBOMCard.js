import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Cascader } from "antd";
import MenuOptionsOne from "./MenuOptionsOne";
import { v4 as uuidv4 } from "uuid";

const SingleBOMCard = () => {
  const [cardColor, setCardColor] = useState([0, 99, 251]);

  const [colorPalletes, setColorPalletes] = useState([
    { rgb: "F6F8F9", id: uuidv4() },
    { rgb: "FB5779", id: uuidv4() },
    { rgb: "F8954D", id: uuidv4() },
    { rgb: "FFD200", id: uuidv4() },
    { rgb: "E0F5A6", id: uuidv4() },
    { rgb: "19DB7E", id: uuidv4() },
    { rgb: "00D4C8", id: uuidv4() },
    { rgb: "695632", id: uuidv4() },
    { rgb: "48DAFD", id: uuidv4() },
    { rgb: "0063FB", id: uuidv4() },
    { rgb: "6456F9", id: uuidv4() },
    { rgb: "9F46E4", id: uuidv4() },
    { rgb: "FF78FF", id: uuidv4() },
    { rgb: "FE4CA5", id: uuidv4() },
    { rgb: "5A7796", id: uuidv4() },
    { rgb: "FE92AF", id: uuidv4() },
  ]);

  const [cardIcon, setCardIcon] = useState("icon-start-up");

  const [iconPalettes, setIconPalettes] = useState([
    { class: "icon-start-up", id: uuidv4() },
    { class: "icon-ecology", id: uuidv4() },
    { class: "icon-Gear_Tech_Machine-1", id: uuidv4() },
    { class: "icon-Stationary-1", id: uuidv4() },
    { class: "icon-Clothes_Fashion-1", id: uuidv4() },
    { class: "icon-Toy_Pets_Infant-1", id: uuidv4() },
    { class: "icon-Food_ForkKnife_Resturant-1", id: uuidv4() },
    { class: "icon-Bio_Health_Leaf-1", id: uuidv4() },
  ]);

  const [isMenuOpen, setIsMenuOpen] = useState({
    firstMenu: false,
    firstDisplay: "none",
    secondMenu: false,
    secondDisplay: "none",
    key: uuidv4(),
  });

  // Handler
  const FirstMenuToggleHandler = (event) => {
    const firstMenuBlock = document.querySelector(".first-menu");

    if (!isMenuOpen.firstMenu) {
      setIsMenuOpen({
        ...isMenuOpen,
        firstDisplay: "block",
        firstMenu: true,
      });
      firstMenuBlock.style.display = isMenuOpen.firstDisplay;
    } else {
      setIsMenuOpen({
        firstMenu: false,
        firstDisplay: "none",
        secondMenu: false,
        secondDisplay: "none",
      });
      firstMenuBlock.style.display = isMenuOpen.firstDisplay;
    }
  };

  return (
    <div className="parent-div">
      <enclosingDiv className="random-text">
        <div className="first-menu" style={{ display: "none" }}>
          <MenuOptionsOne
            className="trial"
            cardColor={cardColor}
            setCardColor={setCardColor}
            colorPalletes={colorPalletes}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            iconPalettes={iconPalettes}
            setIconPalettes={setIconPalettes}
            cardIcon={cardIcon}
            setCardIcon={setCardIcon}
          />
        </div>
        <BOMCard className="bom-card">
          <BOMIconBox
            className="bom-icon-box"
            style={{
              background: `rgb(${cardColor[0]},${cardColor[1]},${cardColor[2]})`,
            }}
          >
            <p
              className="three-dots"
              onClick={FirstMenuToggleHandler}
              style={{ fontWeight: "normal" }}
            >
              ...
            </p>
            <i
              style={{ color: "white", fontSize: "1.8rem" }}
              className={"icon " + cardIcon}
            />
          </BOMIconBox>
          <TextBoxTitle className="text-box">
            <h5>Title</h5>
          </TextBoxTitle>
          <TextBoxDescription>
            <p>Description</p>
          </TextBoxDescription>
        </BOMCard>
      </enclosingDiv>
    </div>
  );
};

const enclosingDiv = styled(motion.div)`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: relative;
`;

const BOMCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0.5rem 1.5rem 0.5rem 1rem;
`;

const BOMIconBox = styled(motion.div)`
  height: 4rem;
  width: 4rem;
  border-radius: 10%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.25rem;
  padding-right: 5px;
  p {
    color: white;
    align-self: flex-end;
    cursor: pointer;
    margin: 0;
    padding: 0;
    line-height: 0.5;
    user-select: none;
  }
  i {
    position: absolute;
    left: 50%;
    top: 60%;
    transform: translate(-50%, -60%);
  }
`;

const TextBoxTitle = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h5 {
    margin: 0;
    font-size: 0.8rem;
    opacity: 0.8;
  }
`;

const TextBoxDescription = styled(motion.div)`
  p {
    font-size: 0.7rem;
    opacity: 0.5;
  }
`;

export default SingleBOMCard;
