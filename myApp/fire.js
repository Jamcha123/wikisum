import { initializeApp } from 'firebase/app'; 
import {} from 'firebase/auth'
import { initializeAppCheck, ReCaptchaEnterpriseProvider, setTokenAutoRefreshEnabled } from 'firebase/app-check';
import {} from 'firebase/firestore'

const config = {
    apiKey: "AIzaSyALJ1pOuGw815OPX3B9RyWFYjYhiVysXew",
    authDomain: "sumWick.firebaseapp.com",
    projectId: "wikisum-a8c7c",
    storageBucket: "wikisum-a8c7c.firebasestorage.app",
    messagingSenderId: "288814584965",
    appId: "1:288814584965:web:4eddf2469923d0df3885ec",
    measurementId: "G-ERRZFXRQV1"
}

const app = initializeApp(config); 

const appcheck = initializeAppCheck(app, {
    provider: new ReCaptchaEnterpriseProvider("6LeaqXUqAAAAAOfSuhANoKRu_wSdtKIYzJ7Nkmc4"),
    isTokenAutoRefreshEnabled: true
})
