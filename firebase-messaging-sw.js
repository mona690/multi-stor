importScripts('https://www.gstatic.com/firebasejs/9.0.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.2/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyAnZ4je3pxS_dkYnRCP9HNzcjbtcVEoEj4",
    authDomain: "marka-multistore.firebaseapp.com",
    databaseURL: "https://marka-multistore-default-rtdb.firebaseio.com",
    projectId: "marka-multistore",
    storageBucket: "marka-multistore.appspot.com",
    messagingSenderId: "187122969395",
    appId: "1:187122969395:web:372743cdcbc696c8256c46"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
