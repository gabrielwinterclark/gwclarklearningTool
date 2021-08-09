//question 1
//the same code/logic is used for all questions in the learning objectives; for an explanation, please see LO1.js, "question 1"

let q1feedback = document.getElementById("lo2-q1-feedback");

let form1 = document.getElementById("lo2-q1-form");

form1.addEventListener("submit", () => {
    event.preventDefault();
    let value = document.querySelector('input[name="lo2-q1-answer"]:checked').value;
    switch(value) {
        case "Learning Objective 2, Question 1: Correct (A)":
            q1feedback.innerHTML = "Correct! Yes, Jorge values BMWs for a nonrelational property: the well-made nature of the cars can’t be separated from them."
            break;
        case "Learning Objective 2, Question 1: Incorrect (B)":
            q1feedback.innerHTML = "Not quite. Remember, something has intrinsic value by this second definition when it is valued for its nonrelational properties, or those properties that can’t be separated from it. Is a car being well made separable from the car itself? The correct answer is yes."
            break;
    };
    firestore.collection("answers").doc(auth.currentUser.uid).update({
        LO2: firebase.firestore.FieldValue.arrayUnion(value),
    });
});

//question 2
//the same code/logic is used for all questions in the learning objectives; for an explanation, please see LO1.js, "question 1"

let q2feedback = document.getElementById("lo2-q2-feedback");

let form2 = document.getElementById("lo2-q2-form");

form2.addEventListener("submit", () => {
    event.preventDefault();
    let value = document.querySelector('input[name="lo2-q2-answer"]:checked').value;
    switch(value) {
        case "Learning Objective 2, Question 2: Incorrect (A)":
            q2feedback.innerHTML = "Incorrect. Micah loves the movie because it makes them and their friends laugh. Is this a nonrelational property of the movie, or is it something that can be separated from the movie? The correct answer is no."
            break;
        case "Learning Objective 2, Question 2: Correct (B)":
            q2feedback.innerHTML = "Correct! You may be wondering in what way Micah values Ratatouille. Read on to find out."
            break;
    };
    firestore.collection("answers").doc(auth.currentUser.uid).update({
        LO2: firebase.firestore.FieldValue.arrayUnion(value),
    });
});

//question 3
//the same code/logic is used for all questions in the learning objectives; for an explanation, please see LO1.js, "question 1"

let q3feedback = document.getElementById("lo2-q3-feedback");

let form3 = document.getElementById("lo2-q3-form");

form3.addEventListener("submit", () => {
    event.preventDefault();
    let value = document.querySelector('input[name="lo2-q3-answer"]:checked').value;
    switch(value) {
        case "Learning Objective 2, Question 3: Incorrect (A)":
            q3feedback.innerHTML = "Incorrect. For Wes to value donating blood intrinsically in this way, he would have to value it for some nonrelational (inseparable) property. Is donating blood separable from the fact that it helps people in need? Remember, one way to test if something has intrinsic value is to think about it in a vacuum. The correct answer is extrincisally."
            break;
        case "Learning Objective 2, Question 3: Correct (B)":
            q3feedback.innerHTML = "Correct! Wes values donating blood extrinsically because he values it for the fact that it helps people, which is a relational (separable) property."
            break;      
    };
    firestore.collection("answers").doc(auth.currentUser.uid).update({
        LO2: firebase.firestore.FieldValue.arrayUnion(value),
    });
});
