import React from "react";
import { Card, Input, Tag, Tooltip } from "antd";
import PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined";
import { CloseOutlined } from '@ant-design/icons';


class AddComment extends React.Component {
  state = {
    tags: ['Leave your work', 'Wow!'],
    inputVisible: false,
    inputValue: '',
  };

  handleClose = (removedTag) => {
    const tags = this.state.tags.filter(tag => tag !== removedTag);
    console.log(tags);
    this.setState({ tags });
  };

  showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus());
  };

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleInputConfirm = () => {
    const state = this.state;
    const inputValue = state.inputValue;
    let tags = state.tags;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    console.log(tags);
    this.setState({
      tags,
      inputVisible: false,
      inputValue: '',
    });
  };

  saveInputRef = input => this.input = input;

  render() {
    const { tags, inputVisible, inputValue } = this.state;
    const { title } = this.props;
    return (
      <div>
        {
          tags.map((tag, index) => (
            <Input placeholder={tag}
              iconRender={visible => (visible ? this.handleClose(tag) : <CloseOutlined />)}
              // onClick={() => this.handleClose(tag)}
              suffix={
                <Tooltip >
                  <CloseOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                </Tooltip>
              }

            ></Input>
          ))
        }

        {inputVisible && (
          <Input
            ref={this.saveInputRef}
            type="text"
            size="medium"
            style={{ width: '100% ' }}
            value={inputValue}
            onChange={this.handleInputChange}
            onBlur={this.handleInputConfirm}
            onPressEnter={this.handleInputConfirm}
          />
        )}
        {!inputVisible && (
          <Tag
            onClick={this.showInput}
            style={{ background: '#fff', color: "#2db7f5" }}
          >
            <PlusOutlined /> Add Comment
          </Tag>
        )}
      </div>
    );
  }
}

export default AddComment;
