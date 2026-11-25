  import { initializeApp } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-analytics.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCushKgvztFJIrIV0X4iZQPE6a_4PYQRqk",
    authDomain: "my-first-project-3ba4b.firebaseapp.com",
    projectId: "my-first-project-3ba4b",
    storageBucket: "my-first-project-3ba4b.firebasestorage.app",
    messagingSenderId: "1080740278522",
    appId: "1:1080740278522:web:a9789b75c958355778d943",
    measurementId: "G-NZZXS88ER7"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
