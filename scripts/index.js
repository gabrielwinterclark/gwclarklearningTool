class student {
	constructor (name, motivation) {
		this.name = name;
		this.motivation = motivation;
	}
};

let results = [];

var submitMotivation = document.getElementById("submitMotivation");
submitMotivation.addEventListener("click", storeMotivation);

var thankyouMotivation = document.getElementById("thankyouMotivation");

function storeMotivation() {
	thankyouMotivation.textContent = "Thank you!";
}

var submitName = document.getElementById("submitName");
submitName.addEventListener("click", storeName);

var thankyouName = document.getElementById("thankyouName");

function storeName() {
	thankyouName.textContent = "Thank you!";
}

// Make the database point to the location root -> deck -> flashcards
// If the location doesn't exist is will be created
let dbLocation = firebase.database().ref('deck/results'); 
 
// myFlashcards will be stored under flashcards in the database
// Anything that was in this location will be overwritten
// Thus, a write operation also does an update
dbLocation.set(results);

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
