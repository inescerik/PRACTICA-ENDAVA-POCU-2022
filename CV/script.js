
// Setam hamburger + navbar pagini
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

});




const experiences= [
    {
        id: 1,
        name: "Worker",
        description: "Operator C.N.C at Techtex Romania.",
        startDate: "15/08/2020",
        endDate: "24/12/2020",
      },
      {
        id: 2,
        name: "Training",
        description: "JAVA PRE-EMPLOYMENT TRAINING.",
        startDate: "18/04/2022",
        endDate: "27/05/2022",
      },
      {
        id: 3,
        name: "Practice",
        description: "SUMMER PRACTICE POCU PROGRAM ENDAVA.",
        startDate: "11/07/2022",
        endDate: "02/09/2022",
      }
]
function generateExperienceCard(experience){

    const experienceCard = document.createElement("div");
    
    experienceCard.className ="cardContainer";

    const experienceName = document.createElement("p");
    experienceName.innerText = experience.name;
    
    const experienceDescription = document.createElement("p");
    experienceDescription.innerText = experience.description;

    const experienceStart = document.createElement("p");
    experienceStart.innerText = experience.startDate;

    const experienceEnd = document.createElement("p");
    experienceEnd.innerText = experience.endDate;

    experienceCard.appendChild(experienceName);
    experienceCard.appendChild(experienceDescription);
    experienceCard.appendChild(experienceStart);
    experienceCard.appendChild(experienceEnd);

    return experienceCard;
}

function populateExperiencesContainer(experiencesArray){
    const mainParent = document.getElementById("experiencesContainer");
    experiencesArray.forEach(function( experienceObj, index) {
        const expCard = generateExperienceCard(experienceObj);
        mainParent.appendChild(expCard);
        
    });
}
populateExperiencesContainer(experiences);








// localstorage -contact.
// const contactBtn = document.getElementsByClassName("contactBtn");
//let inputContact = document.getElementsByClassName("contactBtn");

function saveLocalStorage(){
  let getName = document.getElementById('full-name').value;
  let getEmail = document.getElementById('e-mail').value;
  let getMessage = document.getElementById('text-message');
  // let getMessage = document.getElementById('text-message').value;
  if( getName.length && getEmail.length ){
    localStorage.setItem("name",getName);
    localStorage.setItem("E-mail",getEmail);
    getMessage.textContent ="Your name is:\n" + localStorage.getItem("name")  + " \nYour E-mail is:\n" + localStorage.getItem("E-mail");
  }
  else{
    alert("Please introduce your data.");
  }
  // localStorage.setItem("Message",getMessage);
  // console.log("salut");
}

// function readLocalStorage(){
//   let getMessage = document.getElementById('text-message');
//   if(localStorage.getItem("name").length && localStorage.getItem("E-mail").length){
//       getMessage.textContent ="Your name is: " + localStorage.getItem("name") +  " and your E-mail is:" + localStorage.getItem("E-mail");
//   }
//   else{
//     alert("Please introduce your data.");
//   }

// }
