// import {RatingFilter} from "./RatingFilter";
// import {TypeFilter} from "./TypeFilter.js";
// import {LabelFilter} from "./LabelFilter.js"; 
// import {StringFilter} from "./StringFilter";

// export class Filters {
//         constructor(list){
//             this.list = list;
//             this.filters = [
//                 // new RatingFilter(list),
//                 // new StringFilter(list),
//                 // new TypeFilter(list),
//                 // new LabelFilter(list),
//             ];
//         }   
//         challengeMatch(challenge){

//             // Tar en challenge som parameter och kör varje filter i .filters arrayen
//             // och returnerar resultatet av dess filters egna match funktion på den challenge som ges till funktionen.

//             return this.filters.every(filter => filter.challengeMatch(challenge));
//         }

//         render() {

//             //Skapar en container och kallar på varje filters input egna rendering och lägger till dem i containern.

//             const container = document.createElement('div');
//             this.filter.forEach(filter => container.append(filter.render()));
//             return container;
//         }
    
// }