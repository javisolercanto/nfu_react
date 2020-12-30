import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import './Bans.css';

const Bans: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <ExploreContainer name="Bans" />
      </IonContent>
    </IonPage>
  );
};

export default Bans;
