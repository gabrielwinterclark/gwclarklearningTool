console.log("iteration 1")

const inputsDiv = document.getElementById("inputs")

const inputListener = firestore.collection("inputs")
    .onSnapshot(querySnapshot => {
        console.log("inputs listener")

        inputsDiv.innerHTML = ""

	querySnapshot.forEach(doc => {
		console.log(doc.data())
		
        let input = doc.data()

let inputsElement = document.createElement("p")
inputsElement.innerHTML = "Name: " + input.name + " | | Motivation = " + input.motivation
		
		inputsDiv.appendChild(inputsElement)
    
         })
    })

window.addEventListener('beforeunload', function (e) {
    //e.preventDefault();
    //e.returnValue = '';
    inputListener()
});
