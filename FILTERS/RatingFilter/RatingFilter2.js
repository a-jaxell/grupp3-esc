import {createLineOfStars} from "./functions/createLineOfStars.js";


export class RatingFilter2 {
  minStars = [];
  maxStars = [];


  constructor(listObj) {
    //passing in a reference to the classList object that calls this constructor
    this.minRating = 0;
    this.list = listObj;
  }

  challengeDoesMatch(challenge) {
    //recieves a Challenge object.
    if (challenge.data.rating >= this.minRating) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const starRating = document.createElement("div"); //The outer container, will be returned from this function
    starRating.className = "star-rating";

    const amountOfStars = 5;

    createLineOfStars(starRating ,this.minStars, 'minStar', amountOfStars);
    // createLineOfStars(this.maxStars, 'maxStar', amountOfStars);

    starRating.addEventListener("change", () => { //EvenListener added to outer container.
      let highestVal = 0;
      for (let i = 0; i < amountOfStars; i++) {
        if (
          this.minStars[i].checked &&
          this.minStars[i].value >= highestVal
        ) {
          highestVal = this.minStars[i].value;
        }
      }
      this.minRating = highestVal;
      this.list.update();
    });

    return starRating;
  }  
}
