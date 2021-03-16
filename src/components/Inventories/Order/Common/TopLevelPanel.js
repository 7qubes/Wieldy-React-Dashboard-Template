import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { VerticalAlignTopOutlined } from "@ant-design/icons";

const TopLevelPanel = () => {
  return (
    <div>
      <PrimaryPanel className="main-panel">
        <PanelItems className="panel-items">
          <PanelItem className="panel-item">
            <h3 style={{ fontWeight: "500" }}>Bulk Actions:</h3>
          </PanelItem>
          <PanelItem className="panel-item">
            <h3>
              <span>
                <i className="icon icon-PencilEdit"></i>
              </span>
              Edit
            </h3>
          </PanelItem>
          <PanelItem className="panel-item">
            <h3>
              <span>
                <i className="icon icon-folder_move"></i>
              </span>
              Move To Folder
            </h3>
          </PanelItem>
          <PanelItem className="panel-item">
            <h3>
              <span>
                <i className="icon icon-email_label"></i>
              </span>
              Create Labels
            </h3>
          </PanelItem>
          <PanelItem className="panel-item">
            <h3>
              <span>
                <i className="icon icon-Duplicate"></i>
              </span>
              Clone
            </h3>
          </PanelItem>
          <PanelItem className="panel-item">
            <h3>
              <span>
                <VerticalAlignTopOutlined />
              </span>
              Export
            </h3>
          </PanelItem>
          <PanelItem className="panel-item">
            <h3>
              <span>
                <i className="icon icon-email_trash"></i>
              </span>
              Delete
            </h3>
          </PanelItem>
        </PanelItems>
      </PrimaryPanel>
    </div>
  );
};

const PrimaryPanel = styled(motion.div)`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: #6236ff;
  color: white;
  height: 7vh;
  padding: 1rem 2rem;
`;

const PanelItems = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PanelItem = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  h3 {
    color: white;
    span {
      padding-right: 0.2rem;
    }
  }
`;

export default TopLevelPanel;
