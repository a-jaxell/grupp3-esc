import Challenge from "./Challenge.js";

export default class APIAdapter {
    async loadChallenges() {
        const res = await fetch("https://lernia-sjj-assignments.vercel.app/api/challenges");
        const data = await res.json(); //Får ut ett objekt som håller en array med x antal objekt

        return data.challenges.map(data => new Challenge(data));
        
        // return data.challenges.map(function(object){
        //      new Challenge(object)});
    };
};


