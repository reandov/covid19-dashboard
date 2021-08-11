// Firebase
import firebase from "firebase/app";
import "firebase/database";

// Firebase Configuration from Environment Variables
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: "https://covid19br-database-default-rtdb.firebaseio.com/",
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

// Initialize Connection
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Connecting to Database
const database = firebase.database();

// Exporting
export { firebase, database };
