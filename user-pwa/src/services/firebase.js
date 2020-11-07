
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCNLuSgW3gRQpTYMklMdpSArNcpDzaXAOI",
    authDomain: "samriddhi-70e9d.firebaseapp.com",
    databaseURL: "https://samriddhi-70e9d.firebaseio.com/",
    projectId: "samriddhi-70e9d",
    storageBucket: "samriddhi-70e9d.appspot.com",
    messagingSenderId: "309680077184",
    appId: "1:309680077184:web:b3aa3cd8dd4c03a56a2965",
    measurementId: "G-K0GDDQ256H"
};

firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();
export const storage = firebase.storage();