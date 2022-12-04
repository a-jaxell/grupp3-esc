import { StarBar } from "./StarBar.js";

export class NewRatingFilter {
  constructor(listObj) {
    this.list = listObj;
    this.starCount = 5;
    this.minRating = 0; // init val
    this.maxRating = this.starCount; // init val
    this.minArr = [];
    this.maxArr = [];
  }

  challengeDoesMatch(challenge) {
    if (
      challenge.data.rating >= this.minRating &&
      challenge.data.rating <= this.maxRating
    ) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const starBar = new StarBar(this);
    const minStarBar = starBar.render(this.starCount, 'min', this.minArr);
    const maxStarBar = starBar.render(this.starCount, 'max', this.maxArr);

    const ctr = document.createElement('div');
    ctr.className = 'ratingFilter';
    
    ctr.appendChild(minStarBar);
    ctr.appendChild(maxStarBar);

    // const max = document.querySelector();
    // const min = document.querySelector();

    ctr.addEventListener("change", () => {
        
    })


    return ctr;
  }

}
