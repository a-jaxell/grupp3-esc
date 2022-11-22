// Function parses for matching values in selected key in specified endpoint
// 
// await queryJson(property, query, endpoint); to recieve an array of room id's
// that matches the query 
const url = 'https://lernia-sjj-assignments.vercel.app/api';

export const queryJson = async (property, query, endpoint) => {
    const queryEndpoint = endpoint;
    const requestUrl = `${url}/${queryEndpoint}`;
    const queryProperty = property;
    const queryValue = query;
    try{
        const res = await fetch(requestUrl);

        if(res.ok){
            const jsonResponse = await res.json();
            const data = jsonResponse[queryEndpoint];
            const dataArray = [];
            data.forEach(element => {
                if(element[queryProperty] === queryValue){
                dataArray.push(element.id);
                }
            });
            return dataArray;
        }
    }
    catch(error){
        console.log(error);
        
    }

}