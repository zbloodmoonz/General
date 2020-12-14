import React from 'react';
import { IonCard, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import './Tab3.css';


const Tab3: React.FC = () => {
  return (
    <IonPage >
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <div className="bg">
      
        <div className="bg2">
        
        <IonCard>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Info Tab</IonTitle>
          </IonToolbar>
        </IonHeader>
          
        </IonCard>
        </div>
        
        </div>
      </IonContent>
      
    </IonPage>
  );
};

export default Tab3;
