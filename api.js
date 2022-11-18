const challengeArr = [];

export async function asyncCall() {
  const res = await fetch("https://lernia-sjj-assignments.vercel.app/api/challenges");
  const data = await res.json();
  data.challenges.forEach((challenge) => {
    challengeArr.push(challenge);
  });
}

console.log(challengeArr);

const challenges = document.querySelector(".challenges");
const challengeList = document.querySelector(".challenge-list");


// Funktion som skapar element i DOM med värden tagna från objekt som skapas ifrån API
function addCard(object) {
  let card = document.createElement("li"); //yttersta elementet
  let img = document.createElement("img");
  let title = document.createElement("h3");
  let rating = document.createElement("ul");

  card.setAttribute("class", "challenge-item");
  img.setAttribute("src", object.img);
  title.innerHTML(object.title); // <-- problem, you figure ;)
  title.innerHTML = object.title;

  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(rating);

  challengeList.appendChild(card);
}