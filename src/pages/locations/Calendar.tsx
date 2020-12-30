import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import './Calendar.css';

const Calendar: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <ExploreContainer name="Calendar" />
      </IonContent>
    </IonPage>
  );
};

export default Calendar;
