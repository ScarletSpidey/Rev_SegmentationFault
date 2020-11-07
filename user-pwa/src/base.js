import *  as firebase from 'firebase/app'
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyCNLuSgW3gRQpTYMklMdpSArNcpDzaXAOI",
    authDomain: "samriddhi-70e9d.firebaseapp.com",
    databaseURL: "https://samriddhi-70e9d.firebaseio.com/",
    projectId: "samriddhi-70e9d",
    storageBucket: "samriddhi-70e9d.appspot.com",
    messagingSenderId: 309680077184
  });
  
  export default app;