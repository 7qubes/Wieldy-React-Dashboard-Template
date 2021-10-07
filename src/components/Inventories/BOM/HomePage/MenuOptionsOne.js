import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { RightOutlined } from "@ant-design/icons";
import MenuOptionsTwo from "./MenuOptionsTwo";

const MenuOptionsOne = ({
  cardColor,
  setCardColor,
  colorPalletes,
  isMenuOpen,
  setIsMenuOpen,
  iconPalettes,
  setIconPalettes,
  cardIcon,
  setCardIcon,
}) => {
  // Handlers
  const SecondMenuToggleHandler = (event) => {
    const secondMenuBlock = document.querySelector(".second-menu");

    if (!isMenuOpen.secondMenu) {
      setIsMenuOpen({
        ...isMenuOpen,
        secondMenu: true,
        secondDisplay: "block",
      });
      secondMenuBlock.style.display = isMenuOpen.secondDisplay;
    } else {
      setIsMenuOpen({
        ...isMenuOpen,
        secondMenu: false,
        secondDisplay: "none",
      });
      secondMenuBlock.style.display = isMenuOpen.secondDisplay;
    }
  };

  return (
    <div>
      <OptionSetOne>
        <ListOne>
          <ListItemWithColor onClick={SecondMenuToggleHandler}>
            <ColorBlock
              style={{
                background: `rgb(${cardColor[0]}, ${cardColor[1]}, ${cardColor[2]})`,
              }}
            ></ColorBlock>
            <h5>Set color &#38; icon</h5>
            <RightOutlined />
          </ListItemWithColor>
          <ListItem>
            <h5>Add to Favorites</h5>
          </ListItem>
          <ListItem>
            <h5>Edit Name &#38; Description</h5>
          </ListItem>
          <ListItem>
            <h5>Copy BOM Link</h5>
          </ListItem>
        </ListOne>
      </OptionSetOne>
      <div className="second-menu" style={{ display: "none" }}>
        <MenuOptionsTwo
          setCardColor={setCardColor}
          colorPalletes={colorPalletes}
          iconPalettes={iconPalettes}
          setIconPalettes={setIconPalettes}
          cardIcon={cardIcon}
          setCardIcon={setCardIcon}
          cardColor={cardColor}
        />
      </div>
    </div>
  );
};

const OptionSetOne = styled(motion.div)`
  background: green;
  position: relative;
  z-index: 10;
`;

const ListOne = styled(motion.div)`
  list-style: none;
  border: 1px solid #a7a9a9;
  width: 11rem;
  position: absolute;
  top: 0%;
  left: 85%;
  transform: translateY(5%);
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-direction: column;
  border-radius: 8px;
  background: #f5f5f5;
`;

const ListItem = styled(motion.div)`
  cursor: pointer;
  margin: 0.3rem 0.3rem 0 0.3rem;
  align-self: center;

  h5 {
    opacity: 0.7;
  }
`;

const ListItemWithColor = styled(motion.div)`
  cursor: pointer;
  margin: 0.3rem 0.3rem 0 0.3rem;
  display: flex;
  justify-content: space-between;

  h5 {
    opacity: 0.7;
  }
`;

const ColorBlock = styled(motion.div)`
  height: 1rem;
  width: 1rem;
  border-radius: 2px;
`;

export default MenuOptionsOne;
