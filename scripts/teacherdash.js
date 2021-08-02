console.log("yeehaw 11")

const results = document.getElementById('inputs');

db.collection('answers').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        console.log(doc.data())
})
})
//////////////////////////////////////////////////
