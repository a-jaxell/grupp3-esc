export class StarBar {
    constructor (ratingFilter){
        this.ratingFilter = ratingFilter;
        this.starCount = ratingFilter.starCount;
  
    }
    render(lblName) {
      const starBar = document.createElement('div');
      starBar.className = 'starBar';
  
      for (let i = this.starCount; i > 0; i--) {
        const input = document.createElement("input"); //this element is hidden with css
        input.setAttribute('type', 'radio');
        input.setAttribute('name', [lblName]);
        input.setAttribute('id', [lblName]+i);
        input.setAttribute('value', [i]);
        input.checked = false;

        const label = document.createElement('label'); //visual representation of the star
        label.setAttribute('for', [lblName]+i);
        label.setAttribute('value', [i]);

        label.addEventListener('click', (ev) =>  {
          if (lblName === 'max') {
            
            let maxInputs = document.querySelectorAll(`.starBar input[name=${lblName}]`);
            maxInputs.forEach(ele => {
              if (ele.value == i && ele.checked) {
                console.log('clicked on the same value.');
              }
              
            })
          }
        })
        starBar.append(input, label);
      }

      return starBar;
    }
  }
