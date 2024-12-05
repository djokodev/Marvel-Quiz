import {initializeApp} from "firebase/app"
import { getAuth } from "firebase/auth";

const config = {
    apiKey: "AIzaSyB3dsakA5luMLf2ViVts4ApN4y7XUR1Sao",
    authDomain: "marvel-quiz-bc7ac.firebaseapp.com",
    projectId: "marvel-quiz-bc7ac",
    storageBucket: "marvel-quiz-bc7ac.firebasestorage.app",
    messagingSenderId: "253926687423",
    appId: "1:253926687423:web:90efdc88ca45742ffd7c0a"
};


const app = initializeApp(config)

export const auth = getAuth(app)