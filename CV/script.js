
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
        id: 2,
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

const getName = document.querySelector('#full-name');
const getEmail = document.querySelector('#e-mail');
const getMessage = document.querySelector('#text-message');
const contactBtn = document.querySelector(".contactBtn");


// contactBtn.addEventListener('click', function(){
//     const name =getName.value;
//     const email = getEmail.value;
//     console.log(name);
//     console.log(emal);
// })