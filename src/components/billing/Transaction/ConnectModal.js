import React from "react";
import {Avatar, Input, Table, Button, Modal} from "antd";
import {Link} from "react-router-dom"
import {NotificationContainer, NotificationManager} from "react-notifications";
import BankSignInModal from "./BankSignInModal"
import IntlMessages from "util/IntlMessages";

const columns = [{
  title: 'Account Name',
  dataIndex: 'accountName',
  key: 'accountName',
}, {
  title: 'Account Type',
  dataIndex: 'accountType',
  key: 'accountType',
}, {
  title: 'Balance',
  dataIndex: 'balance',
  key: 'balance',
}];

const data = [
  {
    key: 1,
    accountName: '****8754',
    accountType: 'Checking',
    balance: '10,000',

  },
  {
    key: 2,
    accountName: '****2456',
    accountType: 'Saving',
    balance: '100,000',
  }];

// rowSelection objects indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  },
};

class ConnectModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      nickName: this.props.nickName,
    }
  }

  render() {
    const {open, onClose} = this.props;

    return (
      <Modal
        // style={{backgroundColor: '#6236FF'}}
        title={<h2>Connect Bank</h2>}
        visible={open}
        onCancel={onClose}
        onOk={onClose}
        footer={[
          <Link to='/billing/transactions/details'>
            <div className="gx-text-center">
              <Button type="primary">Connect</Button>
            </div>
          </Link>
        ]}
        >
        {/*<Modal.Header>Connect Bank</Modal.Header>*/}
        <div className="gx-modal-box-row">
          <div className="gx-modal-box-form-item">
            <div className="gx-form-group gx-text-center">
              <img className="gx-mb-4 gx-rounded-circle gx-img-fluid gx-object-cover"
             src={"https://via.placeholder.com/120X120"} alt='spoons'/>
            </div>
            <div className="gx-form-group">
              <Table className="gx-table-responsive"
                     columns={columns}
                     rowSelection={rowSelection}
                     dataSource={data}
                     pagination={false}
              />
            </div>
          </div>
        </div>
        <NotificationContainer/>
      </Modal>
    );
  }
}

export default ConnectModal;
