export class StarBar {
  render(count, ratingFilter, list, type) {
    this.ratingFilter = ratingFilter;
    this.list = list;
    this.arr = [];

    const starBar = document.createElement("div");
    starBar.className = "lineOfStars";

    for (let i = count; i > 0; i--) {
      const input = document.createElement("input"); //this element is hidden with css
      input.setAttribute("type", "radio");
      input.setAttribute("name", [type]);
      input.setAttribute("id", `${type}-${i}`);
      input.setAttribute("value", [i]);

      this.arr.push(input); //pushed here, so we can see which stars are checked

      const label = document.createElement("label"); //visual representation of the star
      label.setAttribute("for", `${type}-${i}`);
      label.setAttribute("id", `${type}-${i}`);

      label.addEventListener("click", () => {
        if (!input.checked) {
          console.log(input.value);
          this.ratingFilter.minRating = input.value;
          this.list.update();
          const findItem = this.arr.find(o => o.value === input.value);
          console.log(findItem.value);
        } 
        else {
          const findItem = this.arr.find(o => o.value === input.value);
          console.log(findItem.value);
        }
      });
      starBar.append(input, label);
    }
    return starBar;
  }
}

// starRating.addEventListener("change", () => { //EvenListener added to outer container.
//   let highestVal = 0;
//   for (let i = 0; i < amountOfStars; i++) {
//     if (
//       this.minStars[i].checked &&
//       this.minStars[i].value >= highestVal
//     ) {
//       highestVal = this.minStars[i].value;
//     }
//   }
//   this.minRating = highestVal;
//   this.list.update();
// });
