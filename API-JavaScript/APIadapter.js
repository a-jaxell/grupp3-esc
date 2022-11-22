listInstance = new ChallengeList();
listanSomAlvarSkaFiltrera = listInstance.render();

class ChallengeList {
    async render() {    
        const api = new APIAdapter();
        const challenges = await api.loadChallenges();
         this.challenges = challenges;

         for (let i = 0; i < this.challenges.length; i++) {
            this.challenges[i].render();            
         };
    };
};


class APIAdapter {
    async loadChallenges() {
        const res = await fetch("https://lernia-sjj-assignments.vercel.app/api/challenges");
        const data = await res.json(); //Får ut ett objekt som håller en array med x antal objekt

        // return data.challenges.map(data => new Challenge(data));
        
        return data.challenges.map(function(element){
             new Challenge(element)});
    };
};


class Challenge {
    render() { //render = framställa 
    
        challengeArray.forEach(ele => {
            
          let item = document.createElement("li");
          
          let img = document.createElement("img");
          img.setAttribute("src", ele.image);
          img.className = "challenge-image";

          let title = document.createElement("h3");
          title.className = "challenge-title";
          title.innerHTML = `${ele.title} (${ele.type})`;
          
          let rating = document.createElement("ul") // alvars funktion
          rating.className = "rating";
    
          //tillfällig
          for(let i = 0; i < 5; i++){
            let star = document.createElement("li");
            star.className = "rating-star active";
            rating.appendChild(star);
          }
          //tillfällig

          let participants = document.createElement("small");
          participants.className = "challenge-meta";
          participants.innerHTML = `${ele.minParticipants}-${ele.maxParticipants} participants`;
          
          let description = document.createElement("p");
          description.className = "challenge-description";
          description.innerHTML = ele.description;

          let KNAPP = document.createElement("button");
          KNAPP.className = "button primary";
          KNAPP.setAttribute("id", ele.id);
          KNAPP.innerHTML = "Book this room";

          item.setAttribute("class", "challenge-item");
          item.appendChild(img);
          item.appendChild(title);
          item.appendChild(rating);
          item.appendChild(participants);
          item.appendChild(description);
          item.appendChild(KNAPP);
          return item;
      });
    };
};
