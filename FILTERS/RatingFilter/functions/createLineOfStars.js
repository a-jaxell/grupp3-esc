export function createLineOfStars(ctr, arr, id, count) {
      const lineOfStars = document.createElement("div");
      lineOfStars.className = 'lineOfStars';
      for (let i = count; i > 0; i--) {

        const input = document.createElement("input"); //this element is hidden with css
        input.setAttribute("type", "radio");
        input.setAttribute("name", [id]);
        input.setAttribute("id", `${id}-${i}`);
        input.setAttribute("value", [i]);
        arr.push(input); //pushed here, so we can see which stars are checked

        const label = document.createElement("label"); //visual representation of the star
        label.setAttribute("for", `${id}-${i}`);
        lineOfStars.append(input, label);
      }

      lineOfStars.addEventListener('change', () =>  {
        const arr = document.querySelector('.lineOfStars');
      })
      ctr.append(lineOfStars); //Appended to outer container
    }

