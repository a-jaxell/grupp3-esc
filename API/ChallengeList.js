import APIAdapter from "./APIadapter.js";
import RatingFilter2 from "../FILTERS/RatingFilter2.js";

export default class ChallengeList {
    challenges;
    ratingFilter2;

    async render() {    
        const api = new APIAdapter();
        const challenges = await api.loadChallenges();

        const container = document.createElement('div');

        this.ratingFilter2 = new RatingFilter2(this);
        const filterInterface = this.ratingFilter2.render();
        container.append(filterInterface);


        this.ul = document.createElement('ul');
        container.append(this.ul);

        this.challenges = challenges;
        this.update();
        return container;
    };

    update() {
        this.ul.innerHTML = '';
        for (let i = 0; i < this.challenges.length; i++) {
            if (this.ratingFilter2.challengeMatch(this.challenges[i])) {
              const li = this.challenges[i].render();
              this.ul.append(li);
            }
          }
      }
}