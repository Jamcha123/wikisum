import { initializeApp } from 'firebase/app'; 
import { initializeAppCheck } from 'firebase/app-check';


const config = {
    apiKey: "AIzaSyALJ1pOuGw815OPX3B9RyWFYjYhiVysXew",
    authDomain: "wikisum-a8c7c.firebaseapp.com",
    databaseURL: "https://wikisum-a8c7c-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "wikisum-a8c7c",
    storageBucket: "wikisum-a8c7c.firebasestorage.app",
    messagingSenderId: "288814584965",
    appId: "1:288814584965:web:4eddf2469923d0df3885ec",
    measurementId: "G-ERRZFXRQV1"
}

const app = initializeApp(config)
const appcheck = initializeAppCheck(app, {
    provider: "6Lf7HosqAAAAAKS7Y1SXmdyrSscbPJ4vHxUG-CDH",
    isTokenAutoRefreshEnabled: true
})