import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC7j04dQOgluGYuvG9Ee7iWYm9eRIZItKQ",
    authDomain: "marioplan-9bf35.firebaseapp.com",
    databaseURL: "https://marioplan-9bf35.firebaseio.com",
    projectId: "marioplan-9bf35",
    storageBucket: "marioplan-9bf35.appspot.com",
    messagingSenderId: "442604825431",
    appId: "1:442604825431:web:766d39639e5ed3e1de2c12",
    measurementId: "G-DC12LEK09V"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase