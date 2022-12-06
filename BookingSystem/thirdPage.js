import { bookingContainer } from "./booking.js";
// const bookingContainer = document.querySelector(".booking-container");

let titleThirdPage = document.createElement("h1");
titleThirdPage.className = "title-ThirdPage";
titleThirdPage.innerHTML = "Thank you for booking";

let completedLink = document.createElement("a");
completedLink.className = "back-to-start";
completedLink.innerText = "Back to booking";
completedLink.href = "https://www.google.com/";

export function thirdPage() {
    /* bg_container.removeChild(titleSecondPage);
    bg_container.removeChild(nameHeader);
  bg_container.removeChild(nameInput);
  bg_container.removeChild(emailHeader);
 bg_container.removeChild(emailInput);
  bg_container.removeChild(timeHeader);
bg_container.removeChild(timeInput);
bg_container.removeChild(participantsHeader);
bg_container.removeChild(participants);
  bg_container.removeChild(detailsButton); */
    bookingContainer.innerHTML = "";

    //
    bookingContainer.appendChild(titleThirdPage);
    bookingContainer.appendChild(completedLink);
}