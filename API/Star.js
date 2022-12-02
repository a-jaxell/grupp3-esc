// export class Star {
//     render(rating) {

//         const li = document.createElement('li');

//         let stars = 5;
//         let wholeStars;
//         let halfStar;
    
//         if (Number.isInteger(this.data.rating)) {
//           wholeStars = this.data.rating;
//           createStar(wholeStars, 'fa-solid', 'fa-star');
    
//           stars -= wholeStars;
//           createStar(stars, 'fa-regular', 'fa-star');
//         } else {
//           const roundedRating = Math.floor(this.data.rating);
    
//           wholeStars = roundedRating;
    
//           createStar(wholeStars, 'fa-solid', 'fa-star');
//           halfStar = 1;
//           createStar(halfStar, 'fa-solid', 'fa-star-half-stroke');
    
//           stars -= roundedRating + halfStar;
//           createStar(stars, 'fa-regular', 'fa-star');
//         }
//         //<i class="fa-solid fa-star"></i>
//         function createStar(count, class1, class2) {
//           for (let i = 0; i < count; i++) {
//             const star = document.createElement("li");
//             star.classList.add(class1, class2);
//             rating.appendChild(star);
//           }
//         }
//         return 
//     };
// }