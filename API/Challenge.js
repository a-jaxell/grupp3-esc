import {Stars} from './Stars.js'

export class Challenge {
    constructor(data) {
        this.data = data;
    }
    render() { //render = framställa 
                
        let item = document.createElement("li");
        
        let img = document.createElement("img");
        img.setAttribute("src", this.data.image);
        img.className = "challenge-image"   

        let title = document.createElement("h3");
        title.className = "challenge-title";
        title.innerHTML = `${this.data.title} (${this.data.type})`;
        
        
        let participants = document.createElement("small");
        participants.className = "challenge-meta";
        participants.innerHTML = `${this.data.minParticipants}-${this.data.maxParticipants} participants`;
        
        let description = document.createElement("p");
        description.className = "challenge-description";
        description.innerHTML = this.data.description    
       
        const stars = new Stars(); 
        const starContainer = stars.render(this.data.rating);
        starContainer.className = "rating"; 
         
    
        let challengeBtn = document.createElement("button");
        challengeBtn.className = "button primary";
        challengeBtn.setAttribute("id", this.data.id);
        challengeBtn.innerHTML = "Book this room";
          
        item.setAttribute("class", "challenge-item");
        item.appendChild(img);
        item.appendChild(title);
        item.appendChild(starContainer);
        item.appendChild(participants);
        item.appendChild(description);
        item.appendChild(challengeBtn);
    
        return item;
    }
    


}
