import React from "react";
import {Card, Button, Table, Rate} from "antd";
import AddPerformance from "../contact/AddPerformance";

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

class PerformanceTable extends React.Component {
  constructor() {
    super();
    this.state = {
      showAddModal: false
    }
  }

  showAddModal = () => {
    this.setState({showAddModal: true})
  };

  hideAddModal = () => {
    this.setState({showAddModal: false})
  };

  render() {
    const {showAddModal} = this.state;
    return (
      <Card title="Performance" extra={
        <Button className="gx-btn-block ant-btn" type="primary" onClick={this.showAddModal}>
          <i className="icon icon-add-circle gx-mr-1"/>
          <span>Add Review</span>
          {/*Add Review*/}
        </Button>
      }>
        <Table className="gx-table-responsive" columns={columns} dataSource={data}/>
        <AddPerformance open={showAddModal} onClose={this.hideAddModal}/>
      </Card>
    );
  }
}

export default PerformanceTable;
