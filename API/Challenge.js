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
        
        let rating = document.createElement("ul") // alvars funktion
        rating.className = "rating";    

        let participants = document.createElement("small");
        participants.className = "challenge-meta";
        participants.innerHTML = `${this.data.minParticipants}-${this.data.maxParticipants} participants`;
        
        let description = document.createElement("p");
        description.className = "challenge-description";
        description.innerHTML = this.data.description    


        let stars = 5;
        let wholeStars;
        let halfStar;
    
        if (Number.isInteger(this.data.rating)) {
          wholeStars = this.data.rating;
          createStar(wholeStars, 'fa-solid', 'fa-star');
    
          stars -= wholeStars;
          createStar(stars, 'fa-regular', 'fa-star');
        } else {
          const roundedRating = Math.floor(this.data.rating);
    
          wholeStars = roundedRating;
    
          createStar(wholeStars, 'fa-solid', 'fa-star');
          halfStar = 1;
          createStar(halfStar, 'fa-solid', 'fa-star-half-stroke');
    
          stars -= roundedRating + halfStar;
          createStar(stars, 'fa-regular', 'fa-star');
        }
        //<i class="fa-solid fa-star"></i>
        function createStar(count, class1, class2) {
          for (let i = 0; i < count; i++) {
            const star = document.createElement("li");
            star.classList.add(class1, class2);
            rating.appendChild(star);
          }
        }
    

        let KNAPP = document.createElement("button");
        KNAPP.className = "button primary";
        KNAPP.setAttribute("id", this.data.id);
        KNAPP.innerHTML = "Book this room";
          
        item.setAttribute("class", "challenge-item");
        item.appendChild(img);
        item.appendChild(title);
        item.appendChild(rating);
        item.appendChild(participants);
        item.appendChild(description);
        item.appendChild(KNAPP);
    
        return item;
    }
    


}
