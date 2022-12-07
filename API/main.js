import {ChallengeList} from "./ChallengeList.js";
    
(async () => {
  const body = document.querySelector('body');
  const footer = document.querySelector('footer');
  const challengeList = new ChallengeList();
  const ctr = await challengeList.render();
  body.insertBefore(ctr, footer);

  document.querySelector('.filters-toggle').addEventListener('click', () => {
    document.querySelector('.filter-menu').classList.toggle('open');
    document.querySelector('.filters-toggle').style.display = 'none';
})
document.querySelector('.crossBox').addEventListener('click', () => {
  document.querySelector('.filter-menu').classList.toggle('open');
  document.querySelector('.filters-toggle').style.display = 'block';
})


})();