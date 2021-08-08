console.log("yeehaw 12")

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

	    // firestore.collection("answers").doc("userId").collection("questions").doc("lo1-q1").set(q1)

    firestore.collection("answers").doc(auth.currentUser.uid).set({
            info: firebase.firestore.FieldValue.arrayUnion("Name: " + name),
        })
    
	firestore.collection("answers").doc(auth.currentUser.uid).update({
	    info: firebase.firestore.FieldValue.arrayUnion("Motivation: " + motivation),
	})
    // VHxJJc0cGOV0Xt7kH8ZTjAgdy6V2
    
});
