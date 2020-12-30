import React from 'react';
import { IonActionSheet, IonContent, IonPage } from '@ionic/react';
import Notification from '../../components/notification/Notification';
import Card from '../../components/card/Card';
import ExploreContainer from '../../components/ExploreContainer';
import './Notifications.css';
import { trash, share, caretForwardCircle, heart, close } from 'ionicons/icons';

interface IProps {}
interface IState {
  loading?: boolean;
  selectedEvent?: {
    event?: {},
    open?: boolean
  };
}

class Notifications extends React.Component<IProps, IState> {
  constructor(props: Readonly<IProps>) {
    super(props);
    this.state = {
      loading: true,
      selectedEvent: {
        event: {},
        open: false
      }
    }
  }

  componentDidMount() {

  }

  selectEvent = (event) => {
    console.log(event);
    console.log(this.state);
    this.setState({selectedEvent: {event: event, open: true}});
  }

  render() {
    return (
      <div className="notifications">
        <div className="notifications__box  notifications__sys">
          <span>System</span>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati quia iusto voluptatem quasi voluptate, porro quibusdam distinctio quisquam. Aut repellat maxime rem doloremque cupiditate animi autem! Vel exercitationem quidem in?</p>
        </div>
        <div className="notifications__box  notifications__dashboard">
          <Notification select={this.selectEvent} />
          <Notification select={this.selectEvent} />
          <Notification select={this.selectEvent} />
        </div>
      </div>
    )
  }
};

export default Notifications;
