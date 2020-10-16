import React from "react";
import {Button, Card, message, Upload} from "antd";
import Icon from '@ant-design/icons';
import UploadOutlined from "@ant-design/icons/lib/icons/UploadOutlined";

const props = {
  name: 'file',
  action: '//jsonplaceholder.typicode.com/posts/',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const AddAgreements = () => {
    return (
      // <Card className="gx-card" title="Upload Click">
      <div>
        <Upload {...props}>
          <Button>
            <UploadOutlined /> Add Document
          </Button>
        </Upload>
      {/*</Card>*/}
      </div>
    );
  }
;

export default AddAgreements;
