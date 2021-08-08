//grab the "see results" button from the bottom of the assessment page 
let seeresults = document.getElementById("seeresults");
//hide it, since we don't want the user to proceed until they've taken the assessment
seeresults.style.visibility = "hidden";

//grab the assessment form
let form = document.getElementById("assessment-form");

//set up an event listener when the user hits submit on the form
form.addEventListener("submit", () => {
//remove default answers
    event.preventDefault();
//declare variables for each "value" (as defined in the HTML) of the user's answers
    let assessment1 = document.querySelector('input[name="assessment-q1-answer"]:checked').value;
    let assessment2 = document.querySelector('input[name="assessment-q2-answer"]:checked').value;
    let assessment3 = document.querySelector('input[name="assessment-q3-answer"]:checked').value;
//make the "see results" button visible    
    seeresults.style.visibility = "visible";
//store the value of the user's answers (as defined in the HTML) in Firebase, separately for each one so they don't overwrite the previous one
    firestore.collection("answers").doc(auth.currentUser.uid).update({
            assessment: firebase.firestore.FieldValue.arrayUnion(assessment1),
    });
    firestore.collection("answers").doc(auth.currentUser.uid).update({
	    assessment: firebase.firestore.FieldValue.arrayUnion(assessment2),
    });
    firestore.collection("answers").doc(auth.currentUser.uid).update({
	    assessment: firebase.firestore.FieldValue.arrayUnion(assessment3),
    });    
});
