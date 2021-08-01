console.log("iteration 10")

// https://github.com/gabrielwinterclark/learning-tool

let form = document.getElementById("assessment-form")
form.addEventListener("submit", () => {
    event.preventDefault();
    
    let assessment1 = document.querySelector('input[name="assessmentq1answer"]:checked').value;
    let assessment2 = document.querySelector('input[name="assessmentq2answer"]:checked').value;
    let assessment3 = document.querySelector('input[name="assessmentq3answer"]:checked').value;

    //return

    let assessmentResults = {
      assessment1,
      assessment2,
      assessment3,
    };
  
    // firestore.collection("answers").doc("userId").collection("questions").doc("lo1-q1").set(q1)
    firestore.collection("answers").doc(auth.currentUser.uid).collection("questions").doc("assessment").set({
        assessmentq1answer,
        assessmentq2answer,
        assessmentq3answer,
    })
    .catch(error => console.log(error));
    
        window.location.href="https://gabrielwinterclark.github.io/learning-tool/teacherdash";

})
