import { APIAdapter } from "./APIadapter.js";
import { RatingFilter } from "../FILTERS/RatingFilter.js";

export class ChallengeList {
  async render() {
    const api = new APIAdapter();

    //array challenges contains unique Challenge Objects from API. They contain unique challenge-data
    //and the ability to render() themselves, that is to create a DOM-representation of themselves.
    const challenges = await api.loadChallenges();

    challenges.forEach((element) => {
      console.log(element.data.rating);
    });

    // <section class="challenges">
    // <h2>Our challenges</h2>
    // <button class="">Filter challenges</button>
    // </section>

    const ctr = document.createElement("section");
    ctr.className = "challenges";

    const h2 = document.createElement("h2");
    h2.innerHTML = "Our challenges";

    this.ratingFilter = new RatingFilter(this);
    const filterInterface = this.ratingFilter.render();

    this.ul = document.createElement("ul");
    this.ul.className = "challenge-list";

    ctr.append(h2);
    ctr.append(filterInterface);
    ctr.append(this.ul);
    this.challenges = challenges;

    this.update();

    return ctr;
  }

  update() {
    this.ul.innerHTML = '';
    for (let i = 0; i < this.challenges.length; i++) {
      if (this.ratingFilter.challengeDoesMatch(this.challenges[i])) {
        const li = this.challenges[i].render();
        this.ul.append(li);
      }
    }
  }
}
