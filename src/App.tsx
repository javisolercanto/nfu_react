import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { map, informationCircle, chatbox, home, person } from 'ionicons/icons';
import Home from './pages/AppRouter';
import About from './pages/About';
import Profile from './pages/profile/Profile';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import AppRouter from './pages/AppRouter';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
        <IonRouterOutlet>
          <Switch>

            {/* LOGIN ROUTES */}

            <Route
              path="/login"
              component={Login}
              exact={true} />

            {/* HOME ROUTE */}

            <Route
              path="/app"
              component={AppRouter} />

            <Route path="/" render={() => <Redirect to="/app" />}  exact={true} />
            <Route component={NotFound} />
            
          </Switch>
        </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
