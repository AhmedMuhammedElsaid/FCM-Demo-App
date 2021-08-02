import React, { useEffect } from "react";
import { messaging } from "./firebase";
async function notifyMe() {
  try {
    // setting a notification instance 
    let notification = await Notification.requestPermission();
    if (notification === "granted") {
      console.log("allowed");
      let token = await messaging.getToken();
      console.log("token", token);
    } else {
      // in case the user denied the notification access pop up
      console.log("denied");
    }
  } catch (error) {
    console.log("error happened", error);
  }
}
function App() {
  useEffect(() => {
    notifyMe();
  }, []);
  return (
    <div>
      <h1>FCM Demo</h1>
    </div>
  );
}

export default App;
