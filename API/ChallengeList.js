import APIAdapter from "./APIadapter.js";

export default class ChallengeList {
    challenges;
    filters;

    async render() {    
        const api = new APIAdapter();
        this.challenges = await api.loadChallenges();

        this.filters = new Filters(this);



        const ul = document.createElement('ul');
        
        // for (let i = 0; i < this.challenges.length; i++) {
        //     const li = this.challenges[i].render(); 
        //     ul.append(li);
        // };
        // return ul;

        challenges.forEach(challenge => ul.append(challenge.render()));
        return ul;
    };
};