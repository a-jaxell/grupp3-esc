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

    const ul = document.createElement("ul");
    ul.className = "challenge-list";

    const ratingFilter = new RatingFilter();
    const filterInterface = ratingFilter.render();

    ctr.append(h2);
    ctr.append(ul);
    ctr.append(filterInterface);

    for (let i = 0; i < challenges.length; i++) {
      if (ratingFilter.challengeDoesMatch(challenges[i])) {
        const li = challenges[i].render();
        ul.append(li);
      }
    }

    return ctr;
  }
}
