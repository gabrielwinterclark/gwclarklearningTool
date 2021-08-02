console.log("yeehaw 21")

const results = document.getElementById('inputs');

	  const db = firebase.firestore();

//create element and render

function renderAnswers(doc){
  let li = document.createElement('li');
  let name = document.createElement('span');
  let motivation = document.createElement('span');
    
  li.setAttribute('data-id', doc.id);
    name.textContent = doc.collection("questions").doc("home").name;
    motivation.textContent = doc.collection("questions").doc("home").motivation;
    
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
