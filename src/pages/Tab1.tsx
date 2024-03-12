import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
  IonAlert, IonButton} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Raiden</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        
            <IonCard>
          <img alt="Silhouette of mountains" src="../src/assets/img/raiden.jpg" />
          <IonCardHeader>
            <IonCardTitle>Raiden Shogun</IonCardTitle>
            <IonCardSubtitle>Archon of Inazuma</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>Plane of Euthyemia</IonCardContent>
          
          <IonButton id="present-alert">Press to Start</IonButton>
      <IonAlert
        trigger="present-alert"
        header="Raiden Shogun is the Archon of Inazuma"
        subHeader="She weilds the Mosou no Hitotachi"
        message="In the near future, she will get her signature weapon the engulfing lightning."
        buttons={['Action']}
      ></IonAlert>

        </IonCard>

        <ExploreContainer name="" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
