//grab the "inputs" paragraph from the HTML so the code knows where to print our results
const results = document.getElementById('inputs');

//define db for the function below
const db = firebase.firestore();

//make a function that prints out all of our users' results
function renderAnswers(doc){
//declare variables for each answer that the user has submitted and create a list item element for each
  let name = document.createElement('li');
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
//add a space at the bottom so that there is space between each users' results
  let space = document.createElement('li');
//define the text content for each variable by the corresponding value stored in the array in firebase
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
//the space does not have any text content since it's blank
  space.textContent = "";
//tack each answer onto the user's name
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
  name.appendChild(space);
//put the answers into the HTML document using the variable defined in line 2
  results.appendChild(name);
};

//for each document in "answers" in firebase (i.e., each user), we run the function above
db.collection("answers").get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderAnswers(doc);        
    })
});
