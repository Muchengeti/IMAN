import React from 'react';
import Articles from '../components/Article';
import axios from 'axios';


const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

class EventList extends React.Component {

    state = {
        events: []
    }

    componentDidMount(){
        axios.get('http://localhost:8000/api/events')
            .then(res => {
                this.setState({
                    events: res.data
                });

            })

    }
    render() {
        return(
            <Articles data={this.state.events}/>

        )

    }
}

export default EventList; 