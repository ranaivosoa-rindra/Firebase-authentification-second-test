import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth"

const firebaseConfig = {

  apiKey: "AIzaSyBQxuRQuztGYYSuJkpeu6FnvfEdhyTLqhE",

  authDomain: "authentification-second.firebaseapp.com",

  projectId: "authentification-second",

  storageBucket: "authentification-second.appspot.com",

  messagingSenderId: "720512952539",

  appId: "1:720512952539:web:b452726b1cd330974b84fe"

};

const app = initializeApp(firebaseConfig);
export const authentification = getAuth(app);