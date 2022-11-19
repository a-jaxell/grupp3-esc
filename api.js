const cardContainer = document.querySelector(".challenges");
const challengeList = document.querySelector(".challenge-list");
const challengeArray = [];
const testBtn = document.querySelector("#hej");


testBtn.addEventListener("click", () => {
    console.log("stringie");
    addCard(challengeArray);

});

// cardContainer & challengeList TODO: classnamn/id? ^
(async () =>
{
    const res = await fetch('https://lernia-sjj-assignments.vercel.app/api/challenges');
    const data = await res.json();
    data.challenges.forEach(challenge => {
        challengeArray.push(challenge);
    });
    addCard(); //wait for async to finish
})();

//remove function
function addCard() {
    
    challengeArray.forEach(ele => {
        
      let item = document.createElement("li");
      
      let img = document.createElement("img");
      img.setAttribute("src", ele.image);
      let title = document.createElement("h3");
      title.innerHTML = `${ele.title} (${ele.type})`;
      
      let rating = document.createElement("ul") // alvars funktion
      let star = document.createElement("li");
      star.className = "rating-star active"; //tillfällig funktion
      (() => {
          rating.appendChild(star) * 5;
      })();
      
      let Participants = document.createElement("small");
      Participants.className = "challenge-meta";
      Participants.innerHTML = `${ele.minParticipants}-${ele.maxParticipants} participants`;
      
      let description = document.createElement("p");
      description.className = "challenge-description";
      description.innerHTML = ele.description;
      
      item.setAttribute("class", "challenge-item");
      
      item.appendChild(img);
      item.appendChild(title);
      item.appendChild(rating);
      
      challengeList.appendChild(item);
  });
}

// function printArr() {
//     console.log(challengeArray);
// }
// setTimeout(printArr, 3000);
// setTimeout(addCard, 3000);



/*

​​
description: "Take over the world with code"
​​
id: 1
​​
image: "https://placekitten.com/640/480"
​​
labels: Array [ "bash", "linux" ]
​​
maxParticipants: 6
​​
minParticipants: 1
​​
rating: 3.5
​​
title: "Shell 3000"
​
type: "onsite"

*/

/*

    <li class="challenge-item">
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
        </ul>

*/ 