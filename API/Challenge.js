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
        //tillfällig


        
        // for(let i = 0; i < 5; i++){

        //   let star = document.createElement("li");
        //   star.className = "rating-star active";
        //   rating.appendChild(star);
        // }
        //tillfälli
    setStars();

    function setStars() {
    let stars = 5;

    let wholeStars;
    let halfStar;
    if (Number.isInteger(this.data.rating)) {
            wholeStars = this.data.rating;
            createStar(wholeStars, 'whole')

            stars -= wholeStars;
            createStar(stars);
    } 
    else {
        Math.floor(this.data.rating); 

        wholeStars = this.data.rating; 

        createStar(wholeStars, 'whole')
        halfStar = 1; 
        createStar(wholeStars, 'half')

        stars -= wholeStar - HalfStar; 
        createStar(stars);
    }
    
    function createStar(count, className){
        for (let i = 0; i < count; i++) {
            const star = document.createElement('li');
            star.classList.add('star', className);
            rating.appendChild(star);
        }
    }

   } 


       
        
        let participants = document.createElement("small");
        participants.className = "challenge-meta";
        participants.innerHTML = `${this.data.minParticipants}-${this.data.maxParticipants} participants`;
        
        let description = document.createElement("p");
        description.className = "challenge-description";
        description.innerHTML = this.data.description    

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
