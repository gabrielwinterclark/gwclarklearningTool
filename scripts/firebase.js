var firebaseConfig = {
    apiKey: "AIzaSyD_M1PPIlNIG0yEmZeDlptwApOjY3oFr70",
    authDomain: "learning-tool-5eb63.firebaseapp.com",
    databaseURL: "https://learning-tool-5eb63-default-rtdb.firebaseio.com",
    projectId: "learning-tool-5eb63",
    storageBucket: "learning-tool-5eb63.appspot.com",
    messagingSenderId: "128932611744",
    appId: "1:128932611744:web:626d046619028126fcebc5"
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const firestore = firebase.firestore()

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      console.log("Has user")
      console.log(user.uid)
      // ...
    } else {
      // User is signed out
      // ...
      console.log("No user")
    }
});

firebase.auth().signInAnonymously()
    .catch((error) => console.log(error))
