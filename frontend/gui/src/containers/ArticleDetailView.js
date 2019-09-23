import React from 'react';
import axios from 'axios';
import { Card } from 'antd'; 
import ArticleForm from '../components/ArticleForm';

class ArticleDetail extends React.Component {

    state = {
        article: {}
    }

    componentDidMount(){
        const articleID = this.props.match.params.articleID;
        axios.get(`http://localhost:8000/api/articles/${articleID}/`)
            .then(res => {
                this.setState({
                    article: res.data
                });

            })

    }
    render() {
        return(
            <div>
                <Card title={this.state.article.title}>
                <p>
                    {this.state.article.content}
                    <br />
                    <br />
                    <b>Written by</b> 
                    <br />
                    {this.state.article.author}
                </p>
                </Card>
                <ArticleForm requestType="put" articleID={this.props.match.params.articleID} btnText="Update"/>
            </div>
            
           

        )

    }
}

export default ArticleDetail; 