import React, { useCallback, useState } from 'react';
import { Modal, Menu, Dropdown, Drawer, Button, Upload, message } from 'antd';
import Dropzone from 'react-dropzone';
import input from 'react';
import AppModuleHeader from '../../components/AppModuleHeader/index';
import { useCSVStore } from '../../mobx/csvContext';


import DropZoneComponent from './dropzoneComponent';
import { CSVView } from './CSVView';

const filterOptions = [
    {
        id: 1,
        name: 'Verify',
        icon: ''
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



const Analytics = () => {
    const [state, setState] = useState({
        showCreateNewModal: false,
        showDragDropText: true,
        acceptedFiles: [],
        displayFile: false,
        searchAnalyticsText: '',
        uploadedFiles: [],
    })
    const csvStore = useCSVStore();

    const handleCreateNew = () => {
        console.log('Button Clicked');

        setState((prevState) => {
            return {
                ...prevState,
                showCreateNewModal: true
            }
        })

    }

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
    }

    const isValid = (str) => {
        var iChars = "~`!#$%^&*+=-[]\\\';,/{}|\":<>?";
    
        for (var i = 0; i < str.length; i++) {
           if (iChars.indexOf(str.charAt(i)) != -1) {
               return str;
           }
        }
        return true;
    }

    
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
                        <i className="icon icon-contact gx-mr-4" />

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
                        <i className="icon icon-contact gx-mr-4" />

                    </div>
                </div>
                <p>Columns</p>
            </div>

        )
    }

    const handleAnalyticsOptions = (buttonName) => {
        switch (buttonName) {
            case 'Verify':
                console.log('Verify button clicked');
                const verifyDataArray = csvStore.getCSVData();
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
        accept: ".csv",
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
                            style={{ width: 100, height: 300 }}
                            title="Create New"
                            visible={state.showCreateNewModal}
                            onOk={handleNext}
                            onCancel={handleCancel}
                            maskClosable={true}
                            okText="Next">
                            <p>{`Welcome to Analytics \nBring your data to life by utilizing our visualizing tools`}</p>

                        <Upload 
                            accept=".csv"
                            {...uploadProps}>
                            <Button>Upload CSV</Button>
                        </Upload>
                        <div style={{ marginTop: 10, borderBlockStyle:'dashed' }}>
                            <DropZoneComponent />
                        </div>
                            {/* <Dropzone 
                        onDrop={acceptedFiles => this.showDraggedFiles(acceptedFiles)}>
                            {({getRootProps, getInputProps}) => (
                                <section>
                                    <div 
                                    style={{ borderBlockStyle:'dashed' }}
                                    {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        {this.state.showDragDropText  ? (
                                            <p>Drag and Drop</p>
                                        ) :
                                        (
                                            <div>
                                                <ul>
                                                {this.state.acceptedFiles.map((item) => (
                                                    <li>
                                                        {`${item.name}`}
                                                    </li>
                                                ))}
                                                </ul>
                                            </div>
                                        )
                                        }                                        
                                    </div>
                                </section>
                            )}
                        </Dropzone> */}
                        </Modal>
                    </div>
                    <div className="gx-module-box">
                        <AppModuleHeader placeholder="Search Analytics" notification={false} apps={false}
                            // onChange={this.updateAnalyticsText.bind(this)}
                            value={state.searchAnalyticsText} />
                        {
                            state.displayFile && (
                                <div style={{ backgroundColor: '#6236FF', padding: 15, color: 'Black' }}>
                                    {filterOptions.map((item, index) => (
                                        <button onClick={() => handleAnalyticsOptions(item.name)}>
                                            {`${item.name}`}
                                        </button>
                                    ))}
                                    <div className="gx-module-box-header">
                                        <div>
                                            <CSVView />
                                        </div>
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