import React, {useState} from 'react';
import { useCSVStore } from '../../mobx/csvContext';
import { Table, Tag, Space } from 'antd';

export const CSVView = () => {
    const csvStore = useCSVStore();
    const [csvData] = useState(csvStore.getCSVData());

    const dataRows = csvData.map((rowData, idx) => {
        return (
            <tr key={rowData.Sl + idx}>
                <td>{rowData.Sl}</td>
                <td>{rowData.Name}</td>
                <td>{rowData.Author}</td>
                <td>{rowData.Unit}</td>
                <td>{rowData.Price}</td>
                <td>{rowData.Discount}</td>
                <td>{rowData.Quantity}</td>
                <td>{rowData.Owner}</td>
                <td>{rowData.Merchant}</td>
                <td>{rowData.Tax}</td>
            </tr>
        );
    });

    const columns = [
        {
          title: 'Sl',
          dataIndex: 'Sl',
          key: 'sl',
        },
        {
          title: 'Name',
          dataIndex: 'Name',
          key: 'name',
        },
        {
          title: 'Author',
          dataIndex: 'Author',
          key: 'author',
        },
        {
          title: 'Unit',
          dataIndex: 'Unit',
          key: 'unit',
        },
        {
            title: 'Price',
            dataIndex: 'Price',
            key: 'price',
        },
        {
            title: 'Discount',
            dataIndex: 'Discount',
            key: 'Discount',
        },
        {
            title: 'Quantity',
            dataIndex: 'Quantity',
            key: 'quantity',
        },
        {
            title: 'Owner',
            dataIndex: 'Owner',
            key: 'owner',
        },
        {
            title: 'Merchant',
            dataIndex: 'Merchant',
            key: 'merchant',
        },
        {
            title: 'Tax',
            dataIndex: 'Tax',
            key: 'tax',
        }

      ];

    return (
        <div>

         <Table className="gx-table-responsive"
                     columns={columns}
                     dataSource={csvData}
                     pagination={false}
              />
        </div>
    )
}