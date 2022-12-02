import { APIAdapter } from "./APIadapter.js";

export class TopThree{
    constructor(list){
        this.list = list;
        this.api = new APIAdapter();
    }    
    
    topThree(challenge){
        const challenges = this.api.loadChallenges();
        challenges.sort((a, b))
    }

    render(challenge) {
        console.log(challenges);

        this[challenge].data.rating
    }
}
