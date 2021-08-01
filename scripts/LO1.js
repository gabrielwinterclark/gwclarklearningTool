console.log("hello hello")

// https://github.com/gabrielwinterclark/learning-tool

//first learn by doing exercise

let q1feedback = document.getElementById("lo1-q1-feedback")

let form1 = document.getElementById("lo1-q1-form")
form1.addEventListener("submit", () => {
    event.preventDefault()

    let value = document.querySelector('input[name="lo1-q1-answer"]:checked').value

    //return

    switch(value) {
        case "Correct":
            q1feedback.innerHTML = "Correct! Yes, Jeremiah values playing the cello as an end, for itself."
            break;
        case "Incorrect":
            q1feedback.innerHTML = "Not quite. Remember, something has intrinsic value when it is valuable for itself. Jeremiah does, in fact, value playing the cello for itself: he values it intrinsically."
            break;
    }    
    
    // firestore.collection("answers").doc("userId").collection("questions").doc("lo1-q1").set(q1)
    firestore.collection("answers").doc(auth.currentUser.uid).collection("questions").doc("lo1-q1").set({
        q1: value,
    })

    // second learn by doing exercise
    
let q2feedback = document.getElementById("lo1-q2-feedback")

let form2 = document.getElementById("lo1-q2-form")
form1.addEventListener("submit", () => {
    event.preventDefault();

    let value = document.querySelector('input[name="lo1-q2-answer"]:checked').value

    switch(value) {
        case "Incorrect":
            q1feedback.innerHTML = "Incorrect. Think about it: does May value playing the cello for itself, or for something else? In this case, it looks like May values playing the cello in service of something else. Read on to learn what type of value May assigns to playing the cello!"
            break;
        case "Correct":
            q1feedback.innerHTML = "Correct! You may be wondering in what way May values playing the cello. Read on to find out."
            break;
    }    
    

        // third learn by doing exercise
    
let q3feedback = document.getElementById("lo1-q3-feedback")

let form3 = document.getElementById("lo1-q3-form")
form1.addEventListener("submit", () => {
    event.preventDefault()

    let value = document.querySelector('input[name="lo1-q3-answer"]:checked').value

    //return

    switch(value) {
        case "Incorrect (A)":
            q1feedback.innerHTML = "You are partially correct. Aminah does value her master’s degree instrumentally, as a means to move towards her future career. But, is there anyone else who also instrumentally values their degree?"
            break;
        case "Incorrect (B)":
            q1feedback.innerHTML = "Incorrect. Phoebe values her master’s degree intrinsically for itself."
            break;
        case "Incorrect (C)":
            q1feedback.innerHTML = "You are partially correct. Sam does value her master’s degree instrumentally, as a means to eventually write a book about environmental science. But, is there anyone else who also instrumentally values their degree?"
            break;
        case "Correct (D)":
            q1feedback.innerHTML = "Correct! Yes, both Aminah and Sam value their degrees instrumentally, as a means to achieve their future goals."
            break;
        case "Incorrect (E)":
            q1feedback.innerHTML = "Not quite. Not all of the students instrumentally value their degree as a means to some other end. Think about who might value their degree intrinsically."
            break;
    }    
    
// for retrieving info from firebase
    
    // let a = { name: "Name" }
    // let b = { type: "Type" }

    // let c = {
    //     ...a,
    //     ...b
    // }

    // let doc = {
    //     q1: "value",
    //     q2: "",
    //     q3: "",
    //     name: ""
    // }

    // let name = document.getElementById("input-name").value;
    // let motivation = document.getElementById("input-motivation").value;

    // console.log("name " + name);
    // console.log("motivation " + motivation);

    // let inputs = {
    //     id: "",
    //     name,
    //     motivation,
    //     userId: "userID"
    // };

    // let inputRef = firestore.collection("inputs").doc();

    // inputs.id = inputRef.id;

    // inputRef.set(inputs);
})
