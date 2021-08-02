console.log("version 15")

//home

	  const db = firebase.firestore();

https://github.com/gabrielwinterclark/learning-tool/blob/main/scripts/teacherdash.js
var thankyou = document.getElementById("thankyou");

let form = document.getElementById("my-form")
form.addEventListener("submit", (e) => {
	e.preventDefault();
	
    thankyou.textContent="Thank you!";

    db.collection("answers").doc(auth.currentUser.uid).add({
            name: form.name.value,
            motivation: form.name.value,
        })

    // VHxJJc0cGOV0Xt7kH8ZTjAgdy6V2
    
});
