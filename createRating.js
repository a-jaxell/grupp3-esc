/*
<ul role="meter" class="rating" aria-label="rating"
    arial-valuemin="0" aria-valuemax="5" aria-valuenow="4"
    aria-valuetext="4 out of 5">

    <li class="rating-star active"></li>
    <li class="rating-star active"></li>
    <li class="rating-star active"></li>
    <li class="rating-star active"></li>
    <li class="rating-star"></li>
</ul>
*/


// hämta värdet av rating från API
// skapa en loop som itererar x antal ggr beroende på vad rating har för värde
// skapa li element med stjärnor som är ifyllda eller ej beroende på rating

//TODO : Anpassa för halva stjärnor.

//funktion som skapar en ul med stjärnor 
function createList(arg, rating){
    const target = document.querySelector(arg);
    target.appendChild(document.createElement("ul"));
    target.firstChild.classList.add('rating')
    for(i = 0; i < rating; i++){

      let li = document.createElement("li");
      target.firstChild.appendChild(li);
      li.classList.add('rating-star');
      li.classList.add('active');

    }
    for(i = 0; i < 5 - rating; i++){

        let li = document.createElement("li");
        target.firstChild.appendChild(li);
        li.classList.add('rating-star');

    }
}