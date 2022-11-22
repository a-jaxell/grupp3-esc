// class Filter {

//     async filter() {

//         const api = new APIadapter();                       // indata genereras
//         const challenges = await api.loadChallenges();      // returnera data ifrån api är en array
//         let tempData = [];
//         return tempData;
//     }
// }


class Filter {
        
    async filterRating(){

        const api = new APIadapter();                       // indata genereras
        const challenges = await api.loadChallenges();      // returnera data ifrån api är en array
        let tempData = [];
            for(i = 0; i < challenges.length; i++){
                if(challenges[i].rating >= minRating && challenges[i].rating <= maxRating){
                    tempData.push(challenges[i]);
                }
                return tempData;
            }
    }

    async filterType(type){                            // returnerar

        const api = new APIadapter();                       
        const challenges = await api.loadChallenges(); 

        challenges.forEach(type => type === challenges.type ? true : false);
    }

        // filtrera sträng mot titel och Description.

    async filterTitle(string){

        const api = new APIadapter();                       
        const challenges = await api.loadChallenges(); 
        let tempData = [];

        tempdata = challenges.map( function { 
            challenges.title.includes(string)
        });

    }

    async filterLabels(){

        // kollar ifall en challenge har en matchande tagg emot tagknapparna

        const labels = new GetLabels();

        const api = new APIadapter();
        const challenges = await api.loadChallenges();

        if(null){

        }

    }

}

class GetLabels{

    async getLabels(){                      

        //itererar genom alla labels i alla challenges
        //lägger till dem i en ny array om de inte finns i den redan

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


 // ta in data
 // utföra en funktion på hela arrayen som returnerar de som matchar
 // returnera matchande data




//     export const queryJson = async (property, query, endpoint) => {
//         const queryEndpoint = endpoint;
//         const requestUrl = `${url}/${queryEndpoint}`;
//         const queryProperty = property;
//         const queryValue = query;
//         try{
//             const res = await fetch(requestUrl);
    
//             if(res.ok){
//                 const jsonResponse = await res.json();
//                 const data = jsonResponse[queryEndpoint];
//                 const dataArray = [];
//                 data.forEach(element => {
//                     if(element[queryProperty] === queryValue){
//                     dataArray.push(element.id);
//                     }
//                 });
//                 return dataArray;
//             }
//         }
//         catch(error){
//             console.log(error);
            
//         }
    
//     }
// }