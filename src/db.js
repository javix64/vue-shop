import firebase from 'firebase/app'
import 'firebase/firestore'
import "firebase/auth"

var fConfig = {
  apiKey: "AIzaSyBP0H7t-1VnGCn6gzoQVc1goqKMdGFWOE4",
  authDomain: "vue-shop-e51cf.firebaseapp.com",
  projectId: "vue-shop-e51cf",
  storageBucket: "vue-shop-e51cf.appspot.com",
  messagingSenderId: "911893955350",
  appId: "1:911893955350:web:d5258421ed9060722b8637",
  measurementId: "G-FD6YSS2J1K"

};


// Get a Firestore instance
export const db = firebase
  .initializeApp(fConfig)
  .firestore()

export default {
    auth: firebase.auth(),
    login() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider)
      .then(function(result) {
        console.log(result);
      })
      .catch(function(error){
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
        console.log(errorCode, errorMessage, email, credential);
        })
    },
    logout() {
      firebase.auth().signOut()
      .then(function() {})
      .catch(function(error) {
        console.log(error)});
    }
  }
// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }
