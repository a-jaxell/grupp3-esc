export class TypeFilter{
    constructor(list){
        this.list = list;
        this.isOnlineChecked = null;
        this.isOnsiteChecked = null;
    }

    // checkar ifall värdena för boxarna är sanna eller falska
    // och returnerar värde därefter

    challengeDoesMatch(challenge){
        if(!this.isOnlineChecked && !this.isOnsiteChecked){
            console.log('here');
            return false;
        }else if(challenge.data.type === 'online' && this.isOnlineChecked){
            console.log('and here');
            return true;
        }else if(challenge.data.type === 'onsite' && this.isOnsiteChecked){
            console.log('and here too');
            return true;
        }
    }
    
    // Skapar en container med 2 checkboxar i DOM och ger dem labels
    // Båda får en eventlistener som updaterar respektive värde i objektet.

    render(){
        const checkBoxDiv = document.createElement('div');
        checkBoxDiv.className = 'checkBoxSection';

        const inputOnline = document.createElement('input');
        inputOnline.id = 'checkBoxOnline';
        inputOnline.type = 'checkbox';

        const labelOnline = document.createElement('label');
        labelOnline.for = 'checkBoxOnline';
        labelOnline.innerText = 'Include online challenges';
        
        const inputOnsite = document.createElement('input');
        inputOnsite.id ='checkBoxOnsite'
        inputOnsite.type = 'checkbox';

        const labelOnsite = document.createElement('label');
        labelOnsite.for = 'checkBoxOsite';
        labelOnsite.innerText = 'Include onsite challenges';
        
        checkBoxDiv.append(inputOnline);
        checkBoxDiv.append(labelOnline);
        checkBoxDiv.append(inputOnsite);
        checkBoxDiv.append(labelOnsite);

        inputOnline.addEventListener('change', (event) => {
            this.isOnlineChecked = event.target.checked;
            this.list.update();
        });
        inputOnsite.addEventListener('change', (event) => {
            this.isOnsiteChecked = event.target.checked;
            this.list.update();
        });
        return checkBoxDiv;
    }
}