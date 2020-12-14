import { IonRow, IonCol, IonCard, IonCardContent } from "@ionic/react";
import React from "react";

const BmiResult: React.FC<{ result: number }> = (props) => {
  return (
    <IonRow>
      <IonCol>
        <IonCard>
          <IonCardContent>
              <h1 className="ion-text-center"> Body-Mass-Index:</h1>
            <h1 className="ion-text-center" > {props.result.toFixed(2)}</h1>
          </IonCardContent>
        </IonCard>
      </IonCol>
    </IonRow>
  );
};
export default BmiResult;
