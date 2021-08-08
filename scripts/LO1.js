//question 1

//grab "loq-q1-feedback" from the HTML document so that we can update it with feedback depending on user's answer
let q1feedback = document.getElementById("lo1-q1-feedback");

//grab the form for question 1
let form1 = document.getElementById("lo1-q1-form");

//set up an event listener when the user hits submit on the form
form1.addEventListener("submit", () => {
//remove there being a default answer even if the user has checked one on the page before
    event.preventDefault();
//declare a variable value, set it equal to the "value" (as defined in the HTML) of their answer
    let value = document.querySelector('input[name="lo1-q1-answer"]:checked').value;
//change the feedback depending on the user's answer
    switch(value) {
        case "Learning Objective 1, Question 1: Correct (A)":
            q1feedback.innerHTML = "Correct! Yes, Jeremiah values playing the cello as an end, for itself."
            break;
        case "Learning Objective 1, Question 1: Incorrect (B)":
            q1feedback.innerHTML = "Not quite. Remember, something has intrinsic value when it is valuable for itself. Jeremiah does, in fact, value playing the cello for itself: he values it intrinsically."
            break;
    };
//store the value of the user's answer (as defined in the HTML) in Firebase
    firestore.collection("answers").doc(auth.currentUser.uid).update({
        LO1: firebase.firestore.FieldValue.arrayUnion(value),
    });
});

//question 2
//the same code/logic is used for all questions in the learning objectives; for commenting, please see LO1.js, "question 1"

let q2feedback = document.getElementById("lo1-q2-feedback");

let form2 = document.getElementById("lo1-q2-form");

form2.addEventListener("submit", () => {
    event.preventDefault();
    let value = document.querySelector('input[name="lo1-q2-answer"]:checked').value;
    switch(value) {
        case "Learning Objective 1, Question 2: Incorrect (A)":
            q2feedback.innerHTML = "Incorrect. Think about it: does May value playing the cello for itself, or for something else? In this case, it looks like May values playing the cello in service of something else. Read on to learn what type of value May assigns to playing the cello!"
            break;
        case "Learning Objective 1, Question 2: Correct (B)":
            q2feedback.innerHTML = "Correct! You may be wondering in what way May values playing the cello. Read on to find out."
            break;
    };
    firestore.collection("answers").doc(auth.currentUser.uid).update({
        LO1: firebase.firestore.FieldValue.arrayUnion(value),
    });
});

//question 3

let q3feedback = document.getElementById("lo1-q3-feedback");

let form3 = document.getElementById("lo1-q3-form");

form3.addEventListener("submit", () => {
    event.preventDefault();
    let value = document.querySelector('input[name="lo1-q3-answer"]:checked').value;
    switch(value) {
        case "Learning Objective 1, Question 3: Incorrect (A)":
            q3feedback.innerHTML = "You are partially correct. Aminah does value her master’s degree instrumentally, as a means to move towards her future career. But, is there anyone else who also instrumentally values their degree?"
            break;
        case "Learning Objective 1, Question 3: Incorrect (B)":
            q3feedback.innerHTML = "Incorrect. Phoebe values her master’s degree intrinsically for itself."
            break;
        case "Learning Objective 1, Question 3: Incorrect (C)":
            q3feedback.innerHTML = "You are partially correct. Sam does value his master’s degree instrumentally, as a means to eventually write a book about environmental science. But, is there anyone else who also instrumentally values their degree? "
            break;
        case "Learning Objective 1, Question 3: Correct (D)":
            q3feedback.innerHTML = "Correct! Yes, both Aminah and Sam value their degrees instrumentally, as a means to achieve their future goals."
            break;
        case "Learning Objective 1, Question 3: Incorrect (E)":
            q3feedback.innerHTML = "Not quite. Not all of the students instrumentally value their degree as a means to some other end. Think about who might value their degree intrinsically."
            break;            
    };
    firestore.collection("answers").doc(auth.currentUser.uid).update({
        LO1: firebase.firestore.FieldValue.arrayUnion(value),
    });
});
