const inputsDiv = document.getElementById("inputs")

const inputListener = firestore.collection("inputs")
    .onSnapshot(querySnapshot => {
        console.log("inputs listener")

        inputsDiv.innerHTML = ""

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

//home

let form = document.getElementById("my-form")
form.addEventListener("submit", () => {
	event.preventDefault()
	console.log("hey")

    let name = document.getElementById("input-name").value
    let motivation = document.getElementById("input-motivation").value

    console.log("name " + name)
    console.log("motivation " + motivation)

    let inputs = {
        id: "",
        name,
        motivation,
        userId: "userID"
    }

    let inputRef = firestore.collection("inputs").doc()

    inputs.id = inputRef.id

    inputRef.set(inputs)
})

//LO1

let lo1-q1-a-input = document.getElementById("lo1-q1-a-input")
form.addEventListener("lo1-q1-a-input", () => {
	event.preventDefault()
	console.log("hey")

    let lo1-q1-answer-a = document.getElementById("lo1-q1-a-input").value

    let loq-q1-inputs = {
        id: "",
        lo1-q1-answer,
        userId: "userID"
    }

    let inputRef = firestore.collection("lo1-q1-inputs").doc()

    lo1-q1-inputs.id = inputRef.id

    inputRef.set(lo1-q1-inputs)
})
