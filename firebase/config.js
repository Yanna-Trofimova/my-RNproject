// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
import * as firebase from "firebase";
import  "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// import { initializeApp } from "firebase/app";
// // Функція для підключення авторизації в проект
// import { getAuth } from "firebase/auth";
// // Функція для підключення бази даних у проект
// import { getFirestore } from "firebase/firestore";
// // Функція для підключення сховища файлів в проект
// import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALp_2Kt8QbVUfLJot153utFeonljWC-AE",
  authDomain: "rn-social-9a9ad.firebaseapp.com",
  projectId: "rn-social-9a9ad",
  storageBucket: "rn-social-9a9ad.appspot.com",
  messagingSenderId: "712239538532",
  appId: "1:712239538532:web:877a792006741b184b5a71",
  measurementId: "G-9NT1Y71DX5"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export default firebase.initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
// export const db = getFirestore(app);
// export const storage = getStorage(app);

export default firebase.initializeApp(firebaseConfig);

