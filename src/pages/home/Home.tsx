import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonTabBar, IonTabButton, IonIcon, IonLabel, IonInput, IonItem, IonButton, IonSegment, IonSegmentButton, IonBackButton, IonButtons, IonSearchbar, IonSelect, IonSelectOption, IonActionSheet } from '@ionic/react';
import './Home.css';
import { caretForwardCircle, football, heart, close, search, share, time } from 'ionicons/icons';
import Card from '../../components/card/Card';

interface IProps {}
interface IState {
  loading?: boolean;
  showAction?: boolean;
}

class Home extends React.Component<IProps, IState> {
  constructor(props: Readonly<IProps>) {
    super(props);
    this.state = {
      loading: true,
      showAction: false
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <>
      <div className="toolbar">
        <IonItem className="select">
           <IonLabel>Sport</IonLabel>
           <IonSelect value='' okText="Okay" cancelText="Dismiss" onIonChange={e => console.log(e.detail.value)}>
             <IonSelectOption value="brown">Brown</IonSelectOption>
             <IonSelectOption value="blonde">Blonde</IonSelectOption>
             <IonSelectOption value="black">Black</IonSelectOption>
            <IonSelectOption value="red">Red</IonSelectOption>
           </IonSelect>
        </IonItem>
        <IonItem  className="select">
           <IonLabel>Location</IonLabel>
           <IonSelect value='' okText="Okay" cancelText="Dismiss" onIonChange={e => console.log(e.detail.value)}>
             <IonSelectOption value="brown">Brown</IonSelectOption>
             <IonSelectOption value="blonde">Blonde</IonSelectOption>
             <IonSelectOption value="black">Black</IonSelectOption>
            <IonSelectOption value="red">Red</IonSelectOption>
           </IonSelect>
        </IonItem>
        <IonItem  className="select">
           <IonLabel>Schedule</IonLabel>
           <IonSelect value='' okText="Okay" cancelText="Dismiss" onIonChange={e => console.log(e.detail.value)}>
             <IonSelectOption value="brown">Brown</IonSelectOption>
             <IonSelectOption value="blonde">Blonde</IonSelectOption>
             <IonSelectOption value="black">Black</IonSelectOption>
            <IonSelectOption value="red">Red</IonSelectOption>
           </IonSelect>
        </IonItem>
      </div>
      <h1>Games</h1>
      <h2>Near to you</h2>
      <div className="home__list">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      </>
    )}
};

export default Home;
