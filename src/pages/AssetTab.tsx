import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonGrid,
  IonRow,
  IonCol,
  IonSlides,
  IonSlide,
  IonButtons,
  IonMenuButton,
  IonMenu,
} from '@ionic/react';
import { book, build, colorFill, grid } from 'ionicons/icons';
import React from 'react';
import './Tab1.css';
import '../theme/mediaStyle.scss';
import MainMenu from "./MainMenu";
interface CardItem {
  filepath?: string;
  subtitle?: string;
}

const placeHolderRecent = [
  {
    filepath: "/assets/Glass.jpg",
    subtitle: "Glass"
  },
  {
    filepath: "/assets/Glass.jpg",
    subtitle: "Glass"
  },
  {
    filepath: "/assets/Glass.jpg",
    subtitle: "Glass"
  },
  {
    filepath: "/assets/Glass.jpg",
    subtitle: "Glass"
  },
]

const placeHolderPopular = [
  {
    filepath: "/assets/Chicago PD.jpg",
    subtitle: "Chicago PD"
  },
  {
    filepath: "/assets/Chicago PD.jpg",
    subtitle: "Chicago PD"
  },
  {
    filepath: "/assets/Chicago PD.jpg",
    subtitle: "Chicago PD"
  },
  {
    filepath: "/assets/Chicago PD.jpg",
    subtitle: "Chicagoo PD"
  },
]
const AssetTab: React.FC = () => {
  const buildSlides = (data: CardItem[]) => {
    return(
      data.map((item, idx)=>{
        return(
          <IonSlide>
            <IonCard button={true}>
              <img src={item.filepath} alt="" />
              <IonCardHeader className="assetHeader">
                <IonCardSubtitle>{item.subtitle}</IonCardSubtitle>
              </IonCardHeader>
            </IonCard>
          </IonSlide>
        )
      })
    )
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>TRANSLATOR</IonTitle>
          <IonButtons slot="end">
            <IonMenuButton  autoHide={false} />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonSearchbar animated></IonSearchbar>
        <div className="grid-label">
          <h3>Recent TV Assets</h3>
        </div>
        <IonSlides className="scroller" options={{autoHeight:true, slidesPerView: 2.5, spaceBetweem:10}}>
          <IonSlide >
          <IonCard button={true}>
              <img src="/assets/TheRealHousewivesofAtlanta.jpg" alt="" />
              <IonCardHeader className="assetHeader">
                <IonCardSubtitle>THE REAL HOUSEIVES OF ATLANTA</IonCardSubtitle>
              </IonCardHeader>
              </IonCard>
          </IonSlide>

          <IonSlide>
              <IonCard button={true}>
              <img src="/assets/TheRealHousewivesofAtlanta.jpg" alt="" />
              <IonCardHeader className="assetHeader">
                <IonCardSubtitle>THE REAL HOUSEIVES OF ATLANTA</IonCardSubtitle>
              </IonCardHeader>
              </IonCard>
            </IonSlide>
            <IonSlide>
              <IonCard button={true}>
              <img src="/assets/TheRealHousewivesofAtlanta.jpg" alt="" />
              <IonCardHeader className="assetHeader">
                <IonCardSubtitle>THE REAL HOUSEIVES OF ATLANTA</IonCardSubtitle>
              </IonCardHeader>
              </IonCard>
            </IonSlide>

        </IonSlides>

        <div className="grid-label">
          <h3>Recent Feature Assets</h3>
        </div>
        <IonSlides className="scroller" options={{autoHeight:true, slidesPerView: 2.5, spaceBetweem:10}}>
          {buildSlides(placeHolderRecent)}
        </IonSlides>

        <div className="grid-label">
          <h3>Most Popular</h3>
        </div>
        <IonSlides className="scroller" options={{autoHeight:false, slidesPerView: 1.5, spaceBetweem:10}}>
          {buildSlides(placeHolderPopular)}
        </IonSlides>

      </IonContent>
    </IonPage>
  );
};

export default AssetTab;
