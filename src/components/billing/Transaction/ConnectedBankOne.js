import React from "react";

import Widget from "components/Widget/index";

const ConnectedBankOne = () => {
  return (
    <Widget styleName="gx-blue-cyan-gradient gx-text-white gx-card-1367-p">
      <div className="gx-text-center gx-px-3 gx-pt-3">
        <div className="gx-d-flex gx-justify-content-around gx-align-items-center gx-mb-3">
          <i className="icon icon-mail-open gx-fs-xxl gx-mr-2"/>
          <h2 className="gx-text-white">Bank Balance</h2>
          <span>***1881</span>
          {/*<i className="icon icon-long-arrow-right gx-fs-xxl"/>*/}
        </div>
        <div className="gx-mb-3">
          <h2 className="gx-text-white">$8,384</h2>
        {/*  <p className="gx-text-grey">Crypto Expert</p>*/}
        </div>
      </div>
    </Widget>
  );
};

export default ConnectedBankOne;
