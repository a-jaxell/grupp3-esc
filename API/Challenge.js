import { bookingModal } from "../BookingSystem/booking.js";
import { Stars } from "./Stars.js";
import String from "./String.js";

export class Challenge {
  constructor(data) {
    this.data = data;

    const maxChars = 30;
    this.processedDescription = String.abbreviateTo(
      maxChars,
      this.data.description
    );
  }
  render() {
    let item = document.createElement("li");
    item.setAttribute("class", "challenge-item");

    const stars = new Stars();
    const starContainer = stars.render(this.data.rating);
    starContainer.className = "rating";

    item.innerHTML = `<img class="challenge-image" src="${this.data.image}" alt="">
                         <h3 class="challenge-title">${this.data.title}</h3>`;

    item.appendChild(starContainer);

    item.innerHTML += `<small class="challenge-meta">${this.data.minParticipants}-${this.data.maxParticipants} participants</small>
                          <p class="challenge-description">${this.processedDescription}</p>`;

    let btnBookRoom = document.createElement("button");
    btnBookRoom.className = "button primary";
    btnBookRoom.setAttribute("id", this.data.id);
    btnBookRoom.innerHTML = "Book this room";

    btnBookRoom.addEventListener("click", () => {
      bookingModal(this.data);
    });

    item.addEventListener("mouseover", mouseOver, true);
    item.addEventListener("mouseout", mouseOut, true);

    function mouseOver() {
      //do something
      document.getElementsByClassName("challenge-item").style.boxShadow =
        "0 0 3em rgba(0, 0, 0, 0.4)";
    }

    function mouseOut() {
      //do something
      document.getElementsByClassName("challenge-item").style.boxShadow =
        "0 0 1em rgba(0, 0, 0, 0.2)";
    }

    item.appendChild(btnBookRoom);
    return item;
  }
}
