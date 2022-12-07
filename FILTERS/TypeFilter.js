export class TypeFilter{
    constructor(list){
        this.list = list;
        this.isOnlineChecked = true;
        this.isOnsiteChecked = true;
    }

    // checkar ifall värdena för boxarna är sanna eller falska
    // och returnerar värde därefter

    challengeDoesMatch(challenge){
        if(!this.isOnlineChecked && !this.isOnsiteChecked){
            return false;
        }else if(challenge.data.type === 'online' && this.isOnlineChecked){
            return true;
        }else if(challenge.data.type === 'onsite' && this.isOnsiteChecked){
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
        inputOnline.checked = true;

        const labelOnline = document.createElement('label');
        labelOnline.for = 'checkBoxOnline';
        labelOnline.innerText = 'Include online challenges';
        
        const inputOnsite = document.createElement('input');
        inputOnsite.id ='checkBoxOnsite'
        inputOnsite.type = 'checkbox';
        inputOnsite.checked = true;

        const labelOnsite = document.createElement('label');
        labelOnsite.for = 'checkBoxOsite';
        labelOnsite.innerText = 'Include onsite challenges';
        
        const htmlBrk = document.createElement('br');
        const typeTitle = document.createElement('h4');
        typeTitle.innerText = 'By type';

        checkBoxDiv.append(typeTitle);
        checkBoxDiv.append(inputOnline);
        checkBoxDiv.append(labelOnline);
        checkBoxDiv.append(htmlBrk);
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