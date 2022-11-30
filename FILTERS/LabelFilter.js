export class LabelFilter{
    constructor(list){
        this.list = list;
        this.labelButtons = [];
        // this.challenges = new ChallengeList;
    }
    
    // TODO: kolla hur man kan skriva om det med Array.filter();
    // Ska skriva ut alla unikaLabels som finns i datan

    challengeDoesMatch(challenge){

        const labelButtons = document.querySelectorAll('.labelButton');
        // labelButtons.addEventListener('click');

        if(labelButtons.isChecked){

        }

        // Välja alla tagg-knappar
        // Kolla ifall de är nedtryckta
        // Visa de rum som matchar nedtryckta knappar
    }
    
    render(){
        console.log(this.list.challenges[3].data.labels);
            // console.log(data.challenges);
        
             const labelSection = document.createElement('div');
             labelSection.className = 'labelSection';
            
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
                labelButton.value = this.labelButtons[i];
                labelSection.append(labelButton);
            }
            console.log(labelSection);
            return labelSection;
        }
    }     
        // itererar genom den temporära Arrayen och skapar en 
        // knapp med texten i array[i]
        // Kanske går att förenkla med array metoder.
        
        // for(let i = 0; i < data.challenges.length; i++){
        //     console.log('here');
        //         data.challenges[i].labels.forEach( element => {
        //             if(!tempData.includes(element)){
        //                 tempData.push(element)
        //             }
        //             console.log(this.tempData);
        //         })
        // }
        // for(let i = 0; i < data.challenges.length; i++){
         
         
        // Här ska tagg-knappar renderas och få eventlisteners.
        // Det ska finnas en uppsättning knappar som är unika. 
        // är de nedtryckta ska de visas som grå.
        // Vi kanske skulle kunna använda oss av radioknappar för detta. 