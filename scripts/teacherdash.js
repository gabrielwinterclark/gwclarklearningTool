console.log("yeehaw 29")

const results = document.getElementById('inputs');

	  const db = firebase.firestore();

//create element and render

function renderAnswers(doc){
  let li = document.createElement('li');
  let questionAnswers = document.createElement('span');
    
  li.setAttribute('data-id', doc.id);
    questionAnswers.textContent = doc.data().assessment[0];
    
    li.appendChild(questionAnswers);
    
    results.appendChild(li);
    
}

db.collection("answers").get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderAnswers(doc);        
})
})
