import React, { useContext, useState } from 'react';
import { Table, Button } from 'antd';
import { useCSVStore } from '../../mobx/csvContext';
import axios from 'axios';

export const ErrorLog = (props) => {
    const { errorData } = props;
    const csvStore = useCSVStore();
    console.log('Error Log Data 111');
    console.log(errorData);

    const [errorId, setErrorId] = useState(null);

    const handleDataError = (errorRecord) => {
      console.log('handle 111');
      console.log(errorRecord);
      // https://cors-anywhere.herokuapp.com/
      axios.get('http://127.0.0.1:8000/resolve/'+errorRecord['str'],{'str':errorRecord['str']})
      .then(response =>{
          console.log('handle 222');
          console.log(response);
          setErrorId(response.data)
          console.log(response['data'])
          errorRecord['str'] = response['data']['data']
      });

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
