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
    
        // itererar genom den temporära Arrayen och skapar en 
        // knapp med texten i array[i]
        // Kanske går att förenkla med array metoder.

        for(let i = 0; i <tempData.length; i++){
            const labelButton = document.createElement('span');
            labelSection.append(labelButton);
            labelButton.innerText = tempData[i];
        };
         
        // Här ska tagg-knappar renderas och få eventlisteners.
        // Det ska finnas en uppsättning knappar som är unika. 
        // är de nedtryckta ska de visas som grå.
        // Vi kanske skulle kunna använda oss av radioknappar för detta. 

    }
}