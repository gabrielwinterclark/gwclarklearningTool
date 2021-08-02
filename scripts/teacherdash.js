console.log("yeehaw 24")

// const results = document.getElementById('inputs');

// 	  const db = firebase.firestore();

// //create element and render

// function renderAnswers(doc){
//   let li = document.createElement('li');
//   let name = document.createElement('span');
//   let motivation = document.createElement('span');
    
//   li.setAttribute('data-id', doc.id);
//     name.textContent = doc.Collection("answers").Doc("home").name;
//     motivation.textContent = doc.Collection("answers").Doc("home").motivation;
    
//     li.appendChild(name);
//     li.appendChild(motivation);
    
//     results.appendChild(li);
    
// }

// db.collection("answers").get().then((snapshot) => {
//     snapshot.docs.forEach(doc => {
//         renderAnswers(doc);        
// })
// })
// //////////////////////////////////////////////////

const inputsDiv = document.getElementById("inputs")

const inputListener = firestore.collection("answers").doc("userId").collection("questions").doc("home")
    .onSnapshot(doc => {
        console.log("inputs listener")

        if(!doc.exists)
            return

        inputsDiv.innerHTML = ""

        let homeData = doc.data()

        inputsDiv.innerHTML = "Name: " + homeData.name + ", " + homeData.motivation

        querySnapshot.forEach(doc => {
             console.log(doc.data())

            let input = doc.data()

           let inputsElement = document.createElement("p")
            inputsElement.innerHTML = "Name: " + input.name + " || Motivation = " + input.motivation
            
             inputsDiv.appendChild(inputsElement)
         })
    })

window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
    e.returnValue = '';
    inputListener()
});
