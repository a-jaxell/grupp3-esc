import { bookingContainer } from "./booking.js";
// const bookingContainer = document.querySelector(".booking-container");

let titleThirdPage = document.createElement("h1");
titleThirdPage.className = "title-ThirdPage";
titleThirdPage.innerHTML = "Thank you for booking";

let completedLink = document.createElement("a");
completedLink.className = "back-to-start";
completedLink.innerText = "Back to booking";
completedLink.href = "../challenges.html";

export function thirdPage() {
    bookingContainer.innerHTML = "";

    bookingContainer.appendChild(titleThirdPage);
    bookingContainer.appendChild(completedLink);
}