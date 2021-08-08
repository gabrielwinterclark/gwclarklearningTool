console.log("yeehaw 30")

const results = document.getElementById('inputs');

	  const db = firebase.firestore();

//create element and render

function renderAnswers(doc){
  let li = document.createElement('li');
  let name = document.createElement('span');
  let motivation = document.createElement('span');
  let LO1Q1 = document.createElement('span');
  let LO1Q2 = document.createElement('span');
  let LO1Q3 = document.createElement('span');
  let LO2Q1 = document.createElement('span');
  let LO2Q2 = document.createElement('span');
  let LO2Q3 = document.createElement('span');
  let LO3Q1 = document.createElement('span');
  let LO3Q2 = document.createElement('span');
  let LO3Q3 = document.createElement('span');
  let assessment1 = document.createElement('span');
  let assessment2 = document.createElement('span');
  let assessment3 = document.createElement('span');
  let space = document.createElement('span');
    
  li.setAttribute('data-id', doc.id);
  name.textContent = doc.data().assessment[0];
  motivation.textContent = doc.data().assessment[0];
  LO1Q1.textContent = doc.data().assessment[0];
  LO1Q2.textContent = doc.data().assessment[0];
  LO1Q3.textContent = doc.data().assessment[0];
  LO2Q1.textContent = doc.data().assessment[0];
  LO2Q2.textContent = doc.data().assessment[0];
  LO2Q3.textContent = doc.data().assessment[0];
  LO3Q1.textContent = doc.data().assessment[0];
  LO3Q2.textContent = doc.data().assessment[0];
  LO3Q3.textContent = doc.data().assessment[0];
  assessment1.textContent = doc.data().assessment[0];
  assessment2.textContent = doc.data().assessment[0];
  assessment3.textContent = doc.data().assessment[0];
  space.textContent = "";
    
  li.appendChild(name);
  li.appendChild(motivation);
  li.appendChild(LO1Q1);
  li.appendChild(LO1Q2);
  li.appendChild(LO1Q3);
  li.appendChild(LO2Q1);
  li.appendChild(LO2Q2);
  li.appendChild(LO2Q3);
  li.appendChild(LO3Q1);
  li.appendChild(LO3Q2);
  li.appendChild(LO3Q3);
  li.appendChild(assessment1);
  li.appendChild(assessment2);
  li.appendChild(assessment3);
  li.appendChild(space);
    
    results.appendChild(li);
    
}

db.collection("answers").get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderAnswers(doc);        
})
})
