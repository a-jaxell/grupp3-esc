// import { bookingModal } from "../BookingSystem/booking.js";
import { Stars } from "./Stars.js";

export class Challenge {
    constructor(data) {
        this.data = data;
    }
    render() {
        //render = framställa
        let item = document.createElement("li");

        let img = document.createElement("img");
        img.setAttribute("src", this.data.image);
        img.className = "challenge-image";

        let title = document.createElement("h3");
        title.className = "challenge-title";
        title.innerHTML = `${this.data.title} (${this.data.type})`;

        let participants = document.createElement("small");
        participants.className = "challenge-meta";
        participants.innerHTML = `${this.data.minParticipants}-${this.data.maxParticipants} participants`;

        let description = document.createElement("p");
        description.className = "challenge-description";
        description.innerHTML = this.data.description;

        let btnBookRoom = document.createElement("button");
        btnBookRoom.className = "button primary";
        btnBookRoom.setAttribute("id", this.data.id);
        btnBookRoom.innerHTML = "Book this room";

        btnBookRoom.addEventListener("click", () => {
            bookingModal(this.data);
        });

        const stars = new Stars();
        const starContainer = stars.render(this.data.rating);
        starContainer.className = "rating";

        item.setAttribute("class", "challenge-item");
        item.appendChild(img);
        item.appendChild(title);
        item.appendChild(starContainer);
        item.appendChild(participants);
        item.appendChild(description);
        item.appendChild(btnBookRoom);
        return item;
    }
}

/* function addCard(challengeArray) { 
    
    challengeArray.forEach(ele => {
        
        let dom =`<li class="challenge-item">
        <img class="challenge-image" src="${ele.image}" alt="">
        <h3 class="challenge-title">${ele.title}</h3>
        <ul class="rating">${ele.rating}</ul>
        <small class="challenge-meta">${ele.participants}</small>
                    <p class="challenge-description">${ele.description}</p>
                    <button id="${ele.id}" class="button primary">Book this room</button>
                  </li>`
        ul.appendChild(dom);
    })
} */