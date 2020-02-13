import React from 'react';
import { camera, trash, close } from 'ionicons/icons';
import { usePhotoGallery } from '../hooks/usePhotoGallery';

import { IonContent, IonHeader, IonItem, IonFabButton, IonIcon, IonFab, IonLabel, IonList, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonImg } from '@ionic/react';

const WorkOrderTab: React.FC = () => {
  const {  photos, takePhoto } = usePhotoGallery();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Photo Gallery</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonGrid>
        <IonRow>
          {photos.map((photo, index) => (
            <IonCol size="6" key={index}>
              <IonImg src={photo.webviewPath} />
            </IonCol>
          ))}
        </IonRow>
      </IonGrid>
            <IonFab vertical="bottom" horizontal="center" slot="fixed">
              <IonFabButton onClick={() => takePhoto()}>
                <IonIcon icon={camera}></IonIcon>
              </IonFabButton>
            </IonFab>

      </IonContent>
    </IonPage>
  );
};

export default WorkOrderTab;