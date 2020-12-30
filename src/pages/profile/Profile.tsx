import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet, IonTabs } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import './Profile.css';
import { football, notifications, person, bug } from 'ionicons/icons';
import { Route, Switch } from 'react-router';
import MyGames from './MyGames';
import Notifications from './Notifications';
import Me from './Me';
import Report from './Report';
import { IonReactRouter } from '@ionic/react-router';

const Profile: React.FC = () => {
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Switch>
            <Route 
              path="/app/profile/mygames"
              component={MyGames} />
            <Route 
              path="/app/profile/notifications"
              component={Notifications} />
            <Route 
              path="/app/profile/me"
              component={Me} />
            <Route 
              path="/app/profile/report"
              component={Report} />
          </Switch>
        </IonRouterOutlet>
        <IonTabBar slot="top">
          <IonTabButton tab="mygames" href="/app/profile/mygames">
            <IonIcon icon={football} />
            <IonLabel>My games</IonLabel>
          </IonTabButton>
          <IonTabButton tab="notifications" href="/app/profile/notifications">
            <IonIcon icon={notifications} />
            <IonLabel>Notifications</IonLabel>
          </IonTabButton>
          <IonTabButton tab="me" href="/app/profile/me">
            <IonIcon icon={person} />
            <IonLabel>Me</IonLabel>
          </IonTabButton>
          <IonTabButton tab="report" href="/app/profile/report">
            <IonIcon icon={bug} />
            <IonLabel>Report</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
};

export default Profile;
