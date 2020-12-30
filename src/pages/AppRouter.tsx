import React from 'react';
import { IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home, map, chatbox, informationCircle, person } from 'ionicons/icons';
import { Switch, Route, Redirect } from 'react-router';
import About from './About';
import NotFound from './NotFound';
import Profile from './profile/Profile';
import Home from './home/Home';

const AppRouter: React.FC = () => {
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet id="bottomMenu">
          <Switch>

            <Route
              path="/app/home"
              component={Home} />

            <Route
              path="/app/profile"
              component={Profile} />
            
            <Route
              path="/app/about"
              render={() => <About />}
              exact={true} />

            <Route path="/app" render={() => <Redirect to="/app/home" />}  exact={true} />
            <Route component={NotFound} />
          </Switch>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/app/home">
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="locations" href="/app/locations">
            <IonIcon icon={map} />
            <IonLabel>Locations</IonLabel>
          </IonTabButton>
          <IonTabButton tab="contact" href="/app/contact">
            <IonIcon icon={chatbox} />
            <IonLabel>Contact us</IonLabel>
          </IonTabButton>
          <IonTabButton tab="about" href="/app/about">
            <IonIcon icon={informationCircle} />
            <IonLabel>About us</IonLabel>
          </IonTabButton>
          <IonTabButton tab="profile" href="/app/profile">
            <IonIcon icon={person} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
};

export default AppRouter;
