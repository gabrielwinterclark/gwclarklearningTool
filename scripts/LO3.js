console.log("iteration 2")

// https://github.com/gabrielwinterclark/learning-tool

//question 1

let q1feedback = document.getElementById("lo3-q1-feedback")

let form1 = document.getElementById("lo3-q1-form")
form1.addEventListener("submit", () => {
    event.preventDefault()

    let value = document.querySelector('input[name="lo3-q1-answer"]:checked').value

    console.log("value = " + value)

    //return

    switch(value) {
        case "Incorrect (A)":
            q1feedback.innerHTML = "Incorrect. Value theory is not a branch of mathematics."
            break;
        case "Incorrect (B)":
            q1feedback.innerHTML = "Not quite. Your answer is a little too specific!"
            break;
        case "Correct (C)":
            q1feedback.innerHTML = "Correct! Yes, value theory is a branch of philosophy."
            break;
        case "Incorrect (D)":
            q1feedback.innerHTML = "Incorrect. Value theory is not a branch of psychology."
            break;
    }

    // firestore.collection("answers").doc("userId").collection("questions").doc("lo1-q1").set(q1)
    firestore.collection("answers").doc(auth.currentUser.uid).collection("questions").doc("lo3-q1").set({
        q7: value,
    })

})

//question 2

let q2feedback = document.getElementById("lo3-q2-feedback")

let form2 = document.getElementById("lo3-q2-form")
form2.addEventListener("submit", () => {
    event.preventDefault()

    let value = document.querySelector('input[name="lo3-q2-answer"]:checked').value

    console.log("value = " + value)

    //return

    switch(value) {
        case "Incorrect (A)":
            q2feedback.innerHTML = "Incorrect. Value theory can have implications for human well-being, but it is not primarily concerned with questions about human well-being."
            break;
        case "Correct (B)":
            q2feedback.innerHTML = "Correct! Yes, value theory primarily explores questions about value and goodness."
            break;
        case "Incorrect (C)":
            q2feedback.innerHTML = "Not quite. Value theory does sometimes draw from ethical philosophy, but it is not primarily concerned with ethical questions."
            break;
        case "Incorrect (D)":
            q2feedback.innerHTML = "Incorrect. Value theory can have implications in the field of economics, but it is not primarily concerned with economic questions."
            break;
    }

    // firestore.collection("answers").doc("userId").collection("questions").doc("lo1-q1").set(q1)
    firestore.collection("answers").doc(auth.currentUser.uid).collection("questions").doc("lo3-q2").set({
        q8: value,
    })

})

//question 3

let q3feedback = document.getElementById("lo3-q3-feedback")

let form3 = document.getElementById("lo3-q3-form")
form3.addEventListener("submit", () => {
    event.preventDefault()

    let value = document.querySelector('input[name="lo3-q3-answer"]:checked').value

    console.log("value = " + value)

    //return

    switch(value) {
        case "Incorrect (A)":
            q3feedback.innerHTML = "Not quite, your answer is too specific! What can value theory be applied to besides environmental policy?"
            break;
        case "Incorrect (B)":
            q3feedback.innerHTML = "Not quite, your answer is too specific! What can value theory be applied to besides education?"
            break;
        case "Incorrect (C)":
            q3feedback.innerHTML = "Not quite, your answer is too specific! What can value theory be applied to besides human well-being?"
            break;
        case "Incorrect (D)":
            q3feedback.innerHTML = "Incorrect. We did discuss all of these as examples, but are they the only areas where value theory can be applied?"
            break;
        case "Correct (E)":
            q3feedback.innerHTML = "Correct! Yes, value theory can be applied to any field you can think of that would benefit from asking evaluative questions."
            break;
    }

    // firestore.collection("answers").doc("userId").collection("questions").doc("lo1-q1").set(q1)
    firestore.collection("answers").doc(auth.currentUser.uid).collection("questions").doc("lo3-q3").set({
        q9: value,
    })

})
