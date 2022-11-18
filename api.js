const cardContainer = document.querySelector(".challenges");
const challengeList = document.querySelector("#challenge-list");
const challengeArray = [];

(async () =>
{
    const res = await fetch('https://lernia-sjj-assignments.vercel.app/api/challenges');
    const data = await res.json();
    data.challenges.forEach(challenge => {
        challengeArray.push(challenge);
    });
})();

console.log(challengeArray);

function addCard(challengeArray) {
    challengeArray.forEach(element => {
        
        let card = document.createElement("li");
        let img = document.createElement("img");
        let title = document.createElement("h3");
        let rating = document.createElement("ul");
        
        card.setAttribute("class", "challenge-item");
        img.setAttribute("src", element.image);
        title.innerHTML = element.title;
        
        
        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(rating);
      
        challengeList.appendChild(card);
    });
}

addCard(challengeArray);





