export class RatingFilter {
  constructor(listObj) { //passing in a reference to the classList object that calls this constructor
    this.minRating = 0;
    this.list = listObj; 
  }

  challengeDoesMatch(challenge) { //recieves a Challenge object. 
    if (challenge.data.rating >= this.minRating) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    let ctr = document.createElement('div');
    let ratingTitle = document.createElement('h4');
    ratingTitle.innerHTML = 'By rating';
    ctr.className = 'ratingSection';
    
    const input = document.createElement('input');
    input.type = 'range';
    input.min = 0;
    input.max = 5;
    input.value = 0;

    ctr.append(ratingTitle, input);
    input.addEventListener('change', (ev) => {
      this.minRating = ev.target.value;
        this.list.update();
    });
    return ctr;
  }
}
















//https://medium.com/codex/create-a-star-rating-widget-with-css-in-9-steps-fe323352dba4

// Fördel med att använda radioknappar är att de har attributet value som vi kan sätta
// till en siffra och på så sätt kontrollera mot .rating i challenge

// Här ska en rating input renderas i DOM. förslag att använda radioknappar som blir
// dependent av varandra. dvs är nr 3 av 5 selected så tilldelas 1-3 samma styling.
// Skit i halva stjärnor.

// Kolla ifall challenge matchar emot rating given av user.
// document.querySelector... är placeholder i nuläget
// man skulle kunna skriva kod som lägger till id/class på just den stjärnan som clickas på samt
// tar bort på de andra
