console.log("yeehaw 43")

const results = document.getElementById('inputs');

	  const db = firebase.firestore();

//create element and render

function renderAnswers(doc){
  let name = document.createElement('h3');
  let motivation = document.createElement('li');
  let LO1Q1 = document.createElement('li');
  let LO1Q2 = document.createElement('li');
  let LO1Q3 = document.createElement('li');
  let LO2Q1 = document.createElement('li');
  let LO2Q2 = document.createElement('li');
  let LO2Q3 = document.createElement('li');
  let LO3Q1 = document.createElement('li');
  let LO3Q2 = document.createElement('li');
  let LO3Q3 = document.createElement('li');
  let assessment1 = document.createElement('li');
  let assessment2 = document.createElement('li');
  let assessment3 = document.createElement('li');
    
  name.setAttribute('data-id', doc.id);
  name.textContent = doc.data().info[0];
  motivation.textContent = doc.data().info[1];
  LO1Q1.textContent = doc.data().LO1[0];
  LO1Q2.textContent = doc.data().LO1[1];
  LO1Q3.textContent = doc.data().LO1[2];
  LO2Q1.textContent = doc.data().LO2[0];
  LO2Q2.textContent = doc.data().LO2[1];
  LO2Q3.textContent = doc.data().LO2[2];
  LO3Q1.textContent = doc.data().LO3[0];
  LO3Q2.textContent = doc.data().LO3[1];
  LO3Q3.textContent = doc.data().LO3[2];
  assessment1.textContent = doc.data().assessment[0];
  assessment2.textContent = doc.data().assessment[1];
  assessment3.textContent = doc.data().assessment[2];
  
  name.appendChild(motivation);
  name.appendChild(LO1Q1);
  name.appendChild(LO1Q2);
  name.appendChild(LO1Q3);
  name.appendChild(LO2Q1);
  name.appendChild(LO2Q2);
  name.appendChild(LO2Q3);
  name.appendChild(LO3Q1);
  name.appendChild(LO3Q2);
  name.appendChild(LO3Q3);
  name.appendChild(assessment1);
  name.appendChild(assessment2);
  name.appendChild(assessment3);
    
    results.appendChild(name);
    
}

db.collection("answers").get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderAnswers(doc);        
})
})
