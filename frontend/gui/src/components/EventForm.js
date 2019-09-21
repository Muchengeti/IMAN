import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';

class EventForm extends React.Component {

    handleFormSubmit = (event, requestType, eventID) => {
        const title = event.target.elements.title.value;
        const author = event.target.elements.author.value;
        const group = event.target.elements.group.value;
        const event_location = event.target.elements.event_location.value;
        const event_time = event.target.elements.event_time.value;
        const content = event.target.elements.content.value;

        
        console.log("hello");
        console.log(title, author);
        switch ( requestType ) {
            case 'post':
                return axios.post('http://localhost:8000/api/events/', {
                    title: title,
                    author: author,
                    group: group,
                    event_location: event_location,
                    event_time: event_time,
                    content: content
                   
                })
                .then(res => console.log(res))
                .catch(error => console.err.log(error));
            case 'put':
            return axios.put(`http://localhost:8000/api/events/${eventID}/`, {
                    title: title,
                    author: author,
                    group: group,
                    event_location: event_location,
                    event_time: event_time,
                    content: content
            })
            .then(res => console.log(res))
            .catch(error => console.err.log(error));

        }

    }
    render() {
        return (
        <div background-color="white">
            <Form onSubmit={(event) => this.handleFormSubmit(event, this.props.requestType, this.props.eventID)}>
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
            <Form.Item>
                <Button type="primary" htmlType="submit">{this.props.btnText}</Button>
            </Form.Item>
            </Form>
        </div>
        );
    }
}

export default EventForm;
