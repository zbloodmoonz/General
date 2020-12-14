import { IonRow, IonCol, IonButton, IonIcon } from "@ionic/react";
import React from "react";

const BmiControls: React.FC<{ OnCalc: () => void; OnReset: () => void }> = (
  props
) => {
  return (
    <>
      <IonRow>
        <IonCol>
          <IonButton color="success" id="calculate" onClick={props.OnCalc}>
            <IonIcon slot="start" />
            Calculate!
          </IonButton>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <IonButton color="danger" id="reset" onClick={props.OnReset}>
            <IonIcon slot="start" />
            Reset
          </IonButton>
        </IonCol>
      </IonRow>
    </>
  );
};

export default BmiControls;
