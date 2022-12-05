import { StarBar } from "./StarBar.js";

export class NewRatingFilter {
  constructor(listObj) {
    this.list = listObj;
    this.starCount = 5;
    this.minRating = 0; // init val
    this.maxRating = this.starCount; // init val
    this.minValBeforeClick;
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
    const minStarBar = starBar.render(this.starCount, "min", this.minArr);
    const maxStarBar = starBar.render(this.starCount, "max", this.maxArr);
    
    
    
    const ctr = document.createElement("div");
    ctr.className = "ratingFilter";
    ctr.appendChild(minStarBar);
    ctr.appendChild(maxStarBar);
    let min = document.querySelectorAll(".starBar input[name='min']"); 

    ctr.addEventListener("click", () => {
      min = document.querySelectorAll(".starBar input[name='min']");
      
      min.forEach(input => {
        if (input.checked) {
          const inputVal = input.value;
          console.log(`new value: ${input.value}`);
          console.log(`old value: ${this.minValBeforeClick}`);
          if(inputVal === this.minValBeforeClick){
            console.log("You clicked on same button");
          } else {
            console.log("You clicked on a new button");
          }
          this.minValBeforeClick = inputVal;
        }
      })
    });
    
    return ctr;
  }
}





// console.log(this.currMin); 
// console.log(input);
// const inputVal = input.value;
// console.log(inputVal);
// this.list.update(); 
// this.currMin = inputVal