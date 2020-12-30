import React from 'react';
import { IonButton, IonContent, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonPage, IonPopover } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import './Card.css';
import { play, ellipsisVertical, caretForwardCircle, close, heart } from 'ionicons/icons';

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

class Card extends React.Component<IProps, IState> {
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
    // <IonItemSliding className="primary--bg  shadow">
    //   <IonItem className="shadow">
    //     <div className='notification' onClick={() => this.props.select(this.state.data)} >
    //       <div className="notification__author">
    //         <div className="notification__author__picture"></div>
    //         <span className="notification__author__name">{this.state.data.author.username}</span>
    //       </div>
    //       <div className="notification__info">
    //         <span className="notification__info__title">{this.state.data.author.username}</span>
    //         <span className="notification__info__participants">{this.state.data.participants}</span>
    //         <span className="notification__info__location">{this.state.data.location}</span>
    //         <span className="notification__info__date">{this.state.data.date}</span>
    //       </div>
    //       <span className="notification__price">${this.state.data.price}</span>
    //     </div>
    //   </IonItem>
    //   <IonItemOptions side="end">
    //     <IonItemOption color="primary">
    //       <IonIcon style={{fontSize: '2rem'}} color="light" icon={play}/>
    //     </IonItemOption>
    //     {/* <IonItemOption color="tertiary">
    //       <IonIcon style={{fontSize: '2rem'}} color="light" icon={share}/>
    //     </IonItemOption> */}
    //   </IonItemOptions>
    //   <IonItemOptions side="start">
    //     <IonItemOption color="primary">
    //       <IonIcon style={{fontSize: '2rem'}} color="light" icon={share}/>
    //     </IonItemOption>
    //   </IonItemOptions>
    // </IonItemSliding>
    <div className="card  shadow">
      <div className="card__image  shadow">
        <IonIcon className="toolbar__icon" icon={heart} onClick={() => console.log('Fav')} />
        <IonPopover
          cssClass='popover--class'
          event={this.state.action.event}
          isOpen={this.state.action.showPopover}
          onDidDismiss={() => this.setState({ action: {showPopover: false, event: undefined} })}
        >
          <p>Option 1</p>
          <p>Option 2</p>
          <p>Option 3</p>
        </IonPopover>
        <IonIcon color="light" icon={ellipsisVertical} onClick={
          (e: any) => {
            e.persist();
            this.setState({ action: {showPopover: true, event: e }})
          }}
        />
      </div>
      <div className="card__price  shadow">$2</div>
      <div className="card__data">
        <div className="flex-col">
          <span className="text--bold">Title</span>
          <span>Date</span>
        </div>
        <div className="flex-col">
          <span className="color-primary  text--bold">7/10</span>
          <span>Participants</span>
        </div>
        <IonButton className="card__button">Join</IonButton>
      </div>
    </div>
  )}
};

export default Card;
