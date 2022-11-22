import {queryJson} from './filter-helper.js';


console.log("im loaded!");

// console.log(await queryJson('type','onsite', 'challenges'));

let checkOnline = document.querySelector('#onlineCheckbox');
const checkState = () => {
    if(checkOnline){
        return 'online'
    }
}

