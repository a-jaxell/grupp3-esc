import { thirdPage } from "./thirdPage.js";
import { globalDate, globalTime, bookingContainer } from "./booking.js";

let data;
let availableTimes;

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

export function secondPage(availTimes, challengeData) {
    //
    /* bg_container.removeChild(titleSecondPage); bg_container.removeChild(paragraphOne);bg_container.removeChild(dateButton); */
    //recieves challenge obj.
    availableTimes = availTimes;
    data = challengeData; //assigns the param val to global file scope.
    bookingContainer.innerHTML = "";

    //Unhandled Promise Rejection: TypeError: null is not an object (evaluating 'bookingContainer.innerHTML = ""')
    bookingContainer.appendChild(titleSecondPage);
    bookingContainer.appendChild(nameHeader);
    bookingContainer.appendChild(nameInput);
    bookingContainer.appendChild(emailHeader);
    bookingContainer.appendChild(emailInput);
    bookingContainer.appendChild(timeHeader);
    bookingContainer.appendChild(timeInput);

    bookingContainer.appendChild(participantsHeader);
    bookingContainer.appendChild(participants);
    bookingContainer.appendChild(detailsButton);
    renderParticipants();

    availableTimes.forEach((element) => {
        let x = new Option(element);
        x.setAttribute("value", element);
        timeInput.appendChild(x);
    });

    submitPost();
}

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
                        challenge: data.id,
                        name: getName(),
                        email: getEmail(),
                        date: globalDate,
                        time: getTime(),
                        participants: getParticipants(),
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
    return document.getElementById("time-input").value;
}

function getParticipants() {
    return parseInt(document.getElementById("participants-input").value);
}

function renderParticipants() {
    for (let i = data.minParticipants; i <= data.maxParticipants; i++) {
        let option = new Option(`${i}` + " participant(s)");
        option.setAttribute("value", i);
        participants.appendChild(option);
    }
}