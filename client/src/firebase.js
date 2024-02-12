import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDDg4LzTgqcXxZP5yrpzEi7z1p3MC5bKAc",
  authDomain: "blog-d3c02.firebaseapp.com",
  projectId: "blog-d3c02",
  storageBucket: "blog-d3c02.appspot.com",
  messagingSenderId: "755311153188",
  appId: "1:755311153188:web:98483f26ddce088e0908b1",
  measurementId: "G-R8SY1K0DRB"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
