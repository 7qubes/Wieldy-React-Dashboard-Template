import React from "react";
import {Card, Collapse, Table} from "antd";

// import "./basic.less";

const Panel = Collapse.Panel;

const columns = [
  {title: 'Bank', dataIndex: 'common', key: 'common'},
  {title: 'OUTSTANDING', dataIndex: 'outstanding', key: 'outstanding'},
];

const data = [
  {
    key: 1,
    common: 'Bank of America',
    outstanding: '$5,000',
  }, {
    key: 2,
    common: 'Acct #000',
    outstanding: '01/31/2015',

  }
];

class CollapsePanel extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const {header, color} = this.props;
    return (
      <Collapse defaultActiveKey={['1']}
                // onChange={callback}
                style={{marginBottom: '20px', backgroundColor: color, fontWeight: 'bold'}}>
        <Panel header={header} key="1">
          <Table className="gx-table-responsive"
             columns={columns}
             dataSource={data}
             pagination={false}
             showHeader={false}
          />
        </Panel>
      </Collapse>
  );

  }
}

export default CollapsePanel;
