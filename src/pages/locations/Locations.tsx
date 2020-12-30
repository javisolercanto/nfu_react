import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import './Locations.css';
import { Route } from 'react-router';
import { closeCircle, informationCircle, calendar } from 'ionicons/icons';
import Calendar from './Calendar';
import Bans from './Bans';
import Information from './Information';

const Location: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonRouterOutlet>
          <Route path="/locations/calendar" component={Calendar} />
          <Route path="/locations/bans" component={Bans} />
          <Route path="/locations/information" component={Information} />
        </IonRouterOutlet>
        <IonTabBar>
          <IonTabButton tab="calendar" href="/locations/calendar">
            <IonIcon icon={calendar} />
            <IonLabel>Calendar</IonLabel>
          </IonTabButton>
          <IonTabButton tab="bans" href="/locations/bans">
            <IonIcon icon={closeCircle} />
            <IonLabel>Bans</IonLabel>
          </IonTabButton>
          <IonTabButton tab="information" href="/locations/information">
            <IonIcon icon={informationCircle} />
            <IonLabel>Location information</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonHeader>
      <IonContent fullscreen>
        <ExploreContainer name="Locations" />
      </IonContent>
    </IonPage>
  );
};

export default Location;
