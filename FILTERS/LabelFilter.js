export class LabelFilter{
    constructor(list){
        this.list = list;
        this.labelButtons = [];
        this.matchArray = [];
    }

    // Matchar varje label i varje challenge emot en array som innehåller "nedtryckta" knappar

    challengeDoesMatch(challenge){
        if(this.matchArray.every(ele => challenge.data.labels.includes(ele))){
            return true;
        } else {
            return false;
        }

    }
    
     // itererar genom den temporära Arrayen och skapar en 
     // knapp med texten i array[i]
     // Skapar en array som innehåller labels som ska matchas emot challenges
     // TODO : lägga till en toggle av styling vid klick på knappar. 
    
    render(){
        
             const labelSection = document.createElement('div');
             labelSection.className = 'labelSection';
            
             const labelHeader = document.createElement('h4');
             labelHeader.innerText = 'By tags';
             labelHeader.className = 'labelHeader';
             labelSection.append(labelHeader);

             for(let i = 0; i < this.list.challenges.length; i++){
                this.list.challenges[i].data.labels.forEach(element => {
                    if(!this.labelButtons.includes(element)){
                        this.labelButtons.push(element)
                    }
                });
            }
            for(let i = 0; i < this.labelButtons.length; i++){
                const labelButton = document.createElement('input');
                labelButton.type = 'button';
                labelSection.append(labelButton);
                labelButton.value = this.labelButtons[i].charAt(0).toUpperCase().concat(this.labelButtons[i].slice(1));
               
            }
            labelSection.addEventListener('click', (ev) => {
                if(!this.matchArray.includes(ev.target.value.toLowerCase())){

                    this.matchArray.push(ev.target.value.toLowerCase());
                }else{

                    this.matchArray = this.matchArray.filter(ele => ele !== ev.target.value.toLowerCase());
                }
                if(ev.target.type === 'button'){
                    ev.target.classList.toggle('label-clicked');
                }
                this.list.update();
            });

            return labelSection;
        }
    }     