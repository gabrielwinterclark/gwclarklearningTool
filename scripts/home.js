//grab "thankyou" from the HTML document so that we can change the message & confirm to the user that they have submitted on "submit"
var thankyou = document.getElementById("thankyou");

//grab the form for name and motivation
let form = document.getElementById("my-form");

//set up an event listener when the user hits submit on the form
form.addEventListener("submit", () => {
//remove there being a default answer even if the user has entered one on the page before
    event.preventDefault();
//show a message that says "thank you" to confirm to the user that they did submit the form
    thankyou.textContent="Thank you!";
//declare variables for the values that the user entered in the text boxes for name and motivation
    let name = document.getElementById("input-name").value;
    let motivation = document.getElementById("input-motivation").value;
//first we "set" an array to hold the user's name, since the array didn't exist before and firebase needs to know where to put the info
    firestore.collection("answers").doc(auth.currentUser.uid).set({
            info: firebase.firestore.FieldValue.arrayUnion("Name: " + name),
    });
//then we "update" the array to avoid overwriting it, this time adding the user's motivation    
    firestore.collection("answers").doc(auth.currentUser.uid).update({
	    info: firebase.firestore.FieldValue.arrayUnion("Motivation: " + motivation),
    })    
});
