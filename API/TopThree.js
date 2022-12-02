import { APIAdapter } from "./APIadapter.js";

export class TopThree{
    constructor(list){
        this.list = list;
        this.api = new APIAdapter();
    }    
    
    async topThree(){
        const challenges = await this.api.loadChallenges();
        challenges.sort((a, b) => b.data.rating - a.data.rating);
        for(let i = 0; i < 3; i++){
            document.querySelector('.challenges').append(challenges[i].render());
        } 
    } 
    }
    
