import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getEvn } from "./getEnv";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: getEvn("VITE_FIREBASE_API"),
    authDomain: "gblog-981b2.firebaseapp.com",
    projectId: "gblog-981b2",
    storageBucket: "gblog-981b2.firebasestorage.app",
    messagingSenderId: "534059431437",
    appId: "1:534059431437:web:6b5d419fbd5d9d1bfb8744",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
