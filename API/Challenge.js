import { bookingModal } from "../BookingSystem/booking.js";
import { Stars } from "./Stars.js";

export class Challenge {
    constructor(data) {
        this.data = data;
    }
    render() {
        
        let item = document.createElement("li");
        item.setAttribute("class", "challenge-item");
        
        const typeIcon = document.createElement("i");
        
        const stars = new Stars();
        const starContainer = stars.render(this.data.rating);
        starContainer.className = "rating";
        
        item.innerHTML = `<img class="challenge-image" src="${this.data.image}" alt="">
        <h3 class="challenge-title">${this.data.title} - (${this.data.type})</h3>`
        
        item.appendChild(starContainer);
        
        item.innerHTML += `<small class="challenge-meta">${this.data.minParticipants}-${this.data.maxParticipants} participants</small>
        <p class="challenge-description">${this.data.description}</p>`
        
        let btnBookRoom = document.createElement("button");
        btnBookRoom.className = "button primary";
        btnBookRoom.setAttribute("id", this.data.id);
        btnBookRoom.innerHTML = "Book this room"; 
        
        btnBookRoom.addEventListener("click", () => {
            bookingModal(this.data);
        });
        
        item.appendChild(btnBookRoom);
        item.appendChild(typeIcon);
        
        typeIcon.className = this.data.type == "online" ? "fa solid fa-laptop" : "fa solid fa-house";
       
        return item;    
    }
}
