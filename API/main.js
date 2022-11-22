import ChallengeList from "./ChallengeList.js";
    
(async () => {
  const container = document.querySelector(".challenges");
  const challengeList = new ChallengeList();
  const ul = await challengeList.render();
  ul.className = "challenge-list";
  container.prepend(ul);
})();