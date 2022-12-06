 export class StringFilter{
    constructor(list){
        this.list = list;
        this.filterText = [''];
    }

        // Orden i this.filtertext matchas emot titel
        // och description som även de konverterats till
        // lowercase.

    challengeDoesMatch(challenge){

        if(this.filterText.some(element => challenge.data.title.toLowerCase().includes(element)) 
        || this.filterText.some(element => challenge.data.description.toLowerCase().includes(element)))
        {
            return true;
        } else {
            return false;    
        }
    }

        // Ett inputfält skapas och textsträngen konverteras till
        // små bokstäver och sparas i this.filterText som sedan
        // delas upp i enstaka ord med hjälp av .split.

    render() {
        let stringFilterContainer = document.createElement('div');
        let stringFilterTitle = document.createElement('h4');
        const input = document.createElement('input');
        
        stringFilterTitle.innerHTML = 'Or type to search for keyword';
        stringFilterContainer.className = 'stringInput';
        
        stringFilterContainer.append(stringFilterTitle, input);
        input.type = 'text';
        input.placeholder = 'Start typing to filter';
        
        
        input.addEventListener('keyup', (event) => {
            this.filterText = event.target.value.toLowerCase();
            this.filterText = this.filterText.split(' ');
            console.log(this.filterText);
            this.list.update();
            
        });
        return stringFilterContainer;
    }
}
