console.log("version 8")

//home

var thankyou = document.getElementById("thankyou");

let form = document.getElementById("my-form")
form.addEventListener("submit", () => {
	event.preventDefault();
	
    thankyou.textContent="Thank you!";

    //console.log(auth.currentUser.uid)

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

    let inputRef = firestore.collection("inputs").doc()
    
    inputs.id = inputRef.id
    inputRef.set(inputs)
    
})

//retrieving data
