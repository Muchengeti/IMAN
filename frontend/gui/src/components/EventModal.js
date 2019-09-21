import React from 'react';
import { Modal, Button } from 'antd';
import { Form, Input} from 'antd';

class EventModal extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    const form = this.form
    this.setState({
      visible: false,
    });
  };

  saveFormRef = (form) => {
        this.form = form;
    }

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
          Create Event
        </Button>
        <Modal
          title="Enter Your Event Details"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <div background-color="white">
            <Form onSubmit={(event) => this.handleFormSubmit(event, this.props.requestType, this.props.articleID)}
            ref={this.saveFormRef}>
            <Form.Item label="Title">
                <Input name="title" placeholder="Enter title" />
            </Form.Item>
            <Form.Item label="Author">
                <Input name="author" placeholder="Enter author" />
            </Form.Item>
            <Form.Item label="Group">
                <Input name="group" placeholder="Enter group" />
            </Form.Item>
            <Form.Item label="Location">
                <Input name="event_location" placeholder="Enter location" />
            </Form.Item>
            <Form.Item label="Time">
                <Input name="event_time" placeholder="Enter time" />
            </Form.Item>
            <Form.Item label="Content">
                <Input name="content" placeholder="Enter content" />
            </Form.Item>
            </Form>
        </div>
        <Button></Button>
        </Modal>
      </div>
    );
  }
}

export default EventModal;