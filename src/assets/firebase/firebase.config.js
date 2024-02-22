import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvKyF5JwiD3hQr97yfurrPWBnfb8EdPyc",
  authDomain: "automotive-dfe92.firebaseapp.com",
  projectId: "automotive-dfe92",
  storageBucket: "automotive-dfe92.appspot.com",
  messagingSenderId: "898642586945",
  appId: "1:898642586945:web:d7e79b3a7f31ea7f5e05c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

export default auth;