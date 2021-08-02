console.log("yeehaw 22")

const results = document.getElementById('inputs');

	  const db = firebase.firestore();

//create element and render

function renderAnswers(doc){
  let li = document.createElement('li');
  let name = document.createElement('span');
  let motivation = document.createElement('span');
    
  li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().collection("questions").doc("home").data().name;
    motivation.textContent = doc.data().collection("questions").doc("home").data().motivation;
    
    li.appendChild(name);
    li.appendChild(motivation);
    
    results.appendChild(li);
    
}

db.collection("answers").get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderAnswers(doc);        
})
})
//////////////////////////////////////////////////
