import React from 'react';
import { IonButton, IonChip, IonContent, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonPage, IonPopover } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import './Notification.css';
import { play, ellipsisVertical, caretForwardCircle, close, heart, people, time, checkmark, basketball, football } from 'ionicons/icons';

interface IProps {
  select?;
}
interface IState {
  loading?: boolean;
  data?: {
    author?: {
      picture?: string,
      username?: string
    },
    title?: string,
    participants?: string,
    location?: string,
    date?: string,
    price?: number
  };
  action?: {
    showPopover?: boolean 
    event?
  }
}

class Notifications extends React.Component<IProps, IState> {
  constructor(props: Readonly<IProps>) {
    super(props);
    this.state = {
      loading: true,
      data: {
        author: {
          picture: '',
          username: 'username'
        },
        title: 'title',
        participants: 'participants',
        location: 'location',
        date: 'date',
        price: 3
      },
      action: {
        showPopover: false, event: undefined
      }
    }
  }

  componentDidMount() {

  }

  render() {
    return (
    <IonItemSliding className="notify__card  shadow  ion-no-padding  primary--bg">
      <IonItem className="notify__card  ion-no-padding  primary--bg">
        <div className="notify__card">
          <div className="notify__card__image  shadow">
          </div>
          <div className="w-100 data-container">
            <div className="notify__card__picture  shadow"></div>
            <div className="notify__card__data">
              <div className="flex-col">
                <span className="text--bold">Title</span>
                <span>Date</span>
              </div>
              <div className="flex-col">
                <span className="color-primary  text--bold">7/10<IonIcon icon={people} /></span>
                <span>Participants</span>
              </div>
            </div>
            <div className="flex-col  notify__card__price">
              <span>3$</span>
              <IonChip>
                <IonIcon icon={football} color="primary" />
                <IonLabel>Football</IonLabel>
              </IonChip>
            </div>
          </div>
        </div>
      </IonItem>
      <IonItemOptions className="primary--bg" side="end">
        <IonItemOption color="primary">
          <IonIcon style={{fontSize: '2rem'}} color="light" icon={checkmark}/>
        </IonItemOption>
      </IonItemOptions>
      <IonItemOptions className="danger--bg" side="start">
        <IonItemOption color="danger">
          <IonIcon style={{fontSize: '2rem'}} color="light" icon={close}/>
        </IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  )}
};

export default Notifications;
