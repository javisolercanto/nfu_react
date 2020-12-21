import React from 'react';
import './Event.css';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

class IonEvent extends React.Component {

    getDateBySeconds(seconds) {
        let t = new Date(1970, 0, 1);
        t.setSeconds(seconds);
        return t;
    }

    getStartSeconds(seconds) {
        let t = this.getDateBySeconds(seconds);
        return this.getStringDay(t.getDay()) + ' ' +  t.getDate() + '/' + (t.getMonth() + 1) + '/' + t.getFullYear()
        + ' - ' + (t.getHours() === 0 ? '00' : t.getHours()) + ':' + (t.getMinutes() === 0 ? '00h' : t.getMinutes() + 'h');
    }

    getStringDay(day) {
        switch(day) {
            case 1: return 'Monday';
            case 2: return 'Tuesday';
            case 3: return 'Wednesday';
            case 4: return 'Thursday';
            case 5: return 'Friday';
            case 6: return 'Saturday';
            case 7: return 'Sunday';
        }
    }

    getEventPosition() {
        let margin;
        if (this.props.prevEvent) {
            margin = this.props.data.start - (this.props.prevEvent.spa.start+this.props.prevEvent.spa.duration);
        } else {
            margin = (this.props.data.start - (new Date(this.props.day.date).getTime()/1000)) - 3600;
        }
        return margin;
    }

    render() {
        return(
            <IonCard className="ionevent" style={{display: this.props.show.day === this.getDateBySeconds(this.props.event.start).getDay() && this.props.show.show ? 'block' : 'none'}} onClick={() => this.props.change(this.props.event)}>
                <IonCardHeader>
                    <IonCardSubtitle>{this.getStartSeconds(this.props.event.start)}</IonCardSubtitle>
                    <IonCardTitle>{this.props.event.name}</IonCardTitle>
                    <IonCardSubtitle>{this.props.event.rating ? this.props.event.rating : '0+'}</IonCardSubtitle>
                </IonCardHeader>
            </IonCard>
        )
    }
}

export default IonEvent;