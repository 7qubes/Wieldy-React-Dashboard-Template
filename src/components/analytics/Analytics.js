import React, { useCallback, useState } from 'react';
import { Modal, Menu, Dropdown, Drawer, Button, Upload, message, Alert } from 'antd';
import Dropzone from 'react-dropzone';
import input from 'react';
import AppModuleHeader from '../../components/AppModuleHeader/index';
import { useCSVStore } from '../../mobx/csvContext';
import DropZoneComponent from './dropzoneComponent';
import { CSVView } from './CSVView';
import { ErrorLog } from './ErrorLog';
import { uploadFile } from 'react-s3';
import axios from "axios";

const filterOptions = [
    {
        id: 1,
        name: 'Verify',
        icon: 'CheckCircleOutlined'
    },
    {
        id: 2,
        name: 'Query',
        icon: ''
    },
    {
        id: 3,
        name: 'Save',
        icon: ''
    },
    {
        id: 4,
        name: 'Edit',
        icon: ''
    },
    {
        id: 5,
        name: 'Graph',
        icon: ''
    },
    {
        id: 6,
        name: 'Error Log',
        icon: ''
    },
    {
        id: 7,
        name: 'History Edits',
        icon: ''
    },
    {
        id: 8,
        name: 'Export',
        icon: ''
    },
    {
        id: 9,
        name: 'Delete',
        icon: ''
    },

]

const config = {
    bucketName: 'uic7qubes',
    region: 'us-east-2',
    accessKeyId: 'AKIAQ3ZBAFBP7JXZPAE7',
    secretAccessKey: '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',
  }
  
const upload = file => {
    // console.log(e.target.files[0]);
    uploadFile(file, config)
        .then(data => console.log(data))
        .catch(err => console.error(err))
}

const Analytics = () => {
    const [state, setState] = useState({
        showCreateNewModal: false,
        showDragDropText: true,
        acceptedFiles: [],
        displayFile: false,
        searchAnalyticsText: '',
        uploadedFiles: [],
    })
    const [errorLogData, setErrorLogData] = useState(null);
    const csvStore = useCSVStore();

    const handleCreateNew = () => {
        console.log('Button Clicked');

        setState((prevState) => {
            return {
                ...prevState,
                showCreateNewModal: true
            };
        });
    };
    
    const handleNext = () => {
        const { acceptedFiles } = state;
        console.log('1122');
        console.log(csvStore.getCSVData())
        setState(prevState => {
            return {
                ...prevState,
                displayFile: true ? csvStore.getCSVData() : false,
                showCreateNewModal: false,
                //handle the next button for non csv file
            }
        })
        upload(csvStore.getCSVData());
        saveCSV();
    }
    function saveCSV() {
        const url = "http://localhost:8000/data/parse/csv";
        const dataJson = {
          data: state.uploadedFiles,
        };
        console.log("SaveCSV dataJson", dataJson);
        axios
          .post(url, state.uploadedFiles)
          .then((response) => console.log("In saveCSV response: ", response));
      }
      
    const isValid = (rowData, key) => {
        let str = rowData[key];
        console.log("rowData", rowData);
        var iChars = "~`!#$%^&*+=[]\\\;/{}|\:<>?";
        let errorObj = {};
        for (var i = 0; i < str.length; i++) {
           if (iChars.indexOf(str.charAt(i)) != -1) {
               //at this point the string has special characters
               console.log(errorObj, str);
               errorObj["errorMsg"] = 'Cannot read item ' + str.charAt(i) + ' in column ' + key + ' row ' + rowData.Sl;
               errorObj["str"] = str;
               errorObj["key"] = key;
               errorObj["row"] = parseInt(rowData.Sl);
               errorObj["resolveError"] = 'Resolve';
               return errorObj;
           }
        }
        return null;
    }

    // const isValid = (str) => {
    //     var iChars = "~`!#$%^&*+=-[]\\\';,/{}|\":<>?";

    //     for (var i = 0; i < str.length; i++) {
    //        if (iChars.indexOf(str.charAt(i)) != -1) {
    //            return str;
    //        }
    //     }
    //     return true;
    // }


    const handleCancel = () => {
        console.log('Close Modal');
        setState(prevState => {
            return {
                ...prevState,
                showCreateNewModal: false
            }
        })
    }

    const uploadCSV = () => {
        // Render functional component to show data
    }

    const AnalyticsSideBar = () => {
        return (
            <div className="gx-module-side">
                <div className="gx-module-side-header">
                    <div className="gx-module-logo">
                        <i className="icon icon-analytics gx-mr-4" > Analytics</i>

                    </div>
                </div>
                <div className="gx-module-add-task">
                <Button className="gx-btn-block ant-btn" type="primary" aria-label="add"
                    onClick={handleCreateNew}>
              <i className="icon icon-add gx-mr-1"/>
              <span>Create New</span>
            </Button>
            
                </div>

            </div>

        )
    }

    const showDraggedFiles = (acceptedFiles) => {
        setState(prevState => {
            return {
                ...prevState,
                showDragDropText: false,
                acceptedFiles: acceptedFiles
            }
        });
    }

    const updateAnalyticsText = (evt) => {
        setState(prevState => {
            return {
                ...prevState,
                searchAnalyticsText: evt.target.value,
            }
        })
    }


    const ColumnSideBar = () => {
        return (
            <div className="gx-module-side">
                <div className="gx-module-side-header">
                    <div className="gx-module-logo">
                        <i className="icon icon-analytics gx-mr-4" > Analytics</i>

                    </div>
                </div>
                <p>Columns</p>
            </div>

        )
    }

    const handleAnalyticsOptions = (buttonName) => {
        switch (buttonName) {
            case 'Verify':
                /*const verifyDataArray = csvStore.getCSVData();
                console.log(verifyDataArray)
                let inValidString = [];
                verifyDataArray.map(item => {
                    //console.log('i am here 33333');
                  //console.log(item);
                  const inValidStr = isValid(item) ;
                  if(inValidStr){
                    inValidString.push(inValidStr);
                  }
                });
                console.log('In Valid Strings....');
                console.log(inValidString);
                break;*/
            case 'Error Log':
                console.log('Error Log button clicked');
                const { csvData:tableData } = csvStore;
                let errorDataArr = [];

                tableData.map(rowData => {
                  let rowItems = Object.keys(rowData);

                  rowItems.map(item => {

                    const inValidStr = isValid(rowData,item) ;
                    if(inValidStr){
                        errorDataArr.push(inValidStr);
                    }
                  });
                });

                setErrorLogData(errorDataArr);

                    break;
        }
    }

   /* const handleAnalyticsOptions = (buttonName) => {
        switch (buttonName) {
            case 'Verify':
                console.log('Verify button clicked');
                const verifyDataArray = csvStore.getCSVData();
                console.log(verifyDataArray);
                verifyDataArray.map((verifyRecord) => {
                    console.log(verifyRecord);
                });

                break;
        }
    }*/

    const uploadProps = {
        beforeUpload: file => {
            const reader = new FileReader();

            reader.onload = e => {
                csvStore.addCSVData(e.target.result.split('\n'))
            }
            reader.readAsText(file);
             if (file.name.substr(file.name.length - 4) !== '.csv') {
              message.error(`${file.name} is not a csv file`);
              return Upload.LIST_IGNORE;
             }
             const {uploadedFiles} = state;
             console.log(uploadedFiles, file);
             return true;
        },
        onChange: info => {
        }
    }

        return (
            <div className="gx-main-content">
                <div className="gx-app-module">
                    <div className="gx-module-sidenav gx-d-none gx-d-lg-flex">
                    
                        {!state.displayFile ?
                            AnalyticsSideBar() : ColumnSideBar()}
                        <Modal
                            
                            headStyle={{ backgroundColor:'#6236FF'}} 
                            style={{ width: 100, height: 300 }}
                            title="Create New"
                            visible={state.showCreateNewModal}
                            onOk={handleNext}
                            onCancel={handleCancel}
                            maskClosable={true}
                            okText="Next">
                            <p>{`Welcome to Analytics \nBring your data to life by utilizing our visualizing tools`}</p>

                        <Upload
                            {...uploadProps}>
                            <Button type="button" class="btn btn-outline-primary">Upload CSV</Button>
                        </Upload>

                        <div style={{ marginTop: 10, borderBlockStyle:'dashed' }}>
                            <DropZoneComponent />
                        </div>
                        </Modal>
                    </div>

                    <div className="gx-module-box">
                        <AppModuleHeader placeholder="Search Analytics" notification={false} apps={false}
                            // onChange={this.updateAnalyticsText.bind(this)}
                            value={state.searchAnalyticsText} />
                        {
                            state.displayFile && (
                        
                                <div style={{ backgroundColor: '#6236FF', padding: 10, color: 'White' }}>
                                    {filterOptions.map((item, index) => (
                                        <button type="button" class="btn btn-light" style={{ backgroundColor:"#6236FF", outline: "none", borderColor: "#6236FF",color:"white" }}  onClick={() => handleAnalyticsOptions(item.name)}>
                                         {`${item.name}`}
                                         
                                        </button>
                                    ))}
                                    <div className="gx-module-box-header">
                                        <div>
                                            <CSVView />
                                        </div>
                                        {errorLogData && <ErrorLog errorData={errorLogData} />}
                                        </div>
                                </div>
                                
                            )
                        }
                        
                    </div>
                </div>
            </div>



        )
    }

export default Analytics;
