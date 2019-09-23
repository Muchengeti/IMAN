import React from 'react';
import axios from 'axios';
import { Card } from 'antd'; 

class EventDetail extends React.Component {

    state = {
        event: {}
    }

    componentDidMount(){
        const eventID = this.props.match.params.eventID;
        axios.get(`http://localhost:8000/api/events/${eventID}/`)
            .then(res => {
                this.setState({
                    event: res.data
                });

            })

    }
    render() {
        return(
            <Card title={this.state.event.title}>
                <p>
                    <p><b>Group</b> <br /> {this.state.event.group}</p>
                    <p><b>Time</b> <br />{this.state.event.event_time}</p>
                    <p><b>Location</b> <br />{this.state.event.event_location}</p>
                    <br />
                    <p><b>Description</b> <br />{this.state.event.content}</p>
                    <br />
                    <p><b>Created by</b> <br /> {this.state.event.author}</p>
                </p>
            </Card>
           

        )

    }
}

export default EventDetail; 