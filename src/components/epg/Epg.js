import './Epg.css';
import data from '../../data/epg.json'; 
import React from 'react';
import Day from '../day/Day.js';
import Hour from '../hour/Hour.js';
import Event from '../event/Event.js';
import Info from '../info/Info';

class Epg extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            epg: {},
            isLoaded: false,
            days: [
                'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
            ],
            hours: [],
            selectedDay: '',
            selectedEvent: '',
        };
    }

    componentDidMount() {

        let hours = [];
        for (let i = 0; i < 24; i++) {
            hours.push(i + ":00");
        }

        this.setState({
            epg: data,
            isLoaded: true,
            hours: hours
        });
    }

    selectDay = (day) => {
        this.setState({
            selectedDay: day,
            events: Object.values(data.events).filter(
                event => this.getDayeBySeconds(event.spa.start).getDate() === day.date.getDate())
        });
    }

    selectEvent = (event) => {
        console.log(event);
        this.setState({
            selectedEvent: event,
        })
    }

    getDayeBySeconds(seconds) {
        // console.log(seconds);
        let t = new Date(1970, 0, 1);
        t.setSeconds(seconds)
        // console.log(t);
        return t;
    }

    getDataTime() {
        let week = [];
        for(let i = 0; i < 7; i++) {
            week.push({
                weekday: this.state.days[i],
                day: new Date().getDate()-((new Date().getDay()-1)-i),
                month: new Date().getMonth(),
                date: new Date(new Date().getFullYear(),  new Date().getMonth(), new Date().getDate()-((new Date().getDay()-1)-i))
            });
        }
        return week;
    }

    render() {
        return(
            <div className="epg">
                <div className="epg__item  epg__timeline">
                    {this.state.days.map((day,index) => <Day data={this.getDataTime()[index]} isSelected={day === this.state.selectedDay.weekday} change={this.selectDay}/>)}
                </div>
                <div className="epg__item  epg__infochannel">
                    <span>{this.state.isLoaded && this.state.epg.name}</span>
                </div>
                <div className="epg__item  epg__schedule">
                    <div className="epg__hours">
                        {this.state.hours.map(hour => <Hour hour={hour}/>)}
                    </div>
                    <div className="epg__events">
                        {this.state.events && this.state.events.map(
                            (event, index) => <Event data={event.spa} day={this.getDataTime()[this.state.selectedDay.date.getDay()-1]} order={index%2===0} change={this.selectEvent} prevEvent={this.state.events[index-1]}/>)}
                    </div>
                </div>
                <div className="epg__item  epg__infoevent">
                    <Info event={this.state.selectedEvent}/>
                </div>
            </div>
        )
    }
}

export default Epg;