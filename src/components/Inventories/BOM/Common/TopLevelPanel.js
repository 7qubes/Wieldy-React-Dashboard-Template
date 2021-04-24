import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { VerticalAlignTopOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const TopLevelPanel = ({
  activeSecondLevel,
  setIsTableSplit,
  isTableSplit,
}) => {
  // event handler
  const tableSplitHandler = (event) => {
    console.log(event.target);
    switch (activeSecondLevel) {
      case "bom":
        setIsTableSplit({ ...isTableSplit, bom: !isTableSplit.bom });
        break;
      case "material cost":
        setIsTableSplit({
          ...isTableSplit,
          materialCost: !isTableSplit.materialCost,
        });
        break;
      case "payables vs receivables summary":
        setIsTableSplit({
          ...isTableSplit,
          payableVSReceivableSummary: !isTableSplit.payableVSReceivableSummary,
        });
        break;
      case "billing schedule":
        setIsTableSplit({
          ...isTableSplit,
          billingSchedule: !isTableSplit.billingSchedule,
        });
        break;
      case "mrp":
        setIsTableSplit({
          ...isTableSplit,
          mrp: !isTableSplit.mrp,
        });
        break;
      default:
    }

    console.log("table split info ", isTableSplit);
  };

  return (
    <div>
      <PrimaryPanel className="main-panel">
        <PanelItems className="panel-items">
          <PanelItem className="panel-item">
            <h4>
              <span>
                <i className="icon icon-DashboardAnalytics"></i>
              </span>
              <Link style={{ color: "inherit" }} to="./dashboard">
                Dashboard
              </Link>
            </h4>
          </PanelItem>
          <PanelItem className="panel-item">
            <h4>
              <span>
                <i
                  className="icon icon-Timeline"
                  style={{ transform: "rotate(270deg)" }}
                ></i>
              </span>
              <Link style={{ color: "inherit" }} to="./timeline">
                Timeline
              </Link>
            </h4>
          </PanelItem>
          <PanelItem className="panel-item">
            <h4>
              <span>
                <i className="icon icon-bom"></i>
              </span>
              <Link style={{ color: "inherit" }} to="./testtable">
                BOM
              </Link>
            </h4>
          </PanelItem>
          <PanelItem className="panel-item">
            <h4>
              <span>
                <i className="icon icon-Splitscreen"></i>
              </span>
              <span onClick={tableSplitHandler}>Split Screen</span>
            </h4>
          </PanelItem>
          <PanelItem className="panel-item">
            <h4>
              <span>
                <i className="icon icon-PencilEdit"></i>
              </span>
              Edit
            </h4>
          </PanelItem>
          <PanelItem className="panel-item">
            <h4>
              <span>
                <i className="icon icon-Duplicate"></i>
              </span>
              Clone
            </h4>
          </PanelItem>
          <PanelItem className="panel-item">
            <h4>
              <span>
                <VerticalAlignTopOutlined />
              </span>
              Export
            </h4>
          </PanelItem>
          <PanelItem className="panel-item">
            <h4>
              <span>
                <i className="icon icon-email_trash"></i>
              </span>
              Delete
            </h4>
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
  height: 6vh;
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
  h4 {
    color: white;
    span {
      padding-right: 0.2rem;
    }
  }
`;

export default TopLevelPanel;
