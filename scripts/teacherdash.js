console.log("iteration 2")

const inputsDiv = document.getElementById("inputs")

const inputListener = firestore.collection("answers").doc("userId").collection("questions").doc("home")
    .onSnapshot(doc => {
        console.log("inputs listener")

        if(!doc.exists)
            return

        inputsDiv.innerHTML = ""

        let homeData = doc.data()

        inputsDiv.innerHTML = "Name: " + homeData.name + ", " + homeData.motivation

        querySnapshot.forEach(doc => {
        console.log(doc.data())

        let input = doc.data()

        let inputsElement = document.createElement("p")
        inputsElement.innerHTML = "Name: " + input.name + " || Motivation = " + input.motivation
            
        inputsDiv.appendChild(inputsElement)
        })
    })

window.addEventListener('beforeunload', function (e) {
    //e.preventDefault();
    //e.returnValue = '';
    inputListener()
});
