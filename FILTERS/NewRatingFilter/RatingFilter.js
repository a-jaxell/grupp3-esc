import { StarBar } from "./StarBar";

export class NewRatingFilter {
  constructor(listObj) {
    this.list = listObj;
    this.minRating = 0; // init val
    this.maxRating = 0; // init val
    this.starCount = 5;
    this.minArr;
    this.maxArr;
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
    const minStarBar = starBar.render(starCount, 'min', this.minArr);
    const maxStarBar = starBar.render(starCount, 'max', this.maxArr);

    const ctr = document.createElement('div');
    ctr.className = 'ratingFilter';
    
    ctr.appendChild(minStarBar);
    ctr.appendChild(maxStarBar);

    const max = document.querySelector();
    const min = document.querySelector();

    return ctr;
  }

}
