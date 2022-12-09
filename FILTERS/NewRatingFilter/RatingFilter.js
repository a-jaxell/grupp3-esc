import { StarBars as StarBars } from "./StarBars.js";

export class NewRatingFilter {
  constructor(listObj) {
    this.list = listObj;
    this.starCount = 5;
    this.minRating = 0; // init val
    this.maxRating = 5; // init val
    this.minValBeforeClick = 0;
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
    const starBars = new StarBars(this);
   
    const ctr = starBars.render();
    const ratingHeader = document.createElement('h4');
    ratingHeader.innerText = 'By Rating';

    const toSpan = document.createElement('span');
    toSpan.innerText = 'to'
    toSpan.className = 'rating-span';
    
    ctr.append(toSpan);
    ctr.append(ratingHeader);
    ctr.className = "ratingSection";
    ctr.addEventListener('change', ()=> {
      this.list.update();
    })
    return ctr;
  }
}
