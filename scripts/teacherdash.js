console.log("yeehaw 36")

const results = document.getElementById('inputs');

	  const db = firebase.firestore();

//create element and render

function renderAnswers(doc){
  let user = document.createElement('p');
  let name = document.createElement('p');
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
    
  user.setAttribute('data-id', doc.id);
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
  
  user.appendChild(name);
  user.appendChild(motivation);
  user.appendChild(LO1Q1);
  user.appendChild(LO1Q2);
  user.appendChild(LO1Q3);
  user.appendChild(LO2Q1);
  user.appendChild(LO2Q2);
  user.appendChild(LO2Q3);
  user.appendChild(LO3Q1);
  user.appendChild(LO3Q2);
  user.appendChild(LO3Q3);
  user.appendChild(assessment1);
  user.appendChild(assessment2);
  user.appendChild(assessment3);
    
    results.appendChild(user);
    
}

db.collection("answers").get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderAnswers(doc);        
})
})
