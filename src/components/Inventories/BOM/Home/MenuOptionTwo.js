import React, { useState } from "react";
// style and animation
import styled from "styled-components";
import { motion } from "framer-motion";
// unique key
import { v4 as uuidv4 } from "uuid";

const MenuOptionTwo = ({ data, bomData, setBOMData }) => {
  // color set
  const colorPalletes = [
    { hex: "#F6F8F9", id: uuidv4() },
    { hex: "#FB5779", id: uuidv4() },
    { hex: "#F8954D", id: uuidv4() },
    { hex: "#FFD200", id: uuidv4() },
    { hex: "#e0f5a6", id: uuidv4() },
    { hex: "#19DB7E", id: uuidv4() },
    { hex: "#00D4C8", id: uuidv4() },
    { hex: "#695632", id: uuidv4() },
    { hex: "#48DAFD", id: uuidv4() },
    { hex: "#0063FB", id: uuidv4() },
    { hex: "#6456F9", id: uuidv4() },
    { hex: "#9F46E4", id: uuidv4() },
    { hex: "#FF78FF", id: uuidv4() },
    { hex: "#FE4CA5", id: uuidv4() },
    { hex: "#5A7796", id: uuidv4() },
    { hex: "#FE92AF", id: uuidv4() },
  ];

  // icon set
  const iconPalettes = [
    { class: "icon-start-up", id: uuidv4() },
    { class: "icon-ecology", id: uuidv4() },
    { class: "icon-Gear_Tech_Machine-1", id: uuidv4() },
    { class: "icon-Stationary-1", id: uuidv4() },
    { class: "icon-Clothes_Fashion-1", id: uuidv4() },
    { class: "icon-Toy_Pets_Infant-1", id: uuidv4() },
    { class: "icon-Food_ForkKnife_Resturant-1", id: uuidv4() },
    { class: "icon-Bio_Health_Leaf-1", id: uuidv4() },
  ];

  // event handler
  // color changer
  const colorChangeHandler = (event) => {
    const rgbArray = event.target.style.backgroundColor.match(/\d+/g);

    const componentToHex = (c) => {
      let hex = c.toString(16);
      return hex.length == 1 ? "0" + hex : hex;
    };
    const rgbToHex = (r, g, b) => {
      return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    };

    const newHexColor = rgbToHex(
      parseInt(rgbArray[0]),
      parseInt(rgbArray[1]),
      parseInt(rgbArray[2])
    );

    // creating a copy of the state
    let cloneBOMData = [...bomData];
    // finding the index of the data to be updated in state
    let index = bomData.indexOf(data);
    cloneBOMData[index] = { ...cloneBOMData[index], color: newHexColor };
    // updating the state through the crated copy
    setBOMData(cloneBOMData);
  };

  const iconChangeHandler = (event) => {
    const newIcon = event.target.classList[1];
    // creating a copy of the state
    let cloneBOMData = [...bomData];
    // finding the index of the data to be updated in state
    let index = bomData.indexOf(data);
    cloneBOMData[index] = { ...cloneBOMData[index], icon: newIcon };
    // updating the state through the created copy
    setBOMData(cloneBOMData);
  };

  const iconColorHandler = (event) => {
    event.target.style.color = data.color;
  };

  const iconColorNormalHandler = (event) => {
    event.target.style.color = "#bfbfbf";
  };

  return (
    <MenuTwoBody className="menu-two-body">
      <ColorPanel className="color-panel">
        {colorPalletes.map((color) => (
          <ColorOption
            onClick={colorChangeHandler}
            className="color-option"
            style={{ backgroundColor: color.hex }}
            key={color.id}
          ></ColorOption>
        ))}
      </ColorPanel>
      <LineBreaker className="line-breaker"></LineBreaker>
      <IconPanel className="icon-panel">
        {iconPalettes.map((icon) => (
          <i
            onClick={iconChangeHandler}
            onMouseOver={iconColorHandler}
            onMouseOut={iconColorNormalHandler}
            className={"icon " + `${icon.class}`}
            key={icon.key}
          ></i>
        ))}
      </IconPanel>
    </MenuTwoBody>
  );
};

const MenuTwoBody = styled(motion.div)`
  width: 13rem;
  height: 12rem;
  background: white;
  margin-left: 1rem;
  border: 1px solid #9a9a9a;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(215, 215, 215, 0.2),
    0 6px 20px 0 rgba(182, 182, 182, 0.19);
`;
const ColorPanel = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 10px 0;
`;
const ColorOption = styled(motion.div)`
  width: 17px;
  height: 17px;
  border: none;
  border-radius: 2px;
  box-shadow: 0 4px 8px 0 rgba(126, 126, 126, 0.2);
  margin: 5px 3px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.39);
  }
`;
const LineBreaker = styled(motion.div)`
  height: 1px;
  width: 100%;
  background: #bfbfbf;
  margin: 5px 0;
`;
const IconPanel = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 98%;
  margin: 10px auto;
  i {
    font-size: 30px;
    color: #bfbfbf;
    margin: 3px;
    padding: 7px;
    cursor: pointer;
    &:hover {
      box-shadow: 0 4px 8px 0 rgba(225, 225, 225, 0.4),
        0 6px 20px 0 rgba(201, 201, 201, 0.39);
    }
  }
`;

export default MenuOptionTwo;
