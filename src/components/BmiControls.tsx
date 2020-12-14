import { IonRow, IonCol, IonButton, IonIcon } from "@ionic/react";
import React from "react";
import  Icon1 from '../assets/ico/Icon1.svg';
import  Icon2 from '../assets/ico/Icon2.svg';
import  Icon3 from '../assets/ico/Icon3.svg';
import  Icon4 from '../assets/ico/Icon4.svg';
import   Icon5 from '../assets/ico/Icon5.svg';
import   Icon6 from '../assets/ico/Icon6.svg';
import   Icon7 from '../assets/ico/Icon7.svg';
import   Tab1Icon from '../assets/ico/Tab1Icon.svg';


const BmiControls: React.FC<{ OnCalc: () => void; OnReset: () => void }> = (
  props
) => {
  return (
    <>
      <IonRow>
        <IonCol>
          <IonButton  id="calculate" onClick={props.OnCalc}>
            <IonIcon slot="start" src={Tab1Icon}/>
            Calculate!
          </IonButton>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <IonButton color="danger" id="reset" onClick={props.OnReset}>
            <IonIcon slot="start" src={Icon1} />
            Reset
          </IonButton>
        </IonCol>
      </IonRow>
    </>
  );
};

export default BmiControls;
