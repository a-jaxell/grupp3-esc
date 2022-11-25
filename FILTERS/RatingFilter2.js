export default class RatingFilter2 {
    list;
    minRating;
  constructor(list) {
    this.minRating = 0;
    this.list = list;
  }

  challengeMatch(challenge) {
    if (challenge.data.rating >= this.minRating) {
      return true;
    } else {
      false;
    }
  }

  render() {
    const input = document.createElement("input");
    input.type = "range";
    input.min = 0;
    input.max = 5;
    input.value = 0;
    input.addEventListener("change", (ev) => {
      this.minRating = ev.target.value;
      this.list.update();
    });
    return input;
  }
}
