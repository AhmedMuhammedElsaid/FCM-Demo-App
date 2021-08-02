import firebase from "firebase";

import "firebase/messaging";

const config = {
  // your firebase app config 
  apiKey: "********",
  authDomain: "********",
  databaseURL: "********",
  projectId: "********",
  storageBucket: "********",
  messagingSenderId: "********",
  appId: "********",
};

const firebaseApp = firebase.initializeApp(config);

const messaging = firebaseApp.messaging();
export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      console.log("payload",payload);
      resolve(payload);
    });
  });

export { messaging };

