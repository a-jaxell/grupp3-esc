import {RatingFilter} from "./RatingFilter.js";
import {TypeFilter} from "./TypeFilter.js";
import {LabelFilter} from "./LabelFilter.js"; 
import {StringFilter} from "./StringFilter.js";
import { NewRatingFilter } from "./NewRatingFilter/RatingFilter.js";


export class FilterCollection {
        constructor(list){
            this.list = list;
            this.filters = [
            
                new StringFilter(list),
                new TypeFilter(list),
                new LabelFilter(list),
                new NewRatingFilter(list),

            ];
        }

        // Tar en challenge som parameter och kör varje filter i .filters arrayen
        // och returnerar resultatet av dess filters egna match funktion på den challenge som ges till funktionen.
        
        challengeDoesMatch(challenge){
            return this.filters.every(filter => filter.challengeDoesMatch(challenge));
        }

        render() {
            const container = document.createElement('section');
            container.className = 'filters';

            const button = document.createElement('button');
            button.className = 'filters-toggle button secondary';
            button.innerText = 'Filter Challenges';

            const filterMenu = document.createElement('div');
            filterMenu.className = 'filter-menu';
            
            const crossX = document.createElement('div');
            crossX.className = 'cross crossX';
            const crossY = document.createElement('div');
            crossY.className = 'cross crossY';
            const crossBox = document.createElement('div');

            crossBox.append(crossY, crossX);
            crossBox.className = 'crossBox';
            filterMenu.append(crossBox);
            
            const filterMenuHeader = document.createElement('h3');
            filterMenuHeader.innerText = 'Filter Challenges';
        
            filterMenu.appendChild(filterMenuHeader);
            

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