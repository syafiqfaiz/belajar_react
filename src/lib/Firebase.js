import * as firebase from 'firebase'

// class FirebaseConnection {
//   const firebaseConfig = {
//     apiKey: '',
//     authDomain: '',
//   }
 
// }

// const firebaseConnection = new FirebaseConnection();
// export default firebaseConnection;

const firebaseConfig = {
  apiKey: 'AIzaSyD-d4cmyhigYvsVHl3HAJvQOl6KcYUgSBM',
  authDomain: 'chat-firebase-88df5.firebaseapp.com',
}


const firebaseConnection = firebase.initializeApp(firebaseConfig);