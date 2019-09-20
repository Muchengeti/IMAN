import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';

class ArticleForm extends React.Component {

    handleFormSubmit = (event, requestType, articleID) => {
        const title = event.target.elements.title.value;
        const author = event.target.elements.author.value;
        const content = event.target.elements.content.value;
        
        console.log("hello");
        console.log(title, author);
        switch ( requestType ) {
            case 'post':
                return axios.post('http://localhost:8000/api/articles/', {
                    title: title,
                    author: author,
                    content: content
                   
                })
                .then(res => console.log(res))
                .catch(error => console.err.log(error));
            case 'put':
            return axios.put(`http://localhost:8000/api/articles/${articleID}/`, {
                title: title,
                author: author,
                content: content
            })
            .then(res => console.log(res))
            .catch(error => console.err.log(error));

        }

    }
    render() {
        return (
        <div background-color="white">
            <Form onSubmit={(event) => this.handleFormSubmit(event, this.props.requestType, this.props.articleID)}>
            <Form.Item label="Title">
                <Input name="title" placeholder="Enter title here" />
            </Form.Item>
            <Form.Item label="Author">
                <Input name="author" placeholder="Enter author here" />
            </Form.Item>
            <Form.Item label="Content">
                <Input name="content" placeholder="Enter content here" />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">{this.props.btnText}</Button>
            </Form.Item>
            </Form>
        </div>
        );
    }
}

export default ArticleForm;

