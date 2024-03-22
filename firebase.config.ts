import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCg4NM6cqA-G7Jp-zzzULRzoHH5_Uw9ZR4",
  authDomain: "filmder-app.firebaseapp.com",
  projectId: "filmder-app",
  storageBucket: "filmder-app.appspot.com",
  messagingSenderId: "983532390859",
  appId: "1:983532390859:web:cd99af09043e8fc7658e4e",
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(AsyncStorage),
});
