export class Stars {
    render(rating) {

      const ul = document.createElement('ul');
        let stars = 5;
        let wholeStars;
        let halfStar;
    
        if (Number.isInteger(rating)) {
          wholeStars = rating;
          createStar(wholeStars, 'fa-solid', 'fa-star');
    
          stars -= wholeStars;
          createStar(stars, 'fa-regular', 'fa-star');
        } else {
          const roundedRating = Math.floor(rating);
    
          wholeStars = roundedRating;
    
          createStar(wholeStars, 'fa-solid', 'fa-star');
          halfStar = 1;
          createStar(halfStar, 'fa-solid', 'fa-star-half-stroke');
    
          stars -= roundedRating + halfStar;
          createStar(stars, 'fa-regular', 'fa-star');
        }
        //<i class="fa-solid fa-star"></i>
        function createStar(count, class1, class2) {
          for (let i = 0; i < count; i++) {
            const star = document.createElement("li");
            star.classList.add(class1, class2);
            ul.appendChild(star);
          }
        }
        return ul;
    };
}