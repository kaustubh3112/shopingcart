import { initializeApp } from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyBPcZXqlJ-sqmustpvzYdarytxfMjeWggM",
    authDomain: "shopingcart-e652c.firebaseapp.com",
    projectId: "shopingcart-e652c",
    storageBucket: "shopingcart-e652c.firebasestorage.app",
    messagingSenderId: "291531391549",
    appId: "1:291531391549:web:4ecd56ec6b00913d656054",
    databaseURL: "https://shopingcart-e652c-default-rtdb.firebaseio.com"
};

export const app = initializeApp(firebaseConfig)