import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPvhl31mVhhlUjxbKPvloEE5bSYCa8Zzw",
  authDomain: "arka-infotech.firebaseapp.com",
  projectId: "arka-infotech",
  storageBucket: "arka-infotech.firebasestorage.app",
  messagingSenderId: "621794102392",
  appId: "1:621794102392:web:432de1dbabcedd8e71f18d",
  measurementId: "G-VX5FL5JCKZ"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
