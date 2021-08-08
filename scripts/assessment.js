console.log("iteration 17")

// https://github.com/gabrielwinterclark/learning-tool

let seeresults = document.getElementById("seeresults");
seeresults.style.visibility = "hidden";

let form = document.getElementById("assessment-form")
form.addEventListener("submit", () => {
    event.preventDefault();
    
    let assessment1 = document.querySelector('input[name="assessment-q1-answer"]:checked').value;
    let assessment2 = document.querySelector('input[name="assessment-q2-answer"]:checked').value;
    let assessment3 = document.querySelector('input[name="assessment-q3-answer"]:checked').value;

    //return
    
    seeresults.style.visibility = "visible";
    
    // firestore.collection("answers").doc("userId").collection("questions").doc("lo1-q1").set(q1)
firestore.collection("answers").doc(auth.currentUser.uid).set({
            assessment: firebase.firestore.FieldValue.arrayUnion(assessment1),
        })
    
	firestore.collection("answers").doc(auth.currentUser.uid).update({
	    assessment: firebase.firestore.FieldValue.arrayUnion(assessment2),
	})
    
    firestore.collection("answers").doc(auth.currentUser.uid).update({
	    assessment: firebase.firestore.FieldValue.arrayUnion(assessment3),
	})
    
    .catch(error => console.log(error));
    
})
