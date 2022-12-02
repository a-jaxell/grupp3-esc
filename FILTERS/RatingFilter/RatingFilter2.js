import {StarBar} from "./StarBar.js";

export class RatingFilter2 {
  constructor(list) {
    //passing in a reference to the classList object that calls this constructor
    this.minRating = 0;
    this.maxRating = 5;
    this.list = list; //has update function
  }

  challengeDoesMatch(challenge) {
    //recieves a Challenge object.
    if (challenge.data.rating >= this.minRating && challenge.data.rating <= this.maxRating) {
      return true;
    } else {
      return false;
    }
  }

  setMinRating(val) {
    this.minRating = val;
  }
  getMinRating() {
    return this.minRating;
  }
  
  setMaxRating(val) {
    this.maxRating = val;
  }
  getMaxRating(){
    return this.maxRating;
  }

  render() {
    const ctr = document.createElement("div"); //The outer container, will be returned from this function
    ctr.className = "star-rating";
    const count = 5;

    const starBar = new StarBar();
    const minStarBar = starBar.render(count, this, this.list, "min");
    const maxStarBar = starBar.render(count, this, this.list, "max");
     // const maxStarBar = starbar.render(count, this.maxRating, this.list, "max");
     ctr.addEventListener('change', ()=> {
      this.list.update();
     })   
     ctr.append(minStarBar);
     ctr.append(maxStarBar);
     
    return ctr;
  }  

}
