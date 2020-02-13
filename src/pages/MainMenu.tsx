import React, { useState } from 'react';
import { IonMenu, IonButton, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonRouterOutlet } from '@ionic/react';
import { Plugins, PushNotification, PushNotificationToken, PushNotificationActionPerformed } from '@capacitor/core';
const { PushNotifications } = Plugins;

export const MainMenu: React.FC = () => {
  const [notifications, setNotification] = useState([] as any);

  const push = ()  => {
    // Register with Apple / Google to receive push via APNS/FCM
    PushNotifications.register();

    // On succcess, we should be able to receive notifications
    PushNotifications.addListener('registration',
      (token: PushNotificationToken) => {
        alert('Push registration success, token: ' + token.value);
      }
    );

    // Some issue with your setup and push will not work
    PushNotifications.addListener('registrationError',
      (error: any) => {
        alert('Error on registration: ' + JSON.stringify(error));
      }
    );

    // Show us the notification payload if the app is open on our device
    PushNotifications.addListener('pushNotificationReceived',
      (notification: any) => {
        alert("Push recieved");
        let notif = notifications;
        notif.push({ id: notification.id, title: notification.title, body: notification.body })
        console.log(notif);
        setNotification(notif)
        
      }
    );

    // Method called when tapping on a notification
    PushNotifications.addListener('pushNotificationActionPerformed',
      (notification: PushNotificationActionPerformed) => {
        let notif = notifications;
        alert(notif.length);
        notif.push({ id: notification.notification.data.id, title: notification.notification.data.title, body: notification.notification.data.body })
        setNotification(notif)

      }
    );
  }
  return(
    <IonMenu side="end" contentId="first">
    {/* <IonHeader>
      <IonToolbar color="primary">
        <IonTitle>Start Menu</IonTitle>
      </IonToolbar>
    </IonHeader> */}
    <IonContent color="white">
      <IonList>
        <IonItem href="/tab1"> Home</IonItem>
        <IonItem>Work Orders</IonItem>
        <IonItem>Mapping</IonItem>
        <IonItem>Assets</IonItem>
        <IonItem>Licenses</IonItem>
        <IonItem>Client Portal</IonItem>
        <IonItem>Admin</IonItem>
        <IonItem>Cart</IonItem>
        <IonItem>QC Work Orders</IonItem>
        <IonItem>Vendor Pixel</IonItem>
        
      </IonList>
      <IonList>
        <IonItem> <IonButton expand="full" onClick={() => push()}>Register for Push</IonButton></IonItem>
        <IonItem>
          Number of Push Notifications Recieved: {notifications.length}
        </IonItem>
        <IonItem>Log Out</IonItem>
      </IonList>
    </IonContent>
  </IonMenu>
  );
}
export default MainMenu