class Filters {
        constructor(list){
            this.list = list;
            this.filters = [
                new RatingFilter(list),
                new StringFilter(list),
                new TypeFilter(list),
                new LabelFilter(list)
            ];
        }   
        challengeMatch(challenge){

            // Tar en challenge som parameter och kör varje filter i .filters arrayen
            // och returnerar resultatet av dess filters egna match funktion på den challenge som ges till funktionen.

            return this.filters.every(filter => filter.challengeMatch(challenge));
        }

        render() {

            //Skapar en container och kallar på varje filters input egna rendering och lägger till dem i containern.

            const container = document.createElement('div');
            this.filter.forEach(filter => container.append(filter.render()));
            return container;
        }
    
}

class RatingFilter{
    constructor(list){
        this.list = list;
    }

    challengeMatch(challenge){

        // Kolla ifall challenge matchar emot rating given av user.
        // document.querySelector... är placeholder i nuläget
        // man skulle kunna skriva kod som lägger till id/class på just den stjärnan som clickas på samt
        // tar bort på de andra  

        if(challenge.data.rating >= document.querySelector('#ratingMin').value && challenge.data.rating <= document.querySelector('#ratingMax').value){
            return true;
        } else {
            return false;
        }
    }

    render(){
        //https://medium.com/codex/create-a-star-rating-widget-with-css-in-9-steps-fe323352dba4

        // Fördel med att använda radioknappar är att de har attributet value som vi kan sätta
        // till en siffra och på så sätt kontrollera mot .rating i challenge

        // Här ska en rating input renderas i DOM. förslag att använda radioknappar som blir 
        // dependent av varandra. dvs är nr 3 av 5 selected så tilldelas 1-3 samma styling. 
        // Skit i halva stjärnor.
    }

}

class StringFilter{
    constructor(list){
        this.list = list;
        this.filterText = '';
    }

    challengeMatch(challenge){

        // I nuläget matchas hela textsträngen sparad i this.filterText
        // En uppgradering kan vara att ändra koden till att dela upp hela textsträngen i
        // ord och spara dem i en array och sen matcha varje element i arrayen mot
        // titel description
        // case sensitive
        // .toUpperCase // .toLowerCase

        // använda sig av .slice

        if(challenge.data.title.includes(this.filterText) || challenge.data.description.includes(this.filterText)){
            return true;
        } else {
            return false;    
        }
    }

    render() {
        // Här ska ett inputfält renderas och skapa ett inputfält som vars värde 
        // lagras i .filterText
        
        const input = document.createElement('input');
        input.type = 'text';
        input.addEventListener('keyup', (event) => {
            this.filterText = event.target.value;
            this.list.update();
        });
    }
}

class TypeFilter{
    constructor(list){
        this.list = list;
    }

    challengeMatch(challenge){
        if(challenge.data.type){
            return true;
        }
    }
    
    render(){
        const inputOnline = document.createElement('input');
        const inputOnsite = document.createElement('input');

        inputOnline.type = 'checkbox';
        inputOnsite.type = 'checkbox';

        inputOnline.isChecked = true;
        inputOnsite.isChecked = true;


        // .isChecked returnerar true/false om boxen är tickad

        inputOnline.addEventListener('change', (event) => {
            return event.target.isChecked;
                });
        inputOnsite.addEventListener('change', (event) => {
            return event.target.isChecked;
        })
    }
}

class LabelFilter{
    constructor(list){
        this.list = list;
        this.tempData = [];
    }

    // TODO: kolla hur man kan skriva om det med Array.filter();
    // Ska skriva ut alla unikaLabels som finns i datan

    challengeMatch(){

        // Välja alla tagg-knappar
        // Kolla ifall de är nedtryckta
        // Visa de rum som matchar nedtryckta knappar
    }


    getLabels(allChallenges){         

            for(i = 0; allChallenges.length; i++){
                     
                    allChallenges[i].labels.forEach( element => {
                        if(!tempData.includes(element)){
                            tempData.push(element)
                        }
                    })
            }
    }

    render(){
        
        const labelSection = document.createElement('div');
        labelSection.className = 'labelSection';
        
        const labelButton = document.createElement('span');
        
        this.tempData.forEach(element => {
            labelSection.append(labelButton)
            labelButton.innerHtml = element;
        })
           
        // Här ska tagg-knappar renderas och få eventlisteners.
        // Det ska finnas en uppsättning knappar som är unika. 
        // är de nedtryckta ska de visas som grå.
        // Vi kanske skulle kunna använda oss av radioknappar för detta. 

    }
}