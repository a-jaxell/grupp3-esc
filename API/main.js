import {ChallengeList} from "./ChallengeList.js";
    
(async () => {
  const body = document.querySelector('body');
  const footer = document.querySelector('footer');
  const challengeList = new ChallengeList();
  const ctr = await challengeList.render();
  body.insertBefore(ctr, footer);
})();