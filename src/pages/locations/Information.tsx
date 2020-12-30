import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import './Information.css';

const Information: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <ExploreContainer name="Information" />
      </IonContent>
    </IonPage>
  );
};

export default Information;
