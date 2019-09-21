import React from 'react';
import { Modal, Button } from 'antd';
import { Form, Input} from 'antd';

class ArticleModal extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Create Article
        </Button>
        <Modal
          title="Enter Your Article Details"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <div background-color="white">
            <Form onSubmit={(event) => this.handleFormSubmit(event, this.props.requestType, this.props.articleID)}>
            <Form.Item label="Title">
                <Input name="title" placeholder="Enter title" />
            </Form.Item>
            <Form.Item label="Author">
                <Input name="author" placeholder="Enter author" />
            </Form.Item>
            <Form.Item label="Content">
                <Input name="content" placeholder="Enter content" />
            </Form.Item>
            </Form>
        </div>
        </Modal>
      </div>
    );
  }
}

export default ArticleModal;