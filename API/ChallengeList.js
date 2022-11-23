import APIAdapter from "./APIadapter.js";

export default class ChallengeList {
    challenges;
    async render() {    
        const api = new APIAdapter();
        const challenges = await api.loadChallenges();
        
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