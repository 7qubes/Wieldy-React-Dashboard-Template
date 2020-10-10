import React from "react";

import Widget from "components/Widget/index";

const ConnectedBankTwo = () => {
  return (
    <Widget styleName="gx-blue-cyan-gradient gx-text-white gx-card-1367-p">
      <div className="gx-text-center gx-px-3 gx-pt-3">
        <div className="gx-d-flex gx-justify-content-around gx-align-items-center gx-mb-3">
          <i className="icon icon-mail-open gx-fs-xxl gx-mr-2"/>
          <h2 className="gx-text-white">Bank Balance</h2>
          <span>***7463</span>
        </div>
        <div className="gx-mb-3">
          <h2 className="gx-text-white">$15,384</h2>
        </div>
      </div>
    </Widget>
  );
};

export default ConnectedBankTwo;
