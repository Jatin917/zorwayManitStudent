import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyABGQEvEp9TY_KqzTPKGct5D9UgIBrXu7A",
    authDomain: "testingmanitportal.firebaseapp.com",
    projectId: "testingmanitportal",
    storageBucket: "testingmanitportal.appspot.com",
    messagingSenderId: "489690182807",
    appId: "1:489690182807:web:100b26bcebc289079065d2"
  };

export  const app = initializeApp(firebaseConfig);