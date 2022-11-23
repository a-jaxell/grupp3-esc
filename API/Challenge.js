export default class Challenge {
    obj;
    constructor(apiObj) {
        this.obj = apiObj;
    }
    render() { //render = framställa 
                
        let item = document.createElement("li");
        
        let img = document.createElement("img");
        img.setAttribute("src", this.obj.image);
        img.className = "challenge-image"   

        let title = document.createElement("h3");
        title.className = "challenge-title";
        title.innerHTML = `${this.obj.title} (${this.obj.type})`;
        
        let rating = document.createElement("ul") // alvars funktion
        rating.className = "rating";    
        //tillfällig
        for(let i = 0; i < 5; i++){
          let star = document.createElement("li");
          star.className = "rating-star active";
          rating.appendChild(star);
        }
        //tillfälli 
        let participants = document.createElement("small");
        participants.className = "challenge-meta";
        participants.innerHTML = `${this.obj.minParticipants}-${this.obj.maxParticipants} participants`;
        
        let description = document.createElement("p");
        description.className = "challenge-description";
        description.innerHTML = this.obj.description    

        let KNAPP = document.createElement("button");
        KNAPP.className = "button primary";
        KNAPP.setAttribute("id", this.obj.id);
        KNAPP.innerHTML = "Book this room";
          
        item.setAttribute("class", "challenge-item");
        item.appendChild(img);
        item.appendChild(title);
        item.appendChild(rating);
        item.appendChild(participants);
        item.appendChild(description);
        item.appendChild(KNAPP);
        return item;
    };
};





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
