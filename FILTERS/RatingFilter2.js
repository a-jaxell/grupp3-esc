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
    inputB.setAttribute('value','5');
    const labelB = document.createElement('label');
    labelB.setAttribute('for','star-b');

    const inputC = document.createElement('input');
    inputC.setAttribute('type', 'radio');
    inputC.setAttribute('checked', 'true');
    inputC.setAttribute('name', 'stars');
    inputC.setAttribute('id','star-c');
    inputC.setAttribute('value','5');
    const labelC = document.createElement('label');
    labelC.setAttribute('for','star-c');

    starRating.append(inputA, labelA);
    starRating.append(inputB, labelB);
    starRating.append(inputC, labelC);

    return starRating;
  }
}
