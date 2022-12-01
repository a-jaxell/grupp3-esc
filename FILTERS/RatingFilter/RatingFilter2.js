import {StarBar} from "./StarBar.js";

export class RatingFilter2 {
  constructor(list) {
    //passing in a reference to the classList object that calls this constructor
    this.minRating = 0;
    this.maxRating = 0;
    this.list = list; //has update function
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
    const ctr = document.createElement("div"); //The outer container, will be returned from this function
    ctr.className = "star-rating";
    const count = 5;

    const starBar = new StarBar();
    const minStarBar = starBar.render(count, this.minRating, this.list, "min");
     // const maxStarBar = starbar.render(count, this.maxRating, this.list, "max");
        
     ctr.append(minStarBar);
    return ctr;
  }  
}
