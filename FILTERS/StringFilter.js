//  export class StringFilter{
//     constructor(list){
//         this.list = list;
//         this.filterText = '';
//     }

//     challengeMatch(challenge){

//         // I nuläget matchas hela textsträngen sparad i this.filterText
//         // En uppgradering kan vara att ändra koden till att dela upp hela textsträngen i
//         // ord och spara dem i en array och sen matcha varje element i arrayen mot
//         // titel description
//         // case sensitive
//         // .toUpperCase // .toLowerCase

//         // använda sig av .slice

//         if(challenge.data.title.includes(this.filterText) || challenge.data.description.includes(this.filterText)){
//             return true;
//         } else {
//             return false;    
//         }
//     }

//     render() {
//         // Här ska ett inputfält renderas och skapa ett inputfält som vars värde 
//         // lagras i .filterText
        
//         const input = document.createElement('input');
//         input.type = 'text';
//         input.addEventListener('keyup', (event) => {
//             this.filterText = event.target.value;
//             this.list.update();
//         });
//     }
// }
