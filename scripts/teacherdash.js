console.log("yeehaw 10")

const db = firebase.firestore(); 

db.collection('answers').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        console.log(doc))
})
})
//////////////////////////////////////////////////
