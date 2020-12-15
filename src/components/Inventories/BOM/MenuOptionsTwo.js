import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import ColorBlock from "./ColorBlock";

const MenuOptionsTwo = ({ setCardColor, colorPalletes }) => {
  // Event Handlers

  return (
    <div>
      <OptionSetTwo className="OptionSetTwo">
        <ListTwo className="list-two">
          <ColorSwatch className="color-swatch">
            {colorPalletes.map((colorPallete) => (
              <ColorBlock
                key={colorPallete.id}
                colorPallete={colorPallete}
                setCardColor={setCardColor}
              />
            ))}
          </ColorSwatch>
          <IconSwatch className="icon-swatch">
            <IconSwatchRowOne>
              <Icon className="icon"></Icon>
              <Icon className="icon"></Icon>
              <Icon className="icon"></Icon>
              <Icon className="icon"></Icon>
            </IconSwatchRowOne>
            <IconSwatchRowTwo>
              <Icon className="icon"></Icon>
              <Icon className="icon"></Icon>
              <Icon className="icon"></Icon>
              <Icon className="icon"></Icon>
            </IconSwatchRowTwo>
          </IconSwatch>
        </ListTwo>
      </OptionSetTwo>
    </div>
  );
};

const OptionSetTwo = styled(motion.div)`
  background: green;
  position: relative;
  z-index: 10;
`;

const ListTwo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #a7a9a9;
  position: absolute;
  left: 254%;
  top: 0%;
  transform: translateY(5%);
  width: 17rem;
  border-radius: 8px;
  background: #f5f5f5;
`;

const ColorSwatch = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0.5rem 1rem;
`;

const Color = styled(motion.div)`
  height: 1.2rem;
  width: 1.2rem;
  border-radius: 2px;
  margin: 0.3rem;
  cursor: pointer;
  div {
    display: none;
    pointer-events: none;
  }
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.39);
  }
`;

const IconSwatch = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

const IconSwatchRowOne = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const IconSwatchRowTwo = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Icon = styled(motion.div)`
  background: yellow;
  height: 1.2rem;
  width: 1.2rem;
  margin: 0.2rem;
  cursor: pointer;
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.39);
  }
`;

export default MenuOptionsTwo;
