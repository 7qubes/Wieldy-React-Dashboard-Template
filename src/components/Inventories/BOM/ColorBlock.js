import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ColorBlock = ({ id, colorPallete, setCardColor }) => {
  // Event Handlers
  const cardColorChangeHandler = (event) => {
    // console.log(event.target.style);
    const colorRGB = event.target.style.backgroundColor;
    const colorRGBArray = colorRGB.match(/\d+/g);
    setCardColor(colorRGBArray);
  };

  // const checkmarkDisplayOnHover = (event) => {
  //   const divCheckMark = document.querySelector(".check-mark");
  //   divCheckMark.style.setProperty('display', '')
  // };

  return (
    <div>
      <Color
        onClick={cardColorChangeHandler}
        // onMouseOver={checkmarkDisplayOnHover}
        style={{
          background: `#${colorPallete.rgb}`,
        }}
        className="color"
      >
        {/* <div style={{ pointerEvents: "none" }} className="check-mark">
          &#10003;
        </div> */}
      </Color>
    </div>
  );
};

const Color = styled(motion.div)`
  height: 1.2rem;
  width: 1.2rem;
  border-radius: 2px;
  margin: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.39);
  }
`;

export default ColorBlock;
