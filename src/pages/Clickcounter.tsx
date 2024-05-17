import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import React, { useState } from 'react';
import './Clickcounter.css';

const Click_counter: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const resetCounter = () => {
    setCounter(0);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Click Counter</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen className="ion-padding click-counter-content">
        <IonGrid>
          <IonRow className="ion-align-items-center">
            <IonCol size="12" className="ion-text-center">
              <img src="https://raw.githubusercontent.com/Earlsachi/ion-t-saplot/dev-quotesgenerator-firebase/src/assets/img/raiden.jpg" alt="Button" className="counter-image" />
            </IonCol>
          </IonRow>
          <IonRow className="ion-align-items-center">
            <IonCol size="12" className="ion-text-center">
              <IonButton onClick={incrementCounter} expand="block" color="tertiary" className="click-button">Click Me!</IonButton>
            </IonCol>
          </IonRow>
          <IonRow className="ion-align-items-center">
            <IonCol size="12" className="ion-text-center">
              <p className="counter-display">Counter: {counter}</p>
            </IonCol>
          </IonRow>
          <IonRow className="ion-align-items-center">
            <IonCol size="12" className="ion-text-center">
              <IonButton onClick={resetCounter} expand="block" color="tertiary" className="reset-button">Reset</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Click_counter;
