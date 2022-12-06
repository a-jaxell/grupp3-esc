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

        //   input.addEventListener('change', (ev) => {
        if (starBar[b] == "min") {
          label.addEventListener("click", () => this.minBarListener());
        } else if (starBar[b] == "max") {
          label.addEventListener("click", () => this.maxBarListener(i));
        }
        tempBar.append(input, label);
      }
      starCtr.append(tempBar);
    }
    return starCtr;
  }

  minBarListener() {
    // let minInputs = document.querySelectorAll();
    console.log("click");
  }

  maxBarListener(i) {
    console.log(i);
    
    let maxInputs = document.querySelectorAll(".starBar input[name='max']");
    for (let j = 0; j < maxInputs.length; j++) {
      if (maxInputs[j].value == i && maxInputs[j].checked) {
        console.log("clicked on the same value.");
        document.querySelector('.starBar.max input[value = "1"]').checked = true;
        this.ratingFilter.list.update();

        if (j == 0) {
          maxInputs[j].checked = false;
        }
      }
    }
  }
}
