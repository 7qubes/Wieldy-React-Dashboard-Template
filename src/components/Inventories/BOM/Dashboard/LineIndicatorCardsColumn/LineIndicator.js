import React from "react";
import PropTypes from "prop-types";

import Aux from "../../../../../util/Auxiliary";

const LineIndicator = ({
  title,
  secondTitle,
  width,
  value,
  color,
  mode = "",
  src = "",
}) => {
  return (
    <Aux>
      {mode == "" ? (
        <p
          style={{
            fontSize: "14px",
            fontWeight: "500",
            color: "#8C8C8C",
            padding: "0px",
          }}
        >
          {title}
          <span style={{ fontSize: "14", color: "#8C8C8C", opacity: "0.5" }}>
            {" "}
            |{" "}
          </span>
          <span style={{ fontSize: "12px", color: "#8C8C8C", opacity: "0.5" }}>
            {secondTitle}
          </span>
        </p>
      ) : (
        ""
      )}
      <div className="gx-line-indi-info">
        {mode == "sm" ? <p style={{ width: "30%" }}>{title}</p> : ""}
        {mode == "in" ? <p style={{ width: "35%" }}>{" " + title}</p> : ""}

        <div
          className={`gx-line-indi`}
          style={{
            width: Number.parseInt(width, 10) * 4,
            background: `${color}`,
          }}
        />

        <span className="gx-line-indi-count gx-ml-2">{value}</span>
      </div>
    </Aux>
  );
};

export default LineIndicator;

LineIndicator.propTypes = {
  title: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  mode: PropTypes.string,
  src: PropTypes.string,
};
