import React from 'react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonAlert } from '@ionic/react';
import './Info.css';

class Info extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            remindAlert: false,
            saveAlert: false
        }
    }

    getStartSeconds(seconds) {
        let t = new Date(1970, 0, 1);
        t.setSeconds(seconds);
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

    render() {
        return(
            <>
            <div className="info">
                <span>
                    {!this.props.event.name && 'Select an event'}
                </span>
                {this.props.event.name && (
                    <>
                    <IonCard className="info__toolbar">
                        <IonCardHeader>
                            <IonCardSubtitle>{this.getStartSeconds(this.props.event.start)}</IonCardSubtitle>
                            <IonCardTitle>{this.props.event.name}</IonCardTitle>
                            <IonCardSubtitle>{this.props.event.rating ? this.props.event.rating : '0+'}</IonCardSubtitle>
                            <IonCardContent>Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean.</IonCardContent>
                            <div className="info__toolbar">
                                <button onClick={() => this.setState({remindAlert: true})} expand="block">¡Avísame!</button>
                                <IonAlert
                                    isOpen={this.state.remindAlert}
                                    onDidDismiss={() => this.setState({remindAlert: false})}
                                    cssClass='my-custom-class'
                                    header={'Serás notificado cuando empiece el evento'}
                                    buttons={['OK']}
                                />
                                <button onClick={() => this.setState({saveAlert: true})} expand="block">Ver más tarde</button>
                                <IonAlert
                                    isOpen={this.state.saveAlert}
                                    onDidDismiss={() => this.setState({saveAlert: false})}
                                    cssClass='my-custom-class'
                                    header={'Evento guardado para ver más tarde'}
                                    buttons={['OK']}
                                />
                            </div>
                        </IonCardHeader>
                    </IonCard>
                    </>
                )}
            </div>
            </>
        )
    }
}

export default Info;