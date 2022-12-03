import { thirdPage } from "./thirdPage.js";
import { globalDate, globalTime } from "./booking.js";
import { APIAdapter } from "../API/APIadapter.js";

const bg_container = document.querySelector(".booking-container");

let titleSecondPage = document.createElement("h1");
titleSecondPage.className = "title-secondPage";
titleSecondPage.innerText = "Step two of booking";

let nameHeader = document.createElement("h3");
nameHeader.className = "name-header";
nameHeader.innerText = "Name: ";

let nameInput = document.createElement("input");
nameInput.className = "name-input";
nameInput.setAttribute("id", "name-input");
nameInput.setAttribute("required", "");

let emailHeader = document.createElement("h3");
emailHeader.className = "email-header";
emailHeader.innerText = "E-mail: ";

let emailInput = document.createElement("input");
emailInput.className = "email-input";
emailInput.setAttribute("id", "email-input");
emailInput.setAttribute("required", "");

let timeHeader = document.createElement("h3");
timeHeader.className = "time-header";
timeHeader.innerText = "Time:";

let timeInput = document.createElement("select");
timeInput.className = "time-input";
timeInput.setAttribute("id", "time-input");

let timeOptions = document.createElement("option");
timeOptions.setAttribute("id", "time-options");

let participantsHeader = document.createElement("h3");
participantsHeader.className = "participants-header";
participantsHeader.innerText = "Participants:";

let participants = document.createElement("select");
participants.className = "participants";
participants.setAttribute("id", "participants-input");

let detailsButton = document.createElement("button");
detailsButton.className = "details-button";
detailsButton.innerText = "Click to proceed";

export function secondPage(availTimes) {
    /* bg_container.removeChild(titleSecondPage); bg_container.removeChild(paragraphOne);bg_container.removeChild(dateButton); */
    
    bg_container.innerHTML = "";
    //
    bg_container.appendChild(titleSecondPage);
    bg_container.appendChild(nameHeader);
    bg_container.appendChild(nameInput);
    bg_container.appendChild(emailHeader);
    bg_container.appendChild(emailInput);
    bg_container.appendChild(timeHeader);
    bg_container.appendChild(timeInput);
    
    bg_container.appendChild(participantsHeader);
    bg_container.appendChild(participants);
    bg_container.appendChild(detailsButton);
    //
    // detailsButton.addEventListener("click", thirdPage);

    availTimes.forEach((element) => {
        let x = new Option(element)
        x.setAttribute("value", element)
        timeInput.appendChild(x);
    });
    
    
    submitPost();
}
//Unhandled Promise Rejection: TypeError: undefined is not a function (near '...secondPage.apply.addEventListener...')
function submitPost() {
    

    detailsButton.addEventListener("click", (e) => {
        if (document.getElementById("name-input").value.length == 0) {
            alert("input name");
        }
        if (document.getElementById("email-input").value.length == 0) {
            alert("input email");
        }

       
            
        fetch(
                "https://lernia-sjj-assignments.vercel.app/api/booking/reservations", {
                    method: "POST",
                    body: JSON.stringify({
                        challenge: 12,
                        name: getName(), // funkar
                        email: getEmail(), //funkar
                        date: globalDate, //funkar
                        time: getTime(), // <--- globalTime stod där innan
                        participants: 4,
                    }),
                    headers: {
                        "Content-Type": "application/json;charset=UTF-8",
                    },
                }
            )
            .then((response) => {
                return console.log(response.json());
            })
            .then((data) => {
                thirdPage();
            });

        e.preventDefault();
    });
}



function getName() {
    return document.querySelector("#name-input").value;
}

function getEmail() {
    return document.getElementById("email-input").value;
}

function getTime() {
    return document.getElementById('time-input').value;
}
function getChallengeID() {
    let api = new APIAdapter();
}





/* function getParticipants() {
     // challenge ID from booked challenge 
    let participantsData = new APIAdapter();

    let min = `${participantsData.minParticipants}`, max = `${participantsData.maxParticipants} participants`;
    let x = Array.apply(null, {length: max + 1 - min}).map(function(_, idx) {
    console.log(x);
    return idx + min;
});
} */


/* function getParticipants() {
    let apiData = new APIAdapter();
    Math.abs(apiData.minParticipants, apiData.maxParticipants);
} */


/* 
import thirdpage
save name and email

*/

//function secondPagePost(params) {
// User fills in Name
// User fills in Email
// User chooses a time for when they can do the challenge
// User pick the number of participants that will be in the challenge
// User then clicks the 'SUBMIT BOOKING' button to book the challenge.
// All the info will then be sent as a HTTP (post request) to the API
// The button click will also load page number three (thirdpage();)
//}