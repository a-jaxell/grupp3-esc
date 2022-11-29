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

    createLineOfStars(this.minStars, 'minStar', amountOfStars);
    // createLineOfStars(this.maxStars, 'maxStar', amountOfStars);

    function createLineOfStars(arr, id, count) {
      const lineOfStars = document.createElement("div");
      lineOfStars.className = 'lineOfStars';
      for (let i = count; i > 0; i--) {

        const input = document.createElement("input"); //this element is hidden with css
        input.setAttribute("type", "radio");
        input.setAttribute("name", "stars");
        input.setAttribute("id", `${id}-${i}`);
        input.setAttribute("value", [i]);
        arr.push(input); //pushed here, so we can see which stars are checked

        const label = document.createElement("label"); //visual representation of the star
        label.setAttribute("for", `${id}-${i}`);

        lineOfStars.append(input, label);
      }
      starRating.append(lineOfStars); //Appended to outer container
    }



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
