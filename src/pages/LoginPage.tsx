import React, { useState } from 'react';
import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';





const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Log In</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent ion-padding>
        <IonList>
          <IonItem>
            <IonLabel position="floating">Username</IonLabel>
            <IonInput type="text" 
            // value={username} onIonChange={(event) => setUsername(event.detail.value)} 
            />
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput type="password" 
            // value={password} onIonChange={(event) => setPassword(event.detail.value)} 
            />
          </IonItem>
        </IonList>

        <IonButton expand="block" 
        // onClick={handleLogin} 
        >Login</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
