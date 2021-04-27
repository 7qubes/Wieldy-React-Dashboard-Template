import React, { useContext } from 'react';
import { Table, Button } from 'antd';
import { useCSVStore } from '../../mobx/csvContext';

export const ErrorLog = (props) => {
    const { errorData } = props;
    const csvStore = useCSVStore();
    console.log('Error Log Data 111');
    console.log(errorData);

    const handleDataError = (errorRecord) => {
      const csvData = csvStore.getCSVData();
      const errorRow = errorRecord["row"];
      const key = errorRecord["key"]
      csvStore.fixCSVDataError(errorRow, key, 'hello');
    }

    const columns = [
        {
          title: 'Errors',
          dataIndex: 'errorMsg',
          key: 'errorMsg',
        },
        {
          title: 'String',
          dataIndex: 'str',
          key: 'str',
        },
        {
          title: 'Resolve',
          dataIndex: 'resolveError',
          key: 'resolveError',
          render: (text, record) => {
            return (
              <Button onClick={() => {handleDataError(record)}}>
                {record.resolveError}
              </Button>)
          }
        }
      ];

    return (
        <div>
         <Table className="gx-table-responsive"
                     columns={columns}
                     dataSource={errorData}
                     pagination={false}
              />
        </div>
    )
}
