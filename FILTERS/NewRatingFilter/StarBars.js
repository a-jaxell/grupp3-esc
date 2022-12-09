export class StarBars {
  constructor(ratingFilter) {
    this.ratingFilter = ratingFilter;
    this.starCount = ratingFilter.starCount;
  }

  render() {
    const starCtr = document.createElement("div");
    const starBar = ["min", "max"]; //create 2 bars

    for (let b = 0; b < starBar.length; b++) {
      const tempBar = document.createElement("div");
      tempBar.classList.add("starBar", starBar[b]);

      for (let i = this.starCount; i > 0; i--) {
        const input = document.createElement("input"); //this element is hidden with css
        input.setAttribute("type", "radio");
        input.setAttribute("name", starBar[b]);
        input.setAttribute("id", starBar[b] + [i]);
        input.setAttribute("value", [i]);

        const label = document.createElement("label"); //visual representation of the star
        label.setAttribute("for", starBar[b] + [i]);
        label.setAttribute("value", [i]);
        if ([b] == 1 && i == 5) {
          input.checked = true; 
          this.ratingFilter.maxRating = 5;
        }

        //   input.addEventListener('change', (ev) => {

        if (starBar[b] == "min") {
          label.addEventListener("click", () => {
            
            label.setAttribute("for", starBar[b] + [i]); //if the label was decremented from the label.setAttribute below, then it is incremented here again if the user wants to reclick value
            label.setAttribute("value", [i]);
            this.ratingFilter.minRating = i;

            let minInputs = document.querySelectorAll(".starBar input[name='min'");
            let maxInputs = document.querySelectorAll(".starBar input[name='max']");

            maxInputs.forEach(maxInput => {
      
    
              if (this.ratingFilter.minRating > this.ratingFilter.maxRating) {
                document.querySelector(`.starBar.max input[value='${i}']`).checked = true;
                this.ratingFilter.maxRating = [i]
              }
            })
            

            for (let m = 0; m < minInputs.length; m++) {
              if (minInputs[m].value == i && minInputs[m].checked) {

                label.setAttribute("for", starBar[b] + [i - 1]); //changing label input target, so that if user clicks again
                label.setAttribute("value", [i - 1]);
                this.ratingFilter.minRating = i -1;

                maxInputs.forEach(maxInput => {

                  if (this.ratingFilter.minRating > this.ratingFilter.maxRating) {
                    document.querySelector(`.starBar.max input[value='${i-1}']`).checked = true;
                    this.ratingFilter.maxRating = [i - 1]
                  }
                })
              }
            }
          });



        } else if (starBar[b] == "max") {
          label.addEventListener("click", () => {
            label.setAttribute("for", starBar[b] + [i]); //if the label was decremented from the label.setAttribute below, then it is incremented here again if the user wants to reclick value
            this.ratingFilter.maxRating = [i]
            
            let maxInputs = document.querySelectorAll(".starBar input[name='max']");
            let minInputs = document.querySelectorAll(".starBar input[name='min'");

            minInputs.forEach(minInput => {
              if (this.ratingFilter.minRating > this.ratingFilter.maxRating) {
                document.querySelector(`.starBar.min input[value='${i}']`).checked = true;
                this.ratingFilter.minRating = [i]
              }
            })

            for (let j = 0; j < maxInputs.length; j++) {
              if (maxInputs[j].value == i && maxInputs[j].checked) {

                  label.setAttribute("for", starBar[b] + [i - 1]); //changing label input target, so that if user clicks again
                  this.ratingFilter.maxRating = [i - 1]

                  if (this.ratingFilter.minRating > this.ratingFilter.maxRating) {
                    document.querySelector(`.starBar.min input[value='${i-1}']`).checked = true;
                    this.ratingFilter.minRating = [i - 1]
                  }
                }
              }   
          });
        }
        
        tempBar.append(input, label);
      }
      
      starCtr.append(tempBar);
    }
    return starCtr;
  }


}
