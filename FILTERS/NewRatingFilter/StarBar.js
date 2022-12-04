export class StarBar {
    constructor (ratingFilter){
        this.ratingFilter = ratingFilter;
    }
    render(starCount, name, arr) {
  
      const starBar = document.createElement('div');
      starBar.className = 'lineOfStars';
  
      for (let i = 0; i < starCount; i++) {
        const input = document.createElement("input"); //this element is hidden with css
        input.setAttribute('type', 'radio');
        input.setAttribute('name', [name]);
        input.setAttribute('id', [name], i);
        input.setAttribute('value', [i]);

        const label = document.createElement('label'); //visual representation of the star
        label.setAttribute('for', [name], i);
        label.setAttribute('value', [i]);

        starBar.append(label);
      }
      return starBar;
    }
  }