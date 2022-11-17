const challenges = document.querySelector(".challenges");
const challengeList = document.querySelector(".challenge-list");



//Objekt som skapats från ett API
const challenge1 = {
    title: "Title of Challenge",
    description: "skitroligt rum jag svär",
    type: "online",
    img: "https://placekitten.com/g/200/300",
    rating: "3",
    minParticipants: 2,
    maxParticipants: 6,
    tags = ['online', 'Cryptography', 'Hacking', 'Puzzle']
};


// Funktion som skapar element i DOM med värden tagna från objekt som skapas ifrån API
function addCard(object) {

    let card = document.createElement("li"); //yttersta elementet
    let img = document.createElement("img");
    let title = document.createElement("h3");
    let rating = document.createElement("ul");


    card.setAttribute("class", "challenge-item");
    img.setAttribute("src", object.img);
    title.innerHTML(object.title);
    title.innerHTML = object.title;

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(rating);

    challengeList.appendChild(card);
}

asdasdasdasd
asdasdasdasd
btn.addEventListener("click", () => {
    addCard();
});


/*            <li class="challenge-item">
<img class="challenge-image" alt="Hacker" src="static/hero.png">
<h3 class="challenge-title">Title of room (on-site)</h3>
<ul role="meter" class="rating" aria-label="rating"
    arial-valuemin="0" aria-valuemax="5" aria-valuenow="4"
    aria-valuetext="4 out of 5">

    <li class="rating-star active"></li>
    <li class="rating-star active"></li>
    <li class="rating-star active"></li>
    <li class="rating-star active"></li>
    <li class="rating-star"></li>
</ul>
<small class="challenge-meta">2-6 participants</small>
<p class="challenge-description">
    Praeterea, ex culpa non invenies unum aut non accusatis
    unum. Et nihil inuitam. Nemo nocere tibi
    erit, et non inimicos, et
</p>
<button class="button primary">Book this room</button>
</li>
/*