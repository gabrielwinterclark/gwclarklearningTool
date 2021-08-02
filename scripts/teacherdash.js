console.log("yeehaw 8")

const inputsDiv = document.getElementById("inputs");

const inputListener = firestore.database().ref();
dbRef.child("users").child(userId).get().then((snapshot) => { 
    if (snapshot.exists()) {
        let input = doc.data();
        let inputsElement = document.createElement("p");
        inputsElement.innerHTML = "Name: " + input.name + " || Motivation = " + input.motivation
        inputsDiv.appendChild(inputsElement)
    } else {
        console.log("No data available");
    }).catch((error) => {
        console.error(error);
});
