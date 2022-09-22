
const users = [{id: 1, nom:'jean', prenom: 'Pierre', age: 25 }];
const validerButton = document.getElementById('valider');

validerButton.addEventListener('click', addUser),
showAllUser();
updateOrDeleteUser();

function updateOrDeleteUser(){
  const deleteButtons = document.querySelectorAll('.Supprimer');
  const editButtons =document.querySelectorAll('.Modifier');

  deleteButtons.forEach((button) => 
 button.addEventListener('click', () => deleteUser(button.id))
  );
  editButtons.forEach((button) =>
  button.addEventListener('click', () => editUser(button.id))
  );
}


     function addUser(event){
     event.preventDefault();
     const enteredUsersData ={
        id: users.length !== 0 ? users[users.length-1].id + 1 : 1,
        nom: document.getElementById('nom').value,
        prenom: document.getElementById('prenom').value,
        age: document.getElementById('age').value,

    };
    if(
        enteredUsersData.nom!== '' &&
        enteredUsersData.prenom!== '' &&
        enteredUsersData.age!== '' 
    ){
    users.push(enteredUsersData);
    console.log(users);
    showAllUser();
}
}
 function showAllUser(){
     document.getElementById('allUsers').innerHTML = '';
    users.forEach((user) =>{
      const newInputs = {
        Nom: document.createElement('input'),
        Prenom: document.createElement('input'),
        Age: document.createElement('input'),
      };
      const newDiv =document.createElement('div');
      const newButtons = {
        Supprimer: document.createElement('input'),
        Modifier: document.createElement('input'),
      };
      for(const [key, value] of Object.entries(newInputs)){
        value.setAttribute('type', 'text');
        value.setAttribute('id', `${key}OfUser${user.id}`);
        key ==='Nom' && value.setAttribute('value', user.nom);
        key ==='Prenom' && value.setAttribute('value', user.prenom);
        key ==='Age' && value.setAttribute('value', user.age);

        newDiv.appendChild(value);
        document.getElementById('allUsers').appendChild(newDiv);
        
      }
      for(const[key, value] of Object.entries(newButtons)){
        value.setAttribute('type','button');
        value.setAttribute('class',key);
        value.setAttribute('id',user.id);
        value.setAttribute('value',key);
        newDiv.appendChild(value);

      }
    })
    updateOrDeleteUser();
}

function deleteUser(id) {
  users.forEach((user) => {
const userPositionInArray = users.indexOf(user);
user.id === parseInt(id) && users.splice(userPositionInArray, 1);
  });
  showAllUser();

}
function editUser(id){
  const newInputs ={
    nom:document.getElementById(`NomOfUser${id}`).value,
    prenom:document.getElementById(`PrenomOfUser${id}`).value,
    age:document.getElementById(`AgeOfUser${id}`).value,
  };
  users.forEach((user)=>{
    if (user.id === parseInt(id)){
      user.nom = newInputs.nom;
      user.prenom = newInputs.prenom;
      user.age = newInputs.age;
    }
  })
}
 
