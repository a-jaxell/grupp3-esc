export class RatingFilter2 {
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

    const starRating = document.createElement('div');
    starRating.className = 'star-rating';

    const inputA  = document.createElement('input');
    inputA.setAttribute('type', 'radio');
    inputA.setAttribute('name', 'stars');
    inputA.setAttribute('id','star-a');
    inputA.setAttribute('value','5');
    const labelA = document.createElement('label');
    labelA.setAttribute('for','star-a');

    const inputB = document.createElement('input');
    inputB.setAttribute('type', 'radio');
    inputB.setAttribute('name', 'stars');
    inputB.setAttribute('id','star-b');
    inputB.setAttribute('value','4');
    const labelB = document.createElement('label');
    labelB.setAttribute('for','star-b');

    const inputC = document.createElement('input');
    inputC.setAttribute('type', 'radio');
    inputC.setAttribute('name', 'stars');
    inputC.setAttribute('id','star-c');
    inputC.setAttribute('value','3');
    const labelC = document.createElement('label');
    labelC.setAttribute('for','star-c');

    const inputD = document.createElement('input');
    inputD.setAttribute('type', 'radio');
    inputD.setAttribute('name', 'stars');
    inputD.setAttribute('id','star-d');
    inputD.setAttribute('value','2');
    const labelD = document.createElement('label');
    labelD.setAttribute('for','star-d');

    const inputE = document.createElement('input');
    inputE.setAttribute('type', 'radio');
    inputE.setAttribute('name', 'stars');
    inputE.setAttribute('id','star-e');
    inputE.setAttribute('value','1');
    const labelE = document.createElement('label');
    labelE.setAttribute('for','star-e');

    starRating.append(inputA, labelA);
    starRating.append(inputB, labelB);
    starRating.append(inputC, labelC);
    starRating.append(inputD, labelD);
    starRating.append(inputE, labelE);

    const checkedStars = [inputE, inputD, inputC, inputB, inputA]; 
    starRating.addEventListener('change', ()=> {
        let highestVal = 0;
        for (let i = 0 ; i < checkedStars.length; i++) {
            if (checkedStars[i].checked && checkedStars[i].value >= highestVal){
                highestVal = checkedStars[i].value;
            }
        }
        this.minRating = highestVal;
        this.list.update();
    });

    

    // render() {
    //     const input = document.createElement('input');
    //     input.type = 'range';
    //     input.min = 0;
    //     input.max = 5;
    //     input.value = 0;
    //     input.addEventListener('change', (ev) => {
    //         this.minRating = ev.target.value;
    //         this.list.update();
    //     });
    //     return input;
    //   }
    


    return starRating;
  }
  
}
