import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import './Calculator.css';

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>('');

  const handleInput = (value: string) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonButtons slot="start">
          <IonBackButton defaultHref="/" />
        </IonButtons>

      <IonContent fullscreen className="ion-padding calculator-content">
        <IonGrid>
          <IonRow>
            <IonCol size="12">
              <IonInput className="display" value={input} readonly />
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="6">
              <IonButton className="button" expand="full" onClick={handleClear}>C</IonButton>
            </IonCol>
            <IonCol size="6">
              <IonButton className="button" expand="full" onClick={handleDelete}>DEL</IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="3">
              <IonButton className="button" expand="full" onClick={() => handleInput('7')}>7</IonButton>
            </IonCol>
            <IonCol size="3">
              <IonButton className="button" expand="full" onClick={() => handleInput('8')}>8</IonButton>
            </IonCol>
            <IonCol size="3">
              <IonButton className="button" expand="full" onClick={() => handleInput('9')}>9</IonButton>
            </IonCol>
            <IonCol size="3">
              <IonButton className="button" expand="full" onClick={() => handleInput('/')}>/</IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="3">
              <IonButton className="button" expand="full" onClick={() => handleInput('4')}>4</IonButton>
            </IonCol>
            <IonCol size="3">
              <IonButton className="button" expand="full" onClick={() => handleInput('5')}>5</IonButton>
            </IonCol>
            <IonCol size="3">
              <IonButton className="button" expand="full" onClick={() => handleInput('6')}>6</IonButton>
            </IonCol>
            <IonCol size="3">
              <IonButton className="button" expand="full" onClick={() => handleInput('*')}>*</IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="3">
              <IonButton className="button" expand="full" onClick={() => handleInput('1')}>1</IonButton>
            </IonCol>
            <IonCol size="3">
              <IonButton className="button" expand="full" onClick={() => handleInput('2')}>2</IonButton>
            </IonCol>
            <IonCol size="3">
              <IonButton className="button" expand="full" onClick={() => handleInput('3')}>3</IonButton>
            </IonCol>
            <IonCol size="3">
              <IonButton className="button" expand="full" onClick={() => handleInput('-')}>-</IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="3">
              <IonButton className="button" expand="full" onClick={() => handleInput('.')}>.</IonButton>
            </IonCol>
            <IonCol size="3">
              <IonButton className="button" expand="full" onClick={() => handleInput('0')}>0</IonButton>
            </IonCol>
            <IonCol size="3">
              <IonButton className="button" expand="full" onClick={() => handleInput('00')}>00</IonButton>
            </IonCol>
            <IonCol size="3">
              <IonButton className="button" expand="full" onClick={() => handleInput('+')}>+</IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonButton className="button equals" expand="full" onClick={handleCalculate}>=</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Calculator;
