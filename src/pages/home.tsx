import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonIcon,
  IonCardContent,
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { speedometerOutline, calculatorOutline, pencilOutline, chatbubbleOutline } from 'ionicons/icons';
import './home.css';

const Home: React.FC = () => {
  const history = useHistory();

  const navigateTo = (path: string) => {
    history.push(path);
  };

  const cards = [
    { id: 1, title: 'Click Counter', icon: speedometerOutline, onClick: () => navigateTo('/click_counter') },
    { id: 2, title: 'Calculator', icon: calculatorOutline, onClick: () => navigateTo('/calculator') },
    { id: 3, title: 'Todo List', icon: pencilOutline, onClick: () => navigateTo('/todolist') },
    { id: 4, title: 'Quotes Generator', icon: chatbubbleOutline, onClick: () => navigateTo('/quotes_generator') },
    { id: 5, title: 'Notes', icon: chatbubbleOutline, onClick: () => navigateTo('/notes') },
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCards, setFilteredCards] = useState(cards);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredCards(cards.filter(card => card.title.toLowerCase().includes(query)));
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <div className="search-container ion-text-center">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="search-input"
          />
        </div>
        <div className="card-container ion-text-center">
          {filteredCards.map(card => (
            <IonCard key={card.id} onClick={card.onClick} className="card">
              <IonCardContent className="card-content">
                <div className="card-icon-container">
                  <IonIcon icon={card.icon} className="card-icon" />
                </div>
                <div className="card-title-container">
                  {card.title}
                </div>
              </IonCardContent>
            </IonCard>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
