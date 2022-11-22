// <section class="challenges">
//     <h2>Popular challenges right now</h2>
//     <ul class="challenge-list">
//         <li class="challenge-item">
const cardContainer = document.querySelector(".challenges");

class ChallengeList {
    async render() {    
        const api = new APIAdapter();
        const challenges = await api.loadChallenges();
        
        const ul = document.createElement('ul');
        
        this.challenges = challenges;
        for (let i = 0; i < this.challenges.length; i++) {
            const li = this.challenges[i].render(); 
            ul.append(li);
        };
        cardContainer.appendChild(ul);
    };
}

const newList =  new ChallengeList();
newList.render();
// cardContainer.appendChild(ul);


class APIAdapter {
    async loadChallenges() {
        const res = await fetch("https://lernia-sjj-assignments.vercel.app/api/challenges");
        const data = await res.json(); //Får ut ett objekt som håller en array med x antal objekt

        // return data.challenges.map(data => new Challenge(data));
        
        return data.challenges.map(function(object){
             new Challenge(object)});
    };
};


class Challenge {
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
        KNAPP.innerHTML = "Book this room"  
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

