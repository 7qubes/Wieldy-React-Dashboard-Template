import React from "react";
import {Button, Card, Collapse, Divider, Table} from "antd";
import Icon from '@ant-design/icons';
import pdf from './sample.pdf'
import UploadClick from "components/Upload/UploadClick";
import AddAgreements from "../contact/AddAgreements";


const Panel = Collapse.Panel;

const customPanelStyle = {
  borderRadius: 4,
  border: 0,
  overflow: 'hidden',
};

const columns = [
  {
    title: 'ID#',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Contractor',
    dataIndex: 'contractor',
    key: 'contractor',
    render: text => <span className="gx-link">{text}</span>,
  },
  {
    title: 'Doc',
    dataIndex: 'doc',
    key: 'doc',
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Status',
    key: 'status',
    render: () => (
      <Collapse bordered={false} expandIconPosition='right'>
        <Panel header="Signed" style={customPanelStyle}>
          <p>
            <a href={pdf} target='_blank'>
              <icon className='icon icon-eye'/> View</a>
          </p>
          <p><icon className='icon icon-backtop'/> Export</p>
        </Panel>
      </Collapse>
    ),
  }
];

const data = [
  {
    key: '1',
    id: '4514',
    contractor: <a href={pdf} target='_blank'>John Brown</a>,
    doc: 32,
    type: 'New Hire',
  },
  {
    key: '2',
    id: '4514',
    contractor: <a href={pdf} target='_blank'>Jim Green</a>,
    doc: 42,
    type: 'New Hire',
  },
  {
    key: '3',
    id: '4514',
    contractor: <a href={pdf} target='_blank'>Joe Black</a>,
    doc: 32,
    type: 'New Hire',
  }
];

const AgreementsTable = () => {
  return (
    <Card title="Documents" extra={
      // <Button className="gx-btn-block ant-btn" type="primary">
      //     <i className="icon icon-add-circle gx-mr-1"/>
      //     <span>Add Document</span>
      // </Button>
      <AddAgreements/>
    }>
      <Table className="gx-table-responsive" columns={columns} dataSource={data}/>
    </Card>
  );
};

export default AgreementsTable;
