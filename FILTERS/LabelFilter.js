export class LabelFilter{
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