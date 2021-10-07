import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const IconBlock = ({ iconPalette, setCardIcon, cardColor, cardIcon }) => {
  // Logic to set background color of icon block the same as the active color of BOM block
  //   if (iconPalette.class === cardIcon) {
  //     const activeIconContainer = document.querySelector(".icon-container");
  //     activeIconContainer.style.backgroundColor = `rgb(${cardColor[0]},${cardColor[1]},${cardColor[2]})`;
  //   }

  // Handlers
  const bgColorChange = (event) => {
    event.target.children[0].style.color = `rgb(${cardColor[0]},${cardColor[1]},${cardColor[2]})`;
    event.target.style.backgroundColor = `#BFBFBF`;
  };
  const bgColorRemove = (event) => {
    event.target.children[0].style.color = `#BFBFBF`;
    event.target.style.backgroundColor = ``;
  };
  const changeCardIcon = (event) => {
    setCardIcon(event.target.children[0].classList[1]);
  };
  return (
    <div style={{ padding: "0" }}>
      <IconContainer
        className="icon-container"
        onHoverStart={bgColorChange}
        onHoverEnd={bgColorRemove}
        onClick={changeCardIcon}
      >
        <i
          style={{ color: "#BFBFBF" }}
          className={"icon " + iconPalette.class}
        ></i>
      </IconContainer>
    </div>
  );
};

const IconContainer = styled(motion.div)`
  height: 3rem;
  width: 3rem;
  margin: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  i {
    font-size: 1.8rem;
    pointer-events: none;
  }
`;

export default IconBlock;
