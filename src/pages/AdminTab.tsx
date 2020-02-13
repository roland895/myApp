import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { Component, MouseEvent } from 'react';

import "../theme/customStyle.scss";

const AdminTab: React.FC = () => {
  const buttonHandler = (e? : MouseEvent) =>{
    alert("tuna");  
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="tuna" color="nbcPurple">
          <IonTitle>Translator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="testDiv">
            TEST
            <IonButton onClick={buttonHandler}> Test Button</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AdminTab;
