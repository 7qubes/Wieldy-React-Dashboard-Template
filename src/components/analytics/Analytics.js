import React from 'react';
import {Modal, Menu, Dropdown, Drawer} from 'antd';
import Dropzone from 'react-dropzone';
import input from 'react';
import AppModuleHeader from '../../components/AppModuleHeader/index';


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
class Analytics extends React.Component
{
    state = {
        showCreateNewModal: false,
        showDragDropText: true,
        acceptedFiles: [],
        displayFile: false,
        searchAnalyticsText: ''
    }

    handleCreateNew = () => {
        console.log('Button Clicked');
        this.setState({
            showCreateNewModal: true,
        });
        
    }

    handleNext = () => {
        const {acceptedFiles} = this.state;
        console.log('OK Button clicked');
        if (acceptedFiles.length < 1) {
            console.log('No file selected');
        }
        else {
            console.log('Files selected');
            this.setState({
                displayFile: true,
                showCreateNewModal: false,
            });
        }
        //
    }

    handleCancel = () => {
        console.log('Close Modal');
        this.setState({
            showCreateNewModal: false,
        })
    }

    uploadCSV = () => {
        // Render functional component to show data
    }

    AnalyticsSideBar = () => {
        return (
    <div className="gx-module-side">
      <div className="gx-module-side-header">
        <div className="gx-module-logo">
          <i className="icon icon-contact gx-mr-4"/>
          
        </div>
      </div>
      
      <button onClick={this.handleCreateNew}>
            Create New
        </button>
      </div>

        )   
    }

    showDraggedFiles = (acceptedFiles) => {
        this.setState({
            showDragDropText: false,
            acceptedFiles: acceptedFiles
        });
        console.log(acceptedFiles);
    }
    
    updateAnalyticsText = (evt) => {
        this.setState({
            searchAnalyticsText: evt.target.value,
        })
    }


    ColumnSideBar = () => {
        return (
    <div className="gx-module-side">
      <div className="gx-module-side-header">
        <div className="gx-module-logo">
          <i className="icon icon-contact gx-mr-4"/>
          
        </div>
      </div>
      <p>Columns</p>
      </div>

        )   
    }

    handleAnalyticsOptions = (buttonName) => {
        switch(buttonName) {
            case 'Verify': 
                console.log('Verify button clicked');
                break;
        }
    }
    
    render(){
        return (
            <div className="gx-main-content">
            <div className="gx-app-module">
            <div className="gx-module-sidenav gx-d-none gx-d-lg-flex">
                {!this.state.displayFile ? 
                    this.AnalyticsSideBar() : this.ColumnSideBar()}
                <Modal 
                    style={{width: 100, height: 300}}
                    title="Create New"
                    visible={this.state.showCreateNewModal}
                    onOk={this.handleNext}
                    onCancel={this.handleCancel}
                    maskClosable={true}
                    okText="Next">
                        <p>{`Welcome to Analytics \nBring your data to life by utilizing our visualizing tools`}</p>
                        <button
                            onClick={this.uploadCSV}
                        >
                            Upload CSV
                        </button>
                        <Dropzone 
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

                        </Dropzone>
                </Modal>
            </div>
            <div className="gx-module-box">
            <AppModuleHeader placeholder="Search Analytics" notification={false} apps={false}
                               onChange={this.updateAnalyticsText.bind(this)}
                               value={this.state.searchAnalyticsText}/>
             {
                this.state.displayFile && (
                    <div style={{backgroundColor: '#6236FF', padding: 15, color: 'Black'}}>
                        {filterOptions.map((item, index) => (
                            <button onClick={() => this.handleAnalyticsOptions(item.name)}>
                                {`${item.name}`}
                            </button>
                        ))}
                    </div>
                )
            }
            </div>
           
            </div>
            </div>


           
        )
    }
}

export default Analytics;