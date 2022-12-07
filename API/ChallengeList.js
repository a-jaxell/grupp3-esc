import { APIAdapter } from "./APIadapter.js";
import { FilterCollection } from "../FILTERS/FilterCollection.js";

export class ChallengeList {
  async render() {
    const api = new APIAdapter();

    //array challenges contains unique Challenge Objects from API. They contain unique challenge-data
    //and the ability to render() themselves, that is to create a DOM-representation of themselves.
    const challenges = await api.loadChallenges();
    this.challenges = challenges;

    // <section class="challenges">
    // <h2>Our challenges</h2>
    // <button class="">Filter challenges</button>
    // </section>

    const ctr = document.createElement("section");
    ctr.className = "challenges";

    const h2 = document.createElement("h2");
    h2.innerHTML = "Our challenges";

    this.filterCollection = new FilterCollection(this);
    const filterInterface = this.filterCollection.render();
    
    this.ul = document.createElement("ul");
    this.ul.className = "challenge-list";

    ctr.append(h2);
    ctr.append(filterInterface);
    ctr.append(this.ul);
  
    this.update(); 
    return ctr;
  }
  update() {
    this.ul.innerHTML = '';
    for (let i = 0; i < this.challenges.length; i++) {
      if (this.filterCollection.challengeDoesMatch(this.challenges[i])) {
        const li = this.challenges[i].render();
        this.ul.append(li);
      }
    }
    if(!this.ul.firstChild){
      const li = document.createElement('li');
      li.append(document.createElement('h2'));
      li.firstChild.innerText = 'No matching challenges';
      li.className = 'no-match';
      this.ul.append(li)
    }
  }
}
