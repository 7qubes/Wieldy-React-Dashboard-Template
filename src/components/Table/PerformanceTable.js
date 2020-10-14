import React from "react";
import {Card, Divider, Table, Rate, Collapse} from "antd";
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
    width: '50%'
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
    rating: <Rate disabled defaultValue={4}/>,
    children: [{
      key: 11,
      project: '',
      date: '',
      reviewer: '',
      review: 'Client Service Skills: Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
        'In molestie ultricies urna non volutpat. Nam fermentum cursus elit, et tempus metus scelerisque imperdiet. ' +
        'Sed tincidunt molestie justo, a vulputate velit sagittis at. Pellentesque consequat leo tortor.',
      rating: <Rate disabled defaultValue={3}/>,
      }, {
      key: 12,
      project: '',
      date: '',
      reviewer: '',
      review: 'Team Work Skills: Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
        'In molestie ultricies urna non volutpat. Nam fermentum cursus elit, et tempus metus scelerisque imperdiet. ' +
        'Sed tincidunt molestie justo, a vulputate velit sagittis at. Pellentesque consequat leo tortor.',
      rating: <Rate disabled defaultValue={5}/>,
      }, {
      key: 13,
      project: '',
      date: '',
      reviewer: '',
      review: 'Quality of Work: Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
        'In molestie ultricies urna non volutpat. Nam fermentum cursus elit, et tempus metus scelerisque imperdiet. ' +
        'Sed tincidunt molestie justo, a vulputate velit sagittis at. Pellentesque consequat leo tortor.',
      rating: <Rate disabled defaultValue={5}/>,
    }, {
      key: 14,
      project: '',
      date: '',
      reviewer: '',
      review: 'Judgement and Decision Making: Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
        'In molestie ultricies urna non volutpat. Nam fermentum cursus elit, et tempus metus scelerisque imperdiet. ' +
        'Sed tincidunt molestie justo, a vulputate velit sagittis at. Pellentesque consequat leo tortor.',
      rating: <Rate disabled defaultValue={5}/>,
    }],
  },
  {
    key: '2',
    project: 'Project W',
    date: '10/10/2019',
    reviewer: 'Jonathan Nolan',
    review: 'Overall Good Progress',
    rating: <Rate disabled defaultValue={4}/>,
    children: [{
      key: 21,
      project: '',
      date: '',
      reviewer: '',
      review: 'Client Service Skills: Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
        'In molestie ultricies urna non volutpat. Nam fermentum cursus elit, et tempus metus scelerisque imperdiet. ' +
        'Sed tincidunt molestie justo, a vulputate velit sagittis at. Pellentesque consequat leo tortor.',
      rating: <Rate disabled defaultValue={3}/>,
      }, {
      key: 22,
      project: '',
      date: '',
      reviewer: '',
      review: 'Team Work Skills: Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
        'In molestie ultricies urna non volutpat. Nam fermentum cursus elit, et tempus metus scelerisque imperdiet. ' +
        'Sed tincidunt molestie justo, a vulputate velit sagittis at. Pellentesque consequat leo tortor.',
      rating: <Rate disabled defaultValue={5}/>,
      }, {
      key: 23,
      project: '',
      date: '',
      reviewer: '',
      review: 'Quality of Work: Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
        'In molestie ultricies urna non volutpat. Nam fermentum cursus elit, et tempus metus scelerisque imperdiet. ' +
        'Sed tincidunt molestie justo, a vulputate velit sagittis at. Pellentesque consequat leo tortor.',
      rating: <Rate disabled defaultValue={5}/>,
    }, {
      key: 24,
      project: '',
      date: '',
      reviewer: '',
      review: 'Judgement and Decision Making: Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
        'In molestie ultricies urna non volutpat. Nam fermentum cursus elit, et tempus metus scelerisque imperdiet. ' +
        'Sed tincidunt molestie justo, a vulputate velit sagittis at. Pellentesque consequat leo tortor.',
      rating: <Rate disabled defaultValue={5}/>,
    }],
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
