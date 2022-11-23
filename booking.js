const bookingContainer = document.querySelector(".booking-container");

const bookingButton = document.createElement("button");
bookingButton.className = "booking-button";

// first page

let headerFirstPage = document.createElement("h1");
headerOne.className = "title-firstPage";

let paragraphOne = document.createElement("p");
paragraphOne.className = "paragraph-one";

let dateInput = document.createElement("input");
dateInput.setAttribute("date");
dateInput.className = "date-input";

let dateButton = document.createElement("button");
dateButton.className = "date-button";

// second page

let titleSecondPage = document.createElement("h1");
headerOne.className = "title-secondPage";

let nameHeader = document.createElement("h3");
nameHeader.className = "name-header";

let nameInput = document.createElement("input");
nameInput.setAttribute("text");
nameInput.className = "name-input";

let emailHeader = document.createElement("h3");
emailHeader.className = "email-header";

let emailInput = document.createElement("input");
emailInput.setAttribute("email");
emailInput.className = "email-input";

let timeHeader = document.createElement("h3");
timeHeader.className = "time-header";

let timeInput = document.createElement("input");
timeInput.setAttribute("time");
timeInput.className = "time-input";

let participantsHeader = document.createElement("h3");
timeHeader.className = "participants-header";

let participants = document.querySelector("input");
participants.className = "participants-amount";

let detailsButton = document.createElement("button");
detailsButton.className = "details-button";

//  Third page

let titleThirdPage = document.createElement("h1");
headerOne.className = "title-ThirdPage";

let completedLink = document.createElement("a");
completedLink.className = "back-to-start";
/* 


 */
bookingButton.addEventListener("click", bookingSystem());

function bookingSystem() {
    if (bookingButton.clicked == true && dateInput.value.length != 0) {
        document.querySelector(".booking-container").style.display = "flex";
        bookingContainer.appendChild(headerFirstPage);
        bookingContainer.appendChild(paragraphOne);
        bookingContainer.appendChild(dateInput);
        bookingContainer.appendChild(dateButton);
    }
    return;

    function secondPage() {
        if (dateButton.clicked == true) {
            document.querySelector(".booking-container").style.display = "flex";
            bookingContainer.element.remove(headerFirstPage);
            bookingContainer.element.remove(paragraphOne);
            bookingContainer.element.remove(dateInput);
            bookingContainer.element.remove(dateButton);
            //
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
        }
        return;
    }

    function thirdPage() {
        if (
            detailsButton.clicked == true &&
            nameInput.value.length != 0 &&
            emailInput.value.length != 0 &&
            timeInput.value.length != 0
        ) {
            document.querySelector(".booking-container").style.display = "flex";
            bookingContainer.element.remove(titleSecondPage);
            bookingContainer.element.remove(nameHeader);
            bookingContainer.element.remove(nameInput);
            bookingContainer.element.remove(emailHeader);
            bookingContainer.element.remove(emailInput);
            bookingContainer.element.remove(timeHeader);
            bookingContainer.element.remove(timeInput);
            bookingContainer.element.remove(detailsButton);
            //
            bookingContainer.appendChild(titleThirdPage);
            bookingContainer.appendChild(completedLink);
            return;
        }
    }
}