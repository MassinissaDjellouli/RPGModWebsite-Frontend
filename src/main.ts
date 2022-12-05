import {init} from "@/utils/generalUtils";
import {createApp} from "vue";
import App from "@/App.vue";
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB1WhDfZ7mPksUG-STZmZU5qd_zP1xaKvg",
    authDomain: "rpgmodwebsite.firebaseapp.com",
    projectId: "rpgmodwebsite",
    storageBucket: "rpgmodwebsite.appspot.com",
    messagingSenderId: "793555203127",
    appId: "1:793555203127:web:e0ac67dc7e63e7ca447bb2"
};
const firebase = initializeApp(firebaseConfig);

const app = createApp(App)
init(app);