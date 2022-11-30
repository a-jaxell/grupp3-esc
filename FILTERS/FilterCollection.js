import {RatingFilter} from "./RatingFilter.js";
import {TypeFilter} from "./TypeFilter.js";
// import {LabelFilter} from "./LabelFilter.js"; 
// import {StringFilter} from "./StringFilter";

export class FilterCollection {
        constructor(list){
            this.list = list;
            this.filters = [
                new RatingFilter(list),
                // new StringFilter(list),
                new TypeFilter(list),
                // new LabelFilter(list),
            ];
        }   
        challengeDoesMatch(challenge){

            // Tar en challenge som parameter och kör varje filter i .filters arrayen
            // och returnerar resultatet av dess filters egna match funktion på den challenge som ges till funktionen.

            return this.filters.every(filter => filter.challengeDoesMatch(challenge));
        }

        render() {
            const container = document.createElement('section');
            container.className = 'filters';

            const button = document.createElement('button');
            button.className = 'filters-toggle';
            button.innerText = 'Filter Challenges';

            const filterMenu = document.createElement('div');
            filterMenu.className = 'filter-menu';

/*             document.querySelector('.main-nav-toggle').addEventListener('click', () => {
                document.querySelector('.main-nav').classList.toggle('open');
            }) */
            
            //Kallar på varje filters egna rendering och lägger till dem i containern.
            this.filters.forEach(filter => filterMenu.append(filter.render()));
            container.append(button);
            container.append(filterMenu);

            return container;
        }

        renderFilterMenu() {
        }
    
}