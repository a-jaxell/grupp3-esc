export function createLineOfStars(ctr, arr, id, count, uniqueClassName) {
      const lineOfStars = document.createElement("div");
      lineOfStars.classList.add('lineOfStars', uniqueClassName);
      for (let i = count; i > 0; i--) {

        const input = document.createElement("input"); //this element is hidden with css
        input.setAttribute("type", "radio");
        input.setAttribute("name", [id]);
        input.setAttribute("id", `${id}-${i}`);
        input.setAttribute("value", [i]);
        
        const label = document.createElement("label"); //visual representation of the star
        label.setAttribute("for", `${id}-${i}`);
        label.setAttribute("id", `${id}-${i}`);
        
        arr.push(input); //pushed here, so we can see which stars are checked
        label.addEventListener('click', () => {
        })

        lineOfStars.append(input, label);
      }

      // lineOfStars.addEventListener('change', () =>  {
      //   const arr = document.querySelector('.lineOfStars');
      // })
      ctr.append(lineOfStars); //Appended to outer container
    }

