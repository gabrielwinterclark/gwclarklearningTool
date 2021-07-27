      var submitMotivation = document.getElementById("submitMotivation");
submitMotivation.addEventListener("click", myFunction);

var thankyouMotivation = document.getElementById("thankyouMotivation");

function myFunction() {
	thankyouMotivation.textContent = "Thank you!";
}

var submitName = document.getElementById("submitName");
submitName.addEventListener("click", myFunctionTwo);

var thankyouName = document.getElementById("thankyouName");

function myFunctionTwo() {
	thankyouName.textContent = "Thank you!";
}

let myFlashcards = [ {
    "question": "Name this species of bird.",
    "image" : "images/barn-owl-2550068__340.webp",
    "answer": "Barn Owl"
    },
    {
    "question": "Name this species of bird.",
    "image" : "images/dove-2516641__340.webp",
    "answer": "Dove"
    },
    {
    "question": "Name this species of bird.",
    "image" : "images/hummingbird-2139279__340.webp",
    "answer": "Hummingbird"
    }
  ];

// Make the database point to the location root -> deck -> flashcards
// If the location doesn't exist is will be created
let dbLocation = firebase.database().ref('deck/flashcards'); 
 
// myFlashcards will be stored under flashcards in the database
// Anything that was in this location will be overwritten
// Thus, a write operation also does an update
dbLocation.set(myFlashcards);

// As before,make the database point to the location where the data exists
// If the location doesn't exist it will be created but there will be nothing to retrieve

	let fc = firebase.database().ref('deck/flashy');
	// A variable to store the JSON results in a human readable format
	let jsonString;
	// Tell Firebase to retrieve your data
	fc.on("value", function(retrieve) {
	    //Get the raw JSON data back from the database
	    let queryData = retrieve.val();
	    // Turn the data into a JSON String
	    jsonString = JSON.stringify(queryData);
	});
	// Print the data out as a JSON string or otherwise manipulate it
	console.log (' JSON string:' + jsonString )

// Initialize Firebase
  firebase.initializeApp(firebaseConfig);
