import React from 'react';
import { IonButton, IonContent, IonFab, IonFabButton, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonTextarea } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import './Report.css';
import { send } from 'ionicons/icons';

interface IProps {}
interface IState {
  loading?: boolean;
  text?: string;
}

class Report extends React.Component<IProps, IState> {
  constructor(props: Readonly<IProps>) {
    super(props);
    this.state = {
      loading: true,
      text: '',
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="report">
        <div className="report__area">
          <span className="report__span">If you have any problem with the service, web, user or another kind of problem please, send us a message to inform us and we will reply as soon as posible.</span>
          <IonItem className="report__input">
            <IonLabel position="floating">Subject</IonLabel>
            <IonInput type="text"></IonInput>
          </IonItem>
          <IonItem className="report__ta">
            <IonLabel position="floating">Message</IonLabel>
            <IonTextarea value={this.state.text} onIonChange={e => this.setState({text: e.detail.value!})}></IonTextarea>
          </IonItem>
          <IonButton className="report__button" color="success">Save</IonButton>
          <IonFab className="report__fab" vertical="bottom" horizontal="end" slot="fixed">
            <IonFabButton>
              <IonIcon icon={send} color="light"/>
            </IonFabButton>
          </IonFab>
        </div>
      </div>
    );
  }
};

export default Report;
