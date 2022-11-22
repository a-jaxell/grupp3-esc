import { APIAdapter, Challenge, ChallengeList } from '/API-Javascript/APIadapter.js';



class Filter {
    
    // ta in data
    // utföra en funktion på hela arrayen som returnerar de som matchar
    // returnera matchande data
    // Innehåller samtliga filtrerings funktioner

    // nånting = new FilterRating();
    // nånting.filteRating(  const api = new APIAdapter();   );

}

class FilterRating{
    
    // indata genereras , returnerad data från API är en array

    async filterRating(){

        const api = new APIAdapter();                               
        const challenges = await api.loadChallenges();              
        let tempData = [];

            for(i = 0; i < challenges.length; i++){
                if(challenges[i].rating >= minRating && challenges[i].rating <= maxRating){
                    tempData.push(challenges[i]);
                }

                return tempData;
            }
    }
}

class FilterType{

    // returnerar true / false beroende på värde 

    async filterType(type){ 

        const api = new APIadapter();                       
        const challenges = await api.loadChallenges(); 

        challenges.forEach(type => type === challenges.type ? true : false);
    }
}

class FilterTitle{
    
    // filtrera sträng mot titel och Description.

    async filterTitle(string){

        const api = new APIadapter();                       
        const challenges = await api.loadChallenges(); 
        let tempData = [];

        // tempdata = challenges.map( function 
        //     challenges.title.includes(string)
        // });

    }
}
class FilterLabels{
    
    // kollar ifall en challenge har en matchande tagg emot tagknapparna
    
    async filterLabels(){

        const labels = new GetLabels();

        const api = new APIadapter();
        const challenges = await api.loadChallenges();
        let tempArray = [];

        // INTE FÄRDIG
        
        if((await labels.getLabels()).map(ele => challenges.labels.forEach(challenges.labels.includes(ele)))){
            tempArray.push()
        }

    }

}

class GetLabels{
    
    //itererar genom alla labels i alla challenges
    //lägger till dem i en ny array om de inte finns i den redan
    // TODO: kolla hur man kan skriva om det med Array.filter();
    
    async getLabels(){                      


        const api = new APIadapter();                       
        const challenges = await api.loadChallenges(); 
        let tempData = [];
            for(i = 0; challenges.length; i++){

                    for(i=0; i < challenges.labels.length; i++){

                        if(!tempData.includes(challenges.labels[i])){
                            tempData.push(challenges.labels[i])
                        }
                    }
                }
            return tempData;
    }
}    
