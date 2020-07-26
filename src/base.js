
import * as firebase from "firebase";

const fire = {
  apiKey: "AIzaSyDulEDmlpBWfoo0AHDDecwUhCEWKQ3e2wM",
  authDomain: "civic-radio-273819.firebaseapp.com",
  databaseURL: "https://civic-radio-273819.firebaseio.com",

}

firebase.initializeApp(fire);
export const auth = firebase.auth;
export const db = firebase.database();