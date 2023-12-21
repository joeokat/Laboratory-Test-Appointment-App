import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCJQFQeTMXnRyDe_emZgPR3Y_CV_Qmcv9A",
  authDomain: "labpro-e0602.firebaseapp.com",
  projectId: "labpro-e0602",
  storageBucket: "labpro-e0602.appspot.com",
  messagingSenderId: "273337066226",
  appId: "1:273337066226:web:b6fefecbaa86520930666b",
  measurementId: "G-M3KNV74W2C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
