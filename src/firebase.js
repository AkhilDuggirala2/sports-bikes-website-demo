import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCqQ6I6drBRLng4zEtXisRjogE1vCDwT-s",
  authDomain: "sports-bikes-website.firebaseapp.com",
  projectId: "sports-bikes-website",
  storageBucket: "sports-bikes-website.appspot.com",
  messagingSenderId: "167087885423",
  appId: "1:167087885423:web:080c78ea132ec0b0ab519a",
};

const app = initializeApp(firebaseConfig);

export default app;
