/* eslint-disable no-undef */
// includes firebase cdns
importScripts("https://www.gstatic.com/firebasejs/8.2.5/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.5/firebase-messaging.js");

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

firebase.initializeApp(config);
const initMessage = firebase.messaging();
console.log("initMessage", initMessage);