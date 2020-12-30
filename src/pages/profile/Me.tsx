import React from 'react';
import { IonButton, IonChip, IonContent, IonFab, IonFabButton, IonIcon, IonInput, IonItem, IonItemDivider, IonLabel, IonList, IonListHeader, IonPage, IonRadio, IonRadioGroup, IonSelect, IonSelectOption } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import './Me.css';
import { pin, close, football, basketball, baseball, save } from 'ionicons/icons';

interface IProps {}
interface IState {
  loading?: boolean;
  selectedLevel?: number;
}

class Me extends React.Component<IProps, IState> {
  constructor(props: Readonly<IProps>) {
    super(props);
    this.state = {
      loading: true,
      selectedLevel: 1,
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="me">
        <div className="picture">Image</div>
        <div className="form">
          <h1>My profile</h1>
          <div className="data--section">
            <div className="form--section">
              <IonItem className="me__input">
                  <IonLabel position="floating">Username</IonLabel>
                  <IonInput type="text"></IonInput>
              </IonItem>
              <IonItem className="me__input">
                  <IonLabel position="floating">Email</IonLabel>
                  <IonInput type="email"></IonInput>
              </IonItem>
              <IonItem className="me__input">
                  <IonLabel position="floating">New password</IonLabel>
                  <IonInput type="password"></IonInput>
              </IonItem>
            </div>
            <div className="form--section">
              <IonItem className="me__input">
                  <IonLabel position="floating">Name</IonLabel>
                  <IonInput type="text"></IonInput>
              </IonItem>
              <IonItem className="me__input">
                  <IonLabel position="floating">City</IonLabel>
                  <IonInput type="text"></IonInput>
              </IonItem>
              <IonItem className="me__input">
                  <IonLabel position="floating">State</IonLabel>
                  <IonInput type="text"></IonInput>
              </IonItem>
            </div>
          </div>
          <div className="me__chips">
            <div className="me__sports">
              <IonItem className="me__input">
                <IonLabel position="floating">My sports</IonLabel>
                <IonInput type="text"></IonInput>
              </IonItem>
              <div className="me__levels__container">
                <IonItem className="me__levels">
                  <IonSelect value={this.state.selectedLevel} onIonChange={e => this.setState({selectedLevel: e.detail.value})}>
                    <IonSelectOption value={1}>Low</IonSelectOption>
                    <IonSelectOption value={2}>Medium</IonSelectOption>
                    <IonSelectOption value={3}>High</IonSelectOption>
                  </IonSelect>
                </IonItem>
                <IonButton color="success">Add</IonButton>
              </div>
            </div>
            <div className="me__chips--container">
              <IonChip>
                <IonIcon icon={football} color="primary" />
                <IonLabel>Football</IonLabel>
                <IonIcon icon={close} />
              </IonChip>
              <IonChip>
                <IonIcon icon={basketball} color="danger" />
                <IonLabel>Basketball</IonLabel>
                <IonIcon icon={close} />
              </IonChip>
              <IonChip>
                <IonIcon icon={baseball} color="warning" />
                <IonLabel>Baseball</IonLabel>
                <IonIcon icon={close} />
              </IonChip>
            </div>
            <IonItem className="me__input">
              <IonLabel position="floating">Locations</IonLabel>
              <IonInput type="text"></IonInput>
            </IonItem>
            <div className="me__chips--container">
              <IonChip>
                <IonIcon icon={pin} color="primary" />
                <IonLabel>Sports center 1</IonLabel>
                <IonIcon icon={close} />
              </IonChip>
              <IonChip>
                <IonIcon icon={pin} color="primary" />
                <IonLabel>Sports center 2</IonLabel>
                <IonIcon icon={close} />
              </IonChip>
            </div>
          </div>
          <IonButton className="me__button" color="success">Save</IonButton>
          <IonFab className="me__fab" vertical="bottom" horizontal="end" slot="fixed">
            <IonFabButton>
              <IonIcon icon={save} color="light"/>
            </IonFabButton>
          </IonFab>
        </div>
      </div>
    );
  }
};

export default Me;
