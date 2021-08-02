console.log("yeehaw 9")

const db = firebase.firestore(); 

db.collection('answers').get().then((snapshot) => {
    console.log(snapshot.docs);
})

//////////////////////////////////////////////////
