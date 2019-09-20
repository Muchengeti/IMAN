import React from 'react';

import { List, Avatar, Icon } from 'antd';


const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const Articles = (props) => {
    return (
        
        <List
            itemLayout="vertical"
            size="large"
            pagination={{
            onChange: page => {
                console.log(page);
            },
                        //Remove or change page size
            }}
            dataSource={props.data}
            footer={
            <div>
               
            </div>
            }
            renderItem={item => (
            <List.Item
                key={item.title}
                actions={[
                <IconText type="star-o" text="156" key="list-vertical-star-o" />,
                <IconText type="like-o" text="156" key="list-vertical-like-o" />,
                <IconText type="message" text="2" key="list-vertical-message" />,
                ]}
                extra={
                <img
                    width={272}
                    alt="logo"
                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />
                }
            >
                <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<a href={`articles/${item.id}`}>{item.title}</a>}
                description={item.created_at}
                />
                Written by {item.author}
            </List.Item>
            )}
        /> 
    )
}

export default Articles;