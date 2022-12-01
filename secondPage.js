const popOutButton = document.getElementById("bookingButton");

const bg_container = document.querySelector(".booking-container");

let titleSecondPage = document.createElement("h1");
titleSecondPage.className = "title-secondPage";
titleSecondPage.innerText = "Step two of booking";

let nameHeader = document.createElement("h3");
nameHeader.className = "name-header";
nameHeader.innerText = "Name: ";

let nameInput = document.createElement("input");
nameInput.className = "name-input";

let emailHeader = document.createElement("h3");
emailHeader.className = "email-header";
emailHeader.innerText = "E-mail: ";

let emailInput = document.createElement("input");
emailInput.className = "email-input";

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

let detailsButton = document.createElement("button");
detailsButton.className = "details-button";
detailsButton.innerText = "Click to proceed";

export function secondPage(availTimes) {
    /* bg_container.removeChild(titleSecondPage);
                      bg_container.removeChild(paragraphOne);
                      bg_container.removeChild(dateButton); */

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
        timeInput.add(new Option(element));
    });
}