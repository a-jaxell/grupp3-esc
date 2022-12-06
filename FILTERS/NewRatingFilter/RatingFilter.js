import { StarBars as StarBars } from "./StarBars.js";

export class NewRatingFilter {
  constructor(listObj) {
    this.list = listObj;
    this.starCount = 5;
    this.minRating = 0; // init val
    this.maxRating = this.starCount; // init val
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
    const twoBars = starBars.render();

    const ctr = document.createElement("div");
    ctr.className = "ratingSection";
    ctr.appendChild(twoBars);
    ctr.addEventListener('change', ()=> {
      this.list.update();
    })
    return ctr;
  }
}
