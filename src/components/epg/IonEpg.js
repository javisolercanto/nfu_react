import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle } from '@ionic/react';
import data from '../../data/epg.json'; 
import IonEvent from '../event/IonEvent';
import Info from '../info/Info';

class IonEpg extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            selectedDay: {
                day: 1,
                show: true,
            },
            epg: {},
            event: {}
        }
    }

    componentDidMount() {
        this.setState({
            isLoaded: true,
            epg: data,
        });
    }

    showInfo = (data) => {
        this.setState({
            event: data
        });
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

    mustShow() {

    }

    selectDay(day) {
        this.setState({
            selectedDay: {
                day: day,
                show: !this.state.selectedDay.show,
            }
        });

        console.log(this.state.selectedDay);
    }

    setSeparator(current=undefined, next=undefined) {
        if (!current && next) {
            let date = new Date(1970, 0, 1);
            date.setSeconds(next.start);
            return <>
            <IonCard className='separator' onClick={() => this.selectDay(date.getDay())}>
                <IonCardHeader>
                    <IonCardTitle>{this.getStringDay(date.getDay())}</IonCardTitle>
                </IonCardHeader>
            </IonCard></>
        }

        if (next) {
            let currentDate = new Date(1970, 0, 1);
            currentDate.setSeconds(current.start);
            let nextDate = new Date(1970, 0, 1);
            nextDate.setSeconds(next.start);

            if (currentDate.getDay() !== nextDate.getDay())
            return <>
            <IonCard className='separator' onClick={() => this.selectDay(nextDate.getDay())}>
                <IonCardHeader>
                    <IonCardTitle>{this.getStringDay(nextDate.getDay())}</IonCardTitle>
                </IonCardHeader>
            </IonCard></>
        }
    }

    render() {
        return(
            <>
            <div className="ionepg">
                <h1 className="ionepg__title">{this.state.epg.name}</h1>
                <div style={{display: 'flex', gridArea: '2 / 2', width: '60%', justifyContent: 'space-around'}}>
                    <div className="ioncontainer">
                        <ion-infinite-scroll threshold="50px" id="infinite-scroll">
                            <ion-infinite-scroll-content
                                loading-spinner="bubbles"
                                loading-text="Loading more data...">
                                {this.state.isLoaded && Object.values(this.state.epg.events).map(
                                    (event, index, events) => {
                                        return <>
                                            {index === 0 && this.setSeparator(undefined, event.spa)}

                                            <IonEvent show={this.state.selectedDay} change={this.showInfo} event={event.spa} 
                                                key={Object.keys(this.state.epg.events)[index]} />

                                            {this.setSeparator(event.spa, events[index+1] && events[index+1].spa)}
                                        </>
                                    }
                                )}
                            </ion-infinite-scroll-content>
                        </ion-infinite-scroll>
                    </div>
                    <Info event={this.state.event} />
                </div>
            </div>
            </>
        )
    }
}

export default IonEpg;