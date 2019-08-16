import React from 'react';
import axios from 'axios';
import { Card } from 'antd'; 

class EventDetail extends React.Component {

    state = {
        event: {}
    }

    componentDidMount(){
        const eventID = this.props.match.params.eventID;
        axios.get(`http://localhost:8000/api/events/${eventID}`)
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
                    {this.state.event.content}
                </p>
            </Card>
           

        )

    }
}

export default EventDetail; 