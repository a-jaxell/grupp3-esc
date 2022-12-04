export class StarBar {
    constructor (ratingFilter){
        this.ratingFilter = ratingFilter;
    }
    render(starCount, name, arr) {
      const tempArr = [];
      const starBar = document.createElement('div');
      starBar.className = 'starBar';
  
      for (let i = 1; i <= starCount; i++) {
        const input = document.createElement("input"); //this element is hidden with css
        input.setAttribute('type', 'radio');
        input.setAttribute('name', [name]);
        input.setAttribute('id', [name]+i);
        input.setAttribute('value', [i]);
        input.checked = false;

        const label = document.createElement('label'); //visual representation of the star
        label.setAttribute('for', [name]+i);
        label.setAttribute('value', [i]);
        tempArr.push([input, label]);
      }
      tempArr.reverse();
      tempArr.forEach(elePair => {
        starBar.append(elePair[0], elePair[1]);
      })
      return starBar;
    }
  }