export function createLineOfStars(ctr, arr, id, count) {

  const lineOfStars = document.createElement("div");
  lineOfStars.className = "lineOfStars";

  for (let i = count; i > 0; i--) {

    const input = document.createElement("input"); //this element is hidden with css
    input.setAttribute("type", "radio");
    input.setAttribute("name", [id]);
    input.setAttribute("id", `${id}-${i}`);
    input.setAttribute("value", [i]);
    arr.push(input, input.value); //pushed here, so we can see which stars are checked

    const label = document.createElement("label"); //visual representation of the star
    label.setAttribute("for", `${id}-${i}`);
    label.setAttribute("id", `${id}-${i}`);

    lineOfStars.append(input, label);

  }
  
  ctr.append(lineOfStars); //Appended to outer container


  let selectedLabel;

  lineOfStars.onclick = ('click', function(event) { //event delegation
    let element = event.target;
    if(element.checked)
    console.log(`Clicked button: ${element}`);
  });
}

