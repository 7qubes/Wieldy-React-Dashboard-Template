import React from "react";
// style and animation
import styled from "styled-components";
import { motion } from "framer-motion";
// arrow image
import arrowImg from "./images/arrow-icon.svg";
// components
import MenuOptionTwo from "./MenuOptionTwo";

const MenuOptionOne = ({
  data,
  bomData,
  setBOMData,
  isMenuOpen,
  setIsMenuOpen,
}) => {
  // event Handler
  const menuTwoToggle = (event) => {
    setIsMenuOpen({ ...isMenuOpen, second: !isMenuOpen.second });
  };

  const setFavoriteToggle = (event) => {
    // creating a copy of the state
    let cloneBOMData = [...bomData];
    // finding the index of the data to be updated in state
    let index = bomData.indexOf(data);
    cloneBOMData[index] = {
      ...cloneBOMData[index],
      favorite: !cloneBOMData[index].favorite,
    };
    // updating the state through the crated copy
    setBOMData(cloneBOMData);
    console.log(bomData);
  };

  return (
    <MenuOneBody className="menu-one-body">
      <div className="fitter">
        <MenuList className="menu-list">
          <ListItem className="list-item" onClick={menuTwoToggle}>
            <MiniColorBlock
              color={data.color}
              className="color-block"
            ></MiniColorBlock>
            <p>Set color &#38; icon</p>
            <img src={arrowImg} alt="" />
          </ListItem>
          <ListItem className="list-item" onClick={setFavoriteToggle}>
            <p>Add to Favorites</p>
          </ListItem>
          <ListItem className="list-item">
            <p>Edit Name &#38; Description</p>
          </ListItem>
          <ListItem className="list-item">
            <p>Copy BOM Link</p>
          </ListItem>
        </MenuList>
      </div>
      {isMenuOpen.second && (
        <MenuOptionTwoContainer className="menu-option-two-container">
          <MenuOptionTwo
            data={data}
            bomData={bomData}
            setBOMData={setBOMData}
          />
        </MenuOptionTwoContainer>
      )}
    </MenuOneBody>
  );
};

const MenuOneBody = styled(motion.div)`
  background: white;
  margin-left: 1rem;
  border: 1px solid #9a9a9a;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(215, 215, 215, 0.2),
    0 6px 20px 0 rgba(182, 182, 182, 0.19);
  position: relative;
  .fitter {
    overflow: hidden;
    width: 10rem;
    height: 9rem;
  }
`;

const MenuList = styled(motion.div)``;

const ListItem = styled(motion.div)`
  text-align: center;
  position: relative;
  padding: 10px 0;
  transition: all 0.2s ease-in;
  p {
    font-size: 12px;
    color: #535353;
    padding: 0;
    margin: 0;
  }
  img {
    position: absolute;
    padding: 0;
    margin: 0;
    top: 12px;
    right: 15px;
  }
  &:hover {
    background: #deeafc;
  }
`;

const MiniColorBlock = styled(motion.div)`
  width: 17px;
  height: 17px;
  border: none;
  border-radius: 2px;
  box-shadow: 0 4px 8px 0 rgba(126, 126, 126, 0.2);
  position: absolute;
  top: 7px;
  left: 10px;
  background: ${(props) => props.color};
`;

const MenuOptionTwoContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 100%;
`;

export default MenuOptionOne;
