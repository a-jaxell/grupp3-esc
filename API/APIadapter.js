import {Challenge} from "./Challenge.js";

export class APIAdapter {
    async loadChallenges() {
        const res = await fetch('https://lernia-sjj-assignments.vercel.app/api/challenges');
        const obj = await res.json(); //obj > arr > obj

        //for every challengeData elemenent in challenges array, we create a new
        //card-instance and send that data there to be saved and used for rendering an unique card.
        return obj.challenges.map(challengeData => new Challenge(challengeData)); 
    }
}


