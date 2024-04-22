import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
  IonAlert, IonButton, IonActionSheet} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Profile.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Raiden Shogun</IonTitle>
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
          
          <IonButton color="success" id="present-alert">Press to Start</IonButton>
      <IonAlert
        trigger="present-alert"
        header="Raiden Shogun is the Archon of Inazuma"
        subHeader="She weilds the Mosou no Hitotachi"
        message="In the near future, she will get her signature weapon the engulfing lightning."
        buttons={['Press to Exit']}
      ></IonAlert>

      <IonButton color="danger" id="open-action-sheet">Press to Action Sheet</IonButton>
      <IonActionSheet
        trigger="open-action-sheet"
        header="Actions"
        buttons={[
          {
            text: 'Delete',
            role: 'destructive',
            data: {
              action: 'delete',
            },
          },
          {
            text: 'Share',
            data: {
              action: 'share',
            },
          },
          {
            text: 'Cancel',
            role: 'cancel',
            data: {
              action: 'cancel',
            },
          },
        ]}
      ></IonActionSheet>


        </IonCard>

        <ExploreContainer name="" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
