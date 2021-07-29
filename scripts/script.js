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

var thankyou = document.getElementById("thankyou");

let form = document.getElementById("my-form")
form.addEventListener("submit", () => {
	event.preventDefault();
	console.log("hey");
    thankyou.textContent="Thank you!";
    let name = document.getElementById("input-name").value;
    let motivation = document.getElementById("input-motivation").value;

    console.log("name " + name);
    console.log("motivation " + motivation);

    let inputs = {
        id: "",
        name,
        motivation,
        userId: "userID"
    };

    let inputRef = firestore.collection("inputs").doc();

    inputs.id = inputRef.id;

    inputRef.set(inputs);
})
