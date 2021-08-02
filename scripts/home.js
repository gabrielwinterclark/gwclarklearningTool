console.log("version 9")

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

    let q1 = {
        name,
        motivation,
    };

    firestore.collection("answers").doc(auth.currentUser.uid).set({
            name, // => name: name
            motivation    
        })
        .catch(error => console.log(error))

    // VHxJJc0cGOV0Xt7kH8ZTjAgdy6V2
    
});
