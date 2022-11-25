// export class TypeFilter{
//     constructor(list){
//         this.list = list;
//     }

//     challengeMatch(challenge){
//         if(challenge.data.type){
//             return true;
//         }
//     }
    
//     render(){
//         const inputOnline = document.createElement('input');
//         const inputOnsite = document.createElement('input');

//         inputOnline.type = 'checkbox';
//         inputOnsite.type = 'checkbox';

//         inputOnline.isChecked = true;
//         inputOnsite.isChecked = true;


//         // .isChecked returnerar true/false om boxen är tickad

//         inputOnline.addEventListener('change', (event) => {
//             return event.target.isChecked;
//                 });
//         inputOnsite.addEventListener('change', (event) => {
//             return event.target.isChecked;
//         })
//     }
// }