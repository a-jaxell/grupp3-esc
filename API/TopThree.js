import { APIAdapter } from "./APIadapter.js";

export class TopThree{
    constructor(list){
        this.list = list;
        this.api = new APIAdapter();
    }    

    if(){

    }
    
    render() {
        const challenges = this.api.loadChallenges();
        console.log(challenges); 
    }
}
