export class StarBar {
    constructor (ratingFilter){
        this.ratingFilter = ratingFilter;
        this.starCount = ratingFilter.starCount;
  
    }
    render(sName) {
      const starBar = document.createElement('div');
      starBar.classList= 'starBar', sName;
  
      for (let i = this.starCount; i > 0; i--) {
        const input = document.createElement("input"); //this element is hidden with css
        input.setAttribute('type', 'radio');
        input.setAttribute('name', [sName]);
        input.setAttribute('id', [sName]+i);
        input.setAttribute('value', [i]);
        input.checked = false;

        const label = document.createElement('label'); //visual representation of the star
        label.setAttribute('for', [sName]+i);
        label.setAttribute('value', [i]);

        label.addEventListener('click', (ev) =>  {
          if (sName === 'max') {
            
            
            let maxInputs = document.querySelectorAll(`.starBar input[name=${sName}]`);
            for (let j = 0; j < maxInputs.length; j++) {
              if (maxInputs[j].value == i && maxInputs[j].checked) {
                console.log('clicked on the same value.');
                document.querySelector('.starBar input[value = "5"]').checked = true;

                if (j == 0) {
                  maxInputs[j].checked = false;
                }
              }
            }
          }
        })
        starBar.append(input, label);
      }
      
      return starBar;
    }
  }

  // maxInputs.forEach(ele => {
  //   if (ele.value == i && ele.checked) {
  //     console.log('clicked on the same value.');
  //   }
    
  // })