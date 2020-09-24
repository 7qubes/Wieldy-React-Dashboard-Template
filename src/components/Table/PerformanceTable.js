import React from "react";
import {Card, Divider, Table, Rate} from "antd";
import Icon from '@ant-design/icons';

const columns = [
  {
    title: 'Project',
    dataIndex: 'project',
    key: 'project',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Reviewer',
    dataIndex: 'reviewer',
    key: 'reviewer',
  },
  {
    title: 'Review',
    dataIndex: 'review',
    key: 'review',
  },
  {
    title: 'Rating',
    dataIndex: 'rating',
    key: 'rating',
  }
];

const data = [
  {
    key: '1',
    project: 'Project W',
    date: '10/10/2019',
    reviewer: 'Jonathan Nolan',
    review: 'Overall Good Progress',
    rating: <Rate disabled defaultValue={4}/>
  },
  {
    key: '2',
    project: 'Project W',
    date: '10/10/2019',
    reviewer: 'Jonathan Nolan',
    review: 'Overall Good Progress',
    rating: <Rate disabled defaultValue={4}/>
  },
  {
    key: '3',
    project: 'Project W',
    date: '10/10/2019',
    reviewer: 'Jonathan Nolan',
    review: 'Overall Good Progress',
    rating: <Rate disabled defaultValue={4}/>
  },
  {
    key: '4',
    project: 'Project W',
    date: '10/10/2019',
    reviewer: 'Jonathan Nolan',
    review: 'Overall Good Progress',
    rating: <Rate disabled defaultValue={4}/>
  },
  {
    key: '5',
    project: 'Project W',
    date: '10/10/2019',
    reviewer: 'Jonathan Nolan',
    review: 'Overall Good Progress',
    rating: <Rate disabled defaultValue={4}/>
  },
  {
    key: '6',
    project: 'Project W',
    date: '10/10/2019',
    reviewer: 'Jonathan Nolan',
    review: 'Overall Good Progress',
    rating: <Rate disabled defaultValue={4}/>
  },
];

const PerformanceTable = () => {
  return (
    <Card title="Performance">
      <Table className="gx-table-responsive" columns={columns} dataSource={data}/>
    </Card>
  );
};

export default PerformanceTable;
