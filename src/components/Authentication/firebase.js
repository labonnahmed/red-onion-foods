import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCDBzJLs-sVJrUHO4QP-bpuiBjv-lx0g20",
  authDomain: "red-onion-2023.firebaseapp.com",
  projectId: "red-onion-2023",
  storageBucket: "red-onion-2023.appspot.com",
  messagingSenderId: "521539620819",
  appId: "1:521539620819:web:2716fbedea678b18c0a926"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;