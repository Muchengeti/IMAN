import React from 'react';
import Events from '../components/Event';
import axios from 'axios';
import EventForm from '../components/EventForm';
import EventModal from '../components/EventModal';
import { Button } from 'antd';
import SearchBar from '../components/SearchBar';


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
        axios.get('http://localhost:8000/api/events/')
            .then(res => {
                this.setState({
                    events: res.data
                });

            })

    }
    render() {
        return(
            <div>
                <EventModal></EventModal>
                <h1 align="center"><font size="5">Events</font></h1>
                <br />
                <SearchBar></SearchBar>
                <br />
                <Events data={this.state.events}/>
                <br />
                <EventForm requestType="post" eventID={null} btnText="Create"></EventForm>
            </div>

        )

    }
}

export default EventList; 