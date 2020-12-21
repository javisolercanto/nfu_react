import React from 'react';
import './Event.css';

class Event extends React.Component {
    getEventWidth(duration) {
        return (5*(duration/3600)) + 'rem';
    }

    getStartSeconds() {
        let t = new Date(1970, 0, 1);
        t.setSeconds(this.props.data.start);
        // console.log('=>>>>>>>', this.props.data.start);
        // console.log('=>', t);
    }

    getEventPosition() {
        let margin;
        if (this.props.prevEvent) {
            margin = this.props.data.start - (this.props.prevEvent.spa.start+this.props.prevEvent.spa.duration);
        } else {
            margin = (this.props.data.start - (new Date(this.props.day.date).getTime()/1000)) - 3600;
            console.log(margin);
        }
        return margin;
    }

    render() {
        return(
            <div onClick={() => this.props.change(this.props.data)} style={{ overflow: 'scroll', width: this.getEventWidth(this.props.data.duration), marginLeft: this.getEventWidth(this.getEventPosition()), backgroundColor: this.props.order ? 'grey' : '#4f4f4f'}}>
                <span>{this.props.data.name}</span>
            </div>
        )
    }
}

export default Event;