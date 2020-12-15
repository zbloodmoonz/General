import React from 'react';
import { Route } from 'react-router-dom';
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

import BmiTab from './pages/BmiTab';
import CurrenC from './pages/CurrencyC';
import Tab3 from './pages/Tab3';



/* Theme variables */
import './theme/variables.css';

// ICONS

import   Tab1Icon from './assets/ico/Tab1Icon.svg';
import  Tab2Icon from './assets/ico/Tab2Icon.svg';






const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/CalculateBMI" component={BmiTab} exact={true} />
          <Route path="/ConvertCurrency" component={CurrenC} exact={true} />
          <Route path="/tab3" component={Tab3} />
  
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="BmiTab" href="/CalculateBMI">
            <IonIcon icon={Tab1Icon} />
            <IonLabel>BMI</IonLabel>
          </IonTabButton>
          <IonTabButton tab="CurrC" href="/ConvertCurrency">
            <IonIcon icon={Tab1Icon} />
            <IonLabel>CurrenC</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={Tab2Icon} size="50px"/>
            <IonLabel>Info.</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
