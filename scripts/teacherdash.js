console.log("yeehaw 20")

const results = document.getElementById('inputs');

	  const db = firebase.firestore();

//create element and render

function renderAnswers(doc){
  let li = document.createElement('li');
  let name = document.createElement('span');
  let motivation = document.createElement('span');
    
  li.setAttribute('data-id', doc.id);
    name.textContent = doc.data(home).name;
    motivation.textContent = doc.data(home).motivation;
    
    li.appendChild(name);
    li.appendChild(motivation);
    
    results.appendChild(li);
    
}

db.collection('answers').doc('userId').collection('questions').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderAnswers(doc);        
})
})
//////////////////////////////////////////////////
